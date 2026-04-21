// Outbound Masterclass Workbook - Application Logic
// Handles: routing, rendering, auto-save to localStorage, progress tracking

(function() {
  'use strict';

  const STORAGE_KEY = 'outbound-workbook-v1';
  const STATE = {
    currentModuleId: null,
    data: {},
    saveTimeout: null,
    isSaving: false
  };

  // ========================================
  // STORAGE
  // ========================================

  function loadData() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) STATE.data = JSON.parse(raw);
    } catch (e) {
      console.warn('Could not load saved data', e);
      STATE.data = {};
    }
  }

  function scheduleSave() {
    if (STATE.saveTimeout) clearTimeout(STATE.saveTimeout);
    setSaveIndicator('saving');
    STATE.saveTimeout = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(STATE.data));
        setSaveIndicator('saved');
      } catch (e) {
        console.error('Save failed', e);
        setSaveIndicator('error');
      }
    }, 400);
  }

  function getValue(path) {
    const parts = path.split('.');
    let cursor = STATE.data;
    for (const p of parts) {
      if (cursor == null) return '';
      cursor = cursor[p];
    }
    return cursor == null ? '' : cursor;
  }

  function setValue(path, value) {
    const parts = path.split('.');
    let cursor = STATE.data;
    for (let i = 0; i < parts.length - 1; i++) {
      if (cursor[parts[i]] == null || typeof cursor[parts[i]] !== 'object') {
        cursor[parts[i]] = {};
      }
      cursor = cursor[parts[i]];
    }
    cursor[parts[parts.length - 1]] = value;
    scheduleSave();
    updateProgress();
  }

  // ========================================
  // UI HELPERS
  // ========================================

  function setSaveIndicator(state) {
    const el = document.getElementById('saveIndicator');
    if (!el) return;
    el.classList.remove('saving', 'saved', 'error');
    if (state === 'saving') {
      el.classList.add('saving');
      el.innerHTML = '<span class="save-indicator-dot"></span><span>Saving...</span>';
    } else if (state === 'saved') {
      el.classList.add('saved');
      el.innerHTML = '<span class="save-indicator-dot"></span><span>Saved</span>';
    } else if (state === 'error') {
      el.innerHTML = '<span>Error saving</span>';
    }
  }

  function escapeHtml(str) {
    if (str == null) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // ========================================
  // PROGRESS CALCULATION
  // ========================================

  function isModuleComplete(module) {
    if (!module.exercises || module.exercises.length === 0) return false;
    // A module is complete if at least one field in every exercise has been touched
    return module.exercises.every(ex => exerciseHasAnyData(module.id, ex));
  }

  function isModuleInProgress(module) {
    if (!module.exercises || module.exercises.length === 0) return false;
    return module.exercises.some(ex => exerciseHasAnyData(module.id, ex));
  }

  function exerciseHasAnyData(moduleId, exercise) {
    const data = getValue(`${moduleId}.${exercise.id}`);
    if (!data) return false;
    return hasAnyValue(data);
  }

  function hasAnyValue(obj) {
    if (obj == null) return false;
    if (typeof obj === 'string') return obj.trim().length > 0;
    if (typeof obj === 'boolean') return obj === true;
    if (typeof obj === 'number') return true;
    if (Array.isArray(obj)) return obj.some(hasAnyValue);
    if (typeof obj === 'object') return Object.values(obj).some(hasAnyValue);
    return false;
  }

  function getOverallProgress() {
    const modules = WORKBOOK_CONTENT.modules;
    const completed = modules.filter(isModuleComplete).length;
    return {
      completed,
      total: modules.length,
      percent: Math.round((completed / modules.length) * 100)
    };
  }

  function updateProgress() {
    const { completed, total, percent } = getOverallProgress();

    const fill = document.getElementById('progressFill');
    if (fill) fill.style.width = percent + '%';

    const label = document.getElementById('progressLabel');
    if (label) label.textContent = `${completed} of ${total} modules complete`;

    // Update sidebar module statuses
    document.querySelectorAll('.sidebar-module').forEach(el => {
      const modId = el.dataset.moduleId;
      const mod = WORKBOOK_CONTENT.modules.find(m => m.id === modId);
      if (!mod) return;
      el.classList.remove('completed', 'in-progress');
      if (isModuleComplete(mod)) el.classList.add('completed');
      else if (isModuleInProgress(mod)) el.classList.add('in-progress');
    });
  }

  // ========================================
  // INPUT WIRING
  // ========================================

  function wireInput(el) {
    const path = el.dataset.path;
    if (!path) return;
    const type = el.dataset.valueType || el.type;

    if (type === 'checkbox') {
      const saved = getValue(path);
      el.checked = saved === true;
      el.addEventListener('change', () => setValue(path, el.checked));
      return;
    }

    if (type === 'radio') {
      const saved = getValue(path);
      if (saved === el.value) el.checked = true;
      el.addEventListener('change', () => {
        if (el.checked) setValue(path, el.value);
      });
      return;
    }

    // text, textarea, select
    const saved = getValue(path);
    if (saved) el.value = saved;
    el.addEventListener('input', () => setValue(path, el.value));
  }

  function wireAllInputs(container) {
    container.querySelectorAll('[data-path]').forEach(wireInput);
  }

  // ========================================
  // EXERCISE RENDERERS
  // ========================================

  function renderField(field, basePath, inTable) {
    const path = `${basePath}.${field.id}`;
    const type = field.type || 'input';
    const id = `f-${path.replace(/\./g, '-')}`;
    const placeholder = field.placeholder || '';

    if (type === 'textarea') {
      const rows = field.rows || 3;
      return `<textarea class="field-textarea" id="${id}" rows="${rows}" placeholder="${escapeHtml(placeholder)}" data-path="${path}"></textarea>`;
    }

    if (type === 'select') {
      const opts = (field.options || []).map(o => `<option value="${escapeHtml(o)}">${escapeHtml(o)}</option>`).join('');
      return `<select class="field-select" id="${id}" data-path="${path}"><option value="">Select...</option>${opts}</select>`;
    }

    if (type === 'radio') {
      const opts = (field.options || []).map(o => {
        const rid = `${id}-${o.replace(/\s+/g, '-').toLowerCase()}`;
        return `
          <label class="radio-option">
            <input type="radio" name="${id}" value="${escapeHtml(o)}" data-path="${path}" data-value-type="radio" />
            <span class="radio-option-label">${escapeHtml(o)}</span>
          </label>`;
      }).join('');
      return `<div class="radio-group">${opts}</div>`;
    }

    return `<input type="text" class="field-input" id="${id}" placeholder="${escapeHtml(placeholder)}" data-path="${path}" />`;
  }

  function renderExercise(ex, moduleId) {
    const basePath = `${moduleId}.${ex.id}`;
    let body = '';

    switch (ex.type) {
      case 'scoring-grid':
        body = renderScoringGrid(ex, basePath);
        break;
      case 'fillable-table':
        body = renderFillableTable(ex, basePath);
        break;
      case 'account-grid':
        body = renderAccountGrid(ex, basePath);
        break;
      case 'messaging-matrix':
        body = renderMessagingMatrix(ex, basePath);
        break;
      case 'checklist':
        body = renderChecklist(ex, basePath);
        break;
      case 'offer-grid':
        body = renderOfferGrid(ex, basePath);
        break;
      case 'template-fill':
        body = renderTemplateFill(ex, basePath);
        break;
      case 'trigger-table':
        body = renderTriggerTable(ex, basePath);
        break;
      case 'sequence-table':
        body = renderSequenceTable(ex, basePath);
        break;
      case 'numbered-list':
        body = renderNumberedList(ex, basePath);
        break;
      case 'numbered-textarea':
        body = renderNumberedTextarea(ex, basePath);
        break;
      case 'objection-table':
        body = renderObjectionTable(ex, basePath);
        break;
      case 'formula-table':
        body = renderFormulaTable(ex, basePath);
        break;
      case 'bump-table':
        body = renderBumpTable(ex, basePath);
        break;
      case 'hours-grid':
        body = renderHoursGrid(ex, basePath);
        break;
      case 'week-schedule':
        body = renderWeekSchedule(ex, basePath);
        break;
      case 'multi-textarea':
        body = renderMultiTextarea(ex, basePath);
        break;
      case 'action-plan':
        body = renderActionPlan(ex, basePath);
        break;
      case 'single-textarea':
        body = renderSingleTextarea(ex, basePath);
        break;
      case 'custom':
        body = renderCustomFields(ex, basePath);
        break;
      default:
        body = `<div class="field">Exercise type not implemented: ${ex.type}</div>`;
    }

    const followUp = ex.followUp ? `
      <div class="exercise-followup">
        <div class="exercise-followup-label">${escapeHtml(ex.followUp)}</div>
        <textarea class="field-textarea" rows="3" data-path="${basePath}.${ex.followUpId}"></textarea>
      </div>
    ` : '';

    return `
      <div class="exercise">
        <div class="exercise-label">
          <span class="exercise-label-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
          </span>
          <span>Action</span>
        </div>
        <h3 class="exercise-title">${escapeHtml(ex.title)}</h3>
        <p class="exercise-instruction">${escapeHtml(ex.instruction)}</p>
        ${body}
        ${followUp}
      </div>
    `;
  }

  function renderScoringGrid(ex, basePath) {
    const rows = ex.fields.map(f => {
      const path = `${basePath}.${f.id}`;
      const radios = [1, 2, 3, 4, 5].map(n => {
        const rid = `${path.replace(/\./g, '-')}-${n}`;
        return `
          <label class="scoring-radio">
            <input type="radio" name="${path}" value="${n}" id="${rid}" data-path="${path}" data-value-type="radio" />
            <span class="scoring-radio-label">${n}</span>
          </label>`;
      }).join('');
      return `
        <div class="scoring-row">
          <span class="scoring-row-label">${escapeHtml(f.label)}</span>
          <div class="scoring-radios">${radios}</div>
        </div>
      `;
    }).join('');

    return `
      <div class="scoring-grid">${rows}</div>
      <div class="scoring-scale">
        <span>1 = Nonexistent</span>
        <span>5 = World-class</span>
      </div>
    `;
  }

  function renderFillableTable(ex, basePath) {
    const rows = ex.fields.map(f => `
      <div class="vertical-table-row">
        <div class="vertical-table-label">${escapeHtml(f.label)}</div>
        <div class="vertical-table-value">${renderField(f, basePath, true)}</div>
      </div>
    `).join('');
    return `<div class="vertical-table">${rows}</div>`;
  }

  function renderAccountGrid(ex, basePath) {
    const cards = [];
    for (let i = 1; i <= ex.accountCount; i++) {
      const accountPath = `${basePath}.account${i}`;
      const fields = ex.fields.map(f => `
        <div class="field">
          <label class="field-label">${escapeHtml(f.label)}</label>
          ${renderField(f, accountPath)}
        </div>
      `).join('');
      cards.push(`
        <div class="account-card">
          <div class="account-card-title">Account ${i}</div>
          ${fields}
        </div>
      `);
    }
    return `<div class="account-grid">${cards.join('')}</div>`;
  }

  function renderMessagingMatrix(ex, basePath) {
    const tables = [];
    for (let i = 1; i <= ex.personas; i++) {
      const personaPath = `${basePath}.persona${i}`;
      const header = `<tr>${ex.columns.map(c => `<th>${escapeHtml(c.label)}</th>`).join('')}</tr>`;
      const cells = ex.columns.map(c => {
        const path = `${personaPath}.${c.id}`;
        return `<td data-label="${escapeHtml(c.label)}"><textarea class="field-textarea" rows="3" data-path="${path}" placeholder="..."></textarea></td>`;
      }).join('');
      tables.push(`
        <div class="field">
          <label class="field-label">Persona ${i}: <input type="text" class="field-input" style="display:inline-block;width:auto;margin-left:8px;" placeholder="Persona name/title" data-path="${personaPath}.name" /></label>
        </div>
        <table class="data-table" style="margin-bottom:24px;">
          <thead>${header}</thead>
          <tbody><tr>${cells}</tr></tbody>
        </table>
      `);
    }
    return tables.join('');
  }

  function renderChecklist(ex, basePath) {
    const items = ex.items.map((item, i) => {
      const path = `${basePath}.item${i}`;
      const id = `c-${path.replace(/\./g, '-')}`;
      return `
        <label class="checklist-item">
          <input type="checkbox" id="${id}" data-path="${path}" data-value-type="checkbox" />
          <span class="checklist-checkbox"></span>
          <span class="checklist-label">${escapeHtml(item)}</span>
        </label>
      `;
    }).join('');
    return `<div class="checklist">${items}</div>`;
  }

  function renderOfferGrid(ex, basePath) {
    return ex.offers.map(offer => {
      const offerPath = `${basePath}.${offer.id}`;
      const fields = ex.fields.map(f => `
        <div class="field">
          <label class="field-label">${escapeHtml(f.label)}</label>
          ${renderField(f, offerPath)}
        </div>
      `).join('');
      return `
        <div class="offer-grid-item">
          <div class="offer-grid-header">
            <span class="offer-grid-title">${escapeHtml(offer.label)}</span>
            <span class="offer-grid-desc">${escapeHtml(offer.description)}</span>
          </div>
          <div class="offer-grid-fields">${fields}</div>
        </div>
      `;
    }).join('');
  }

  function renderTemplateFill(ex, basePath) {
    const fields = ex.fields.map(f => `
      <div class="field">
        <label class="field-label">${escapeHtml(f.label)}</label>
        ${renderField(f, basePath)}
      </div>
    `).join('');
    return `
      <div class="exercise-template">${escapeHtml(ex.template)}</div>
      ${fields}
    `;
  }

  function renderTriggerTable(ex, basePath) {
    const header = `<tr>${ex.fields.map(f => `<th>${escapeHtml(f.label)}</th>`).join('')}</tr>`;
    const rows = [];
    for (let i = 1; i <= ex.rows; i++) {
      const rowPath = `${basePath}.row${i}`;
      const cells = ex.fields.map(f => `<td data-label="${escapeHtml(f.label)}">${renderField(f, rowPath, true)}</td>`).join('');
      rows.push(`<tr>${cells}</tr>`);
    }
    return `<table class="data-table"><thead>${header}</thead><tbody>${rows.join('')}</tbody></table>`;
  }

  function renderSequenceTable(ex, basePath) {
    const header = `<tr><th>Day</th>${ex.fields.map(f => `<th>${escapeHtml(f.label)}</th>`).join('')}</tr>`;
    const rows = [];
    for (let d = 1; d <= ex.days; d++) {
      const dayPath = `${basePath}.day${d}`;
      const cells = ex.fields.map(f => `<td data-label="${escapeHtml(f.label)}">${renderField(f, dayPath, true)}</td>`).join('');
      rows.push(`<tr><td data-label="Day" class="row-label">Day ${d}</td>${cells}</tr>`);
    }
    return `<table class="data-table"><thead>${header}</thead><tbody>${rows.join('')}</tbody></table>`;
  }

  function renderNumberedList(ex, basePath) {
    const rows = [];
    for (let i = 1; i <= ex.count; i++) {
      const path = `${basePath}.item${i}`;
      rows.push(`
        <div class="numbered-row">
          <span class="numbered-row-num">${i}</span>
          <input type="text" class="field-input" placeholder="${escapeHtml(ex.placeholder || '')}" data-path="${path}" />
        </div>
      `);
    }
    return `<div class="numbered-list">${rows.join('')}</div>`;
  }

  function renderNumberedTextarea(ex, basePath) {
    const rows = [];
    for (let i = 1; i <= ex.count; i++) {
      const path = `${basePath}.item${i}`;
      rows.push(`
        <div class="numbered-row">
          <span class="numbered-row-num">${i}</span>
          <textarea class="field-textarea" rows="3" placeholder="${escapeHtml(ex.placeholder || '')}" data-path="${path}"></textarea>
        </div>
      `);
    }
    return `<div class="numbered-list">${rows.join('')}</div>`;
  }

  function renderObjectionTable(ex, basePath) {
    const header = `<tr>${ex.fields.map(f => `<th>${escapeHtml(f.label)}</th>`).join('')}</tr>`;
    const rows = [];
    for (let i = 1; i <= ex.rows; i++) {
      const rowPath = `${basePath}.row${i}`;
      const cells = ex.fields.map(f => {
        const isFirst = f.id === 'objection';
        const fieldType = isFirst ? 'input' : 'textarea';
        const modF = { ...f, type: fieldType, rows: 2 };
        return `<td data-label="${escapeHtml(f.label)}">${renderField(modF, rowPath, true)}</td>`;
      }).join('');
      rows.push(`<tr>${cells}</tr>`);
    }
    return `<table class="data-table"><thead>${header}</thead><tbody>${rows.join('')}</tbody></table>`;
  }

  function renderFormulaTable(ex, basePath) {
    const header = `<tr>${ex.fields.map(f => `<th>${escapeHtml(f.label)}</th>`).join('')}</tr>`;
    const rows = [];
    for (let i = 1; i <= ex.rows; i++) {
      const rowPath = `${basePath}.row${i}`;
      const cells = ex.fields.map(f => `<td data-label="${escapeHtml(f.label)}">${renderField(f, rowPath, true)}</td>`).join('');
      rows.push(`<tr>${cells}</tr>`);
    }
    return `<table class="data-table"><thead>${header}</thead><tbody>${rows.join('')}</tbody></table>`;
  }

  function renderBumpTable(ex, basePath) {
    return ex.fields.map(f => `
      <div class="field">
        <label class="field-label">${escapeHtml(f.label)}</label>
        ${renderField(f, basePath)}
      </div>
    `).join('');
  }

  function renderHoursGrid(ex, basePath) {
    return `<div class="hours-grid">${ex.fields.map(f => {
      const path = `${basePath}.${f.id}`;
      return `
        <div class="hours-label">${escapeHtml(f.label)}</div>
        <input type="number" class="field-input hours-input" min="0" max="80" step="0.5" placeholder="0" data-path="${path}" />
      `;
    }).join('')}</div>`;
  }

  function renderWeekSchedule(ex, basePath) {
    const days = ex.days;
    const slots = ex.timeSlots;
    const header = `
      <div class="week-grid-header">
        <div>Time</div>
        ${days.map(d => `<div>${escapeHtml(d)}</div>`).join('')}
      </div>
    `;
    const rows = slots.map(slot => {
      const slotId = slot.replace(/[:\s-]/g, '');
      const cells = days.map(d => {
        const path = `${basePath}.${slotId}.${d}`;
        return `<div><input type="text" class="field-input" placeholder="..." data-path="${path}" /></div>`;
      }).join('');
      return `<div class="week-grid-row"><div class="week-grid-time">${escapeHtml(slot)}</div>${cells}</div>`;
    }).join('');
    return `<div class="week-grid-wrap"><div class="week-grid">${header}${rows}</div></div>`;
  }

  function renderMultiTextarea(ex, basePath) {
    return ex.fields.map(f => `
      <div class="field">
        <label class="field-label">${escapeHtml(f.label)}</label>
        <textarea class="field-textarea" rows="3" data-path="${basePath}.${f.id}"></textarea>
      </div>
    `).join('');
  }

  function renderActionPlan(ex, basePath) {
    const header = `<tr><th>Week</th>${ex.fields.map(f => `<th>${escapeHtml(f.label)}</th>`).join('')}</tr>`;
    const rows = [];
    for (let w = 1; w <= ex.weeks; w++) {
      const rowPath = `${basePath}.week${w}`;
      const cells = ex.fields.map(f => `<td data-label="${escapeHtml(f.label)}">${renderField(f, rowPath, true)}</td>`).join('');
      rows.push(`<tr><td data-label="Week" class="row-label">Week ${w}</td>${cells}</tr>`);
    }
    return `<table class="data-table"><thead>${header}</thead><tbody>${rows.join('')}</tbody></table>`;
  }

  function renderSingleTextarea(ex, basePath) {
    return `<textarea class="field-textarea" rows="4" placeholder="${escapeHtml(ex.placeholder || '')}" data-path="${basePath}.value"></textarea>`;
  }

  function renderCustomFields(ex, basePath) {
    return ex.fields.map(f => {
      if (f.type === 'radio') {
        return `<div class="field"><label class="field-label">${escapeHtml(f.label)}</label>${renderField(f, basePath)}</div>`;
      }
      return `
        <div class="field">
          <label class="field-label">${escapeHtml(f.label)}</label>
          ${renderField(f, basePath)}
        </div>
      `;
    }).join('');
  }

  // ========================================
  // KEY IDEA RENDERING
  // ========================================

  function renderKeyIdea(idea) {
    let tableHtml = '';
    if (idea.table) tableHtml += renderIdeaTable(idea.table);
    if (idea.secondTable) tableHtml += renderIdeaTable(idea.secondTable);

    const listHtml = idea.list ? `<ol class="key-idea-list">${idea.list.map(l => `<li>${l}</li>`).join('')}</ol>` : '';
    const calloutHtml = idea.callout ? `<div class="key-idea-callout">${idea.callout}</div>` : '';
    const continuedHtml = idea.bodyContinued ? `<p>${idea.bodyContinued}</p>` : '';

    return `
      <div class="key-idea">
        <div class="key-idea-label">Key Idea #${idea.number}</div>
        <h2 class="key-idea-title">${escapeHtml(idea.title)}</h2>
        <div class="key-idea-body">
          <p>${idea.body || ''}</p>
          ${listHtml}
          ${calloutHtml}
          ${tableHtml}
          ${continuedHtml}
        </div>
      </div>
    `;
  }

  function renderIdeaTable(table) {
    const header = `<tr>${table.headers.map(h => `<th>${escapeHtml(h)}</th>`).join('')}</tr>`;
    const rows = table.rows.map(r => `<tr>${r.map(c => `<td>${escapeHtml(c)}</td>`).join('')}</tr>`).join('');
    return `<div class="idea-table-wrap"><table class="idea-table"><thead>${header}</thead><tbody>${rows}</tbody></table></div>`;
  }

  // ========================================
  // MODULE / WELCOME VIEW RENDERING
  // ========================================

  function renderModule(moduleId) {
    const idx = WORKBOOK_CONTENT.modules.findIndex(m => m.id === moduleId);
    const mod = WORKBOOK_CONTENT.modules[idx];
    if (!mod) return renderWelcome();

    const prev = idx > 0 ? WORKBOOK_CONTENT.modules[idx - 1] : null;
    const next = idx < WORKBOOK_CONTENT.modules.length - 1 ? WORKBOOK_CONTENT.modules[idx + 1] : null;

    const keyIdeasHtml = (mod.keyIdeas || []).map(renderKeyIdea).join('');
    const exercisesHtml = (mod.exercises || []).map(ex => renderExercise(ex, mod.id)).join('');
    const takeawaysHtml = mod.takeaways && mod.takeaways.length ? `
      <div class="takeaways">
        <div class="takeaways-label">Key Takeaways</div>
        <h3 class="takeaways-title">Wrap-up for Module ${mod.number}</h3>
        <ul class="takeaways-list">
          ${mod.takeaways.map(t => `<li>${escapeHtml(t)}</li>`).join('')}
        </ul>
      </div>
    ` : '';

    const prevBtn = prev ? `
      <button class="module-nav-btn" data-nav="${prev.id}">
        <div class="module-nav-inner">
          <span class="module-nav-dir">← Previous</span>
          <span class="module-nav-label">Module ${prev.number}: ${escapeHtml(prev.title)}</span>
        </div>
      </button>
    ` : `
      <button class="module-nav-btn module-nav-btn-placeholder" aria-hidden="true">
        <div class="module-nav-inner">
          <span class="module-nav-dir">&nbsp;</span>
          <span class="module-nav-label">&nbsp;</span>
        </div>
      </button>
    `;

    const nextBtn = next ? `
      <button class="module-nav-btn module-nav-btn-next" data-nav="${next.id}">
        <div class="module-nav-inner">
          <span class="module-nav-dir">Next →</span>
          <span class="module-nav-label">Module ${next.number}: ${escapeHtml(next.title)}</span>
        </div>
      </button>
    ` : `
      <button class="module-nav-btn module-nav-btn-next" data-nav="welcome">
        <div class="module-nav-inner">
          <span class="module-nav-dir">Done →</span>
          <span class="module-nav-label">Back to overview</span>
        </div>
      </button>
    `;

    const footerHtml = `<div class="module-footer">${prevBtn}${nextBtn}</div>`;

    return `
      <div class="module-header">
        <span class="module-section-badge">${escapeHtml(mod.section)}</span>
        <div class="module-number-label">Module ${mod.number}</div>
        <h1 class="module-title">${escapeHtml(mod.title)}</h1>
        <p class="module-tagline">${escapeHtml(mod.tagline)}</p>
      </div>
      ${keyIdeasHtml}
      ${exercisesHtml}
      ${takeawaysHtml}
      ${footerHtml}
    `;
  }

  function renderWelcome() {
    const sections = WORKBOOK_CONTENT.sections.map((s, i) => {
      const modules = s.moduleIds.map(id => WORKBOOK_CONTENT.modules.find(m => m.id === id)).filter(Boolean);
      return `
        <div class="welcome-section-card">
          <div class="welcome-section-number">${i + 1}</div>
          <h3 class="welcome-section-name">${escapeHtml(s.name)}</h3>
          <p class="welcome-section-count">${modules.length} modules</p>
          <ul class="welcome-section-modules">
            ${modules.map(m => `<li>Module ${m.number}: ${escapeHtml(m.title)}</li>`).join('')}
          </ul>
        </div>
      `;
    }).join('');

    const { completed, total } = getOverallProgress();
    const hasProgress = completed > 0;
    const firstIncomplete = WORKBOOK_CONTENT.modules.find(m => !isModuleComplete(m));
    const startModuleId = hasProgress && firstIncomplete ? firstIncomplete.id : WORKBOOK_CONTENT.modules[0].id;
    const startLabel = hasProgress ? `Continue where you left off` : `Start the workbook`;

    return `
      <div class="welcome">
        <div class="welcome-hero">
          <span class="welcome-badge">Companion Workbook</span>
          <h1 class="welcome-title">The Outbound Masterclass Workbook</h1>
          <p class="welcome-subtitle">
            Your companion guide to the free 15-module course. Complete the exercises as you watch each module.
            Your progress saves automatically.
          </p>
          <button class="welcome-cta" data-nav="${startModuleId}">
            <span>${startLabel}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
        <div class="welcome-sections">${sections}</div>
      </div>
    `;
  }

  // ========================================
  // NAVIGATION
  // ========================================

  function navigateTo(target) {
    STATE.currentModuleId = target;
    const main = document.getElementById('main');
    main.innerHTML = target === 'welcome' ? renderWelcome() : renderModule(target);
    wireAllInputs(main);

    // Update sidebar active state
    document.querySelectorAll('.sidebar-module').forEach(el => {
      el.classList.toggle('active', el.dataset.moduleId === target);
    });

    // Auto-expand section containing active module
    if (target !== 'welcome') expandSectionForModule(target);

    updateProgress();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Close mobile sidebar
    closeSidebar();

    // Update URL hash (without triggering reload)
    history.replaceState(null, '', target === 'welcome' ? '#' : `#${target}`);

    // Update contextual title in top bar
    const contextEl = document.getElementById('topbarContext');
    if (contextEl) {
      if (target === 'welcome') {
        contextEl.textContent = '';
      } else {
        const mod = WORKBOOK_CONTENT.modules.find(m => m.id === target);
        contextEl.textContent = mod ? `• Module ${mod.number}: ${mod.title}` : '';
      }
    }
  }

  // ========================================
  // SIDEBAR RENDERING
  // ========================================

  function renderSidebar() {
    const sidebar = document.getElementById('sidebar');
    const chevron = `<svg class="sidebar-section-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>`;

    const sections = WORKBOOK_CONTENT.sections.map((s, idx) => {
      const modules = s.moduleIds.map(id => WORKBOOK_CONTENT.modules.find(m => m.id === id)).filter(Boolean);
      const items = modules.map(m => `
        <li class="sidebar-module" data-module-id="${m.id}">
          <span class="sidebar-module-number"><span class="num">${m.number}</span></span>
          <span class="sidebar-module-title">${escapeHtml(m.title)}</span>
        </li>
      `).join('');
      // Only first section expanded by default
      const collapsed = idx === 0 ? '' : 'collapsed';
      return `
        <div class="sidebar-section ${collapsed}" data-section-idx="${idx}">
          <button class="sidebar-section-toggle" data-section-toggle="${idx}">
            <span class="sidebar-section-toggle-inner">
              <span class="sidebar-section-number">Section ${s.number}</span>
              <span class="sidebar-section-name">${escapeHtml(s.name)}</span>
            </span>
            ${chevron}
          </button>
          <div class="sidebar-module-list">
            <ul class="sidebar-module-list-ul">${items}</ul>
          </div>
        </div>
      `;
    }).join('');

    sidebar.innerHTML = `
      <div class="sidebar-section" style="padding-top:0;">
        <div class="sidebar-module" data-module-id="welcome" style="font-weight:700;padding-left:12px;">
          <span class="sidebar-module-number" style="background:transparent;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </span>
          <span class="sidebar-module-title">Overview</span>
        </div>
      </div>
      ${sections}
    `;

    sidebar.querySelectorAll('.sidebar-module').forEach(el => {
      el.addEventListener('click', e => {
        e.stopPropagation();
        navigateTo(el.dataset.moduleId);
      });
    });

    sidebar.querySelectorAll('.sidebar-section-toggle').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const section = btn.closest('.sidebar-section');
        section.classList.toggle('collapsed');
      });
    });
  }

  function expandSectionForModule(moduleId) {
    // Find which section contains this module
    const sectionIdx = WORKBOOK_CONTENT.sections.findIndex(s => s.moduleIds.includes(moduleId));
    if (sectionIdx === -1) return;
    const section = document.querySelector(`.sidebar-section[data-section-idx="${sectionIdx}"]`);
    if (section) section.classList.remove('collapsed');
  }

  // ========================================
  // MOBILE SIDEBAR
  // ========================================

  function toggleSidebar() {
    const sb = document.getElementById('sidebar');
    const ov = document.getElementById('sidebarOverlay');
    sb.classList.toggle('open');
    ov.classList.toggle('open');
  }

  function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebarOverlay').classList.remove('open');
  }

  // ========================================
  // EVENT DELEGATION
  // ========================================

  function setupGlobalEvents() {
    // Navigation from anywhere with [data-nav]
    document.addEventListener('click', e => {
      const navBtn = e.target.closest('[data-nav]');
      if (navBtn) {
        e.preventDefault();
        navigateTo(navBtn.dataset.nav);
      }
    });

    // Hamburger
    const hamburger = document.getElementById('hamburger');
    if (hamburger) hamburger.addEventListener('click', toggleSidebar);

    const overlay = document.getElementById('sidebarOverlay');
    if (overlay) overlay.addEventListener('click', closeSidebar);

    // Handle browser back button / hash nav
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      navigateTo(hash || 'welcome');
    });
  }

  // ========================================
  // INIT
  // ========================================

  function init() {
    loadData();
    renderSidebar();
    setupGlobalEvents();

    // Initial route from hash
    const hash = window.location.hash.slice(1);
    navigateTo(hash || 'welcome');

    setSaveIndicator('saved');
    setTimeout(() => {
      const el = document.getElementById('saveIndicator');
      if (el) el.innerHTML = '<span class="save-indicator-dot"></span><span>Saved</span>';
    }, 500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
