// Outbound Masterclass Workbook Content
// All 15 modules, 34 exercises. Structured for rendering.

const WORKBOOK_CONTENT = {
  title: "Outbound Masterclass Workbook",
  subtitle: "Your companion guide to the course",
  author: "Jason Bay | Outbound Squad",
  modules: [
    {
      id: "module-1",
      number: 1,
      section: "Foundation",
      title: "What to Expect",
      tagline: "Why outbound is broken, and what the best reps do differently.",
      keyIdeas: [
        {
          number: 1,
          title: "Three Forces Working Against You",
          body: "Outbound is harder than ever. Three macro forces are making it difficult to get the attention of your buyers:",
          list: [
            "<strong>Buyers are inundated with options.</strong> Thousands of solutions in every category. 56% of buyers experience regret after purchasing (Gartner). Decision-making is slower and more cautious than ever.",
            "<strong>Economic uncertainty.</strong> Budgets are tighter. CFOs are more involved. Every purchase is scrutinized harder than it was a few years ago.",
            "<strong>Attention is nearly impossible to capture.</strong> AI call screeners, spam filters, and infinite entertainment on every smartphone mean your cold call, email, or LinkedIn message is competing with everything else in their world."
          ]
        },
        {
          number: 2,
          title: "Average No Longer Scales",
          body: "The gap between average and top performers has widened dramatically. Average reps are struggling to hit quota. Top 25% reps are booking 4.3x more meetings than average reps. The difference is methodology, not effort."
        },
        {
          number: 3,
          title: "The Outbound Masterclass Framework",
          body: "This course is organized into three sections that build on each other:",
          table: {
            headers: ["Section", "Focus", "What You Will Learn"],
            rows: [
              ["Foundation", "Upgrade your approach", "Prioritization and messaging"],
              ["Reason to Meet", "Create compelling offers", "Offers and triggers that make outreach relevant"],
              ["World-Class Execution", "Master every channel", "Phone, email, social, AI, and time management"]
            ]
          }
        }
      ],
      exercises: [],
      takeaways: [
        "Average performance no longer produces results in outbound",
        "Top 25% reps dramatically outperform average reps on every channel",
        "You need a methodology, not a collection of random tactics",
        "This course gives you a repeatable system that produces meetings and qualified pipeline"
      ]
    },
    {
      id: "module-2",
      number: 2,
      section: "Foundation",
      title: "The Outbound Equation",
      tagline: "The first and only outbound methodology.",
      keyIdeas: [
        {
          number: 1,
          title: "The Three Levels",
          body: "Sales has MEDDIC, SPIN, and Challenger. Outbound has never had a formal methodology. Most reps get handed a list, a talk track, and are told to start dialing. The Outbound Equation changes that.",
          table: {
            headers: ["Level", "Owner", "Components"],
            rows: [
              ["Level 1: Foundation", "The Organization", "Strategy (ICPs, personas, triggers, scoring, sales math, messaging), Process (playbooks, workflows), Tech (sales engagement, LinkedIn Sales Nav, AI)"],
              ["Level 2: Org Execution", "Front-Line Manager", "Reinforcement (coaching, GSD sessions), Measurement (dashboards for effort, efficiency, effectiveness), Culture (senior leadership participation)"],
              ["Level 3: Rep Execution", "The Rep (this course)", "Productivity (weekly rhythm), Prioritization (targeting), Soft Skills (phone, email, social, AI)"]
            ]
          }
        },
        {
          number: 2,
          title: "Why Most Training Fails",
          body: "Most organizations start at Level 3 (rep training) without providing Level 1 (foundation) or Level 2 (manager reinforcement). That is why most training does not stick. The front-line manager is the most critical person in making training work."
        }
      ],
      exercises: [
        {
          id: "m2-foundation-score",
          title: "Assess Your Foundation",
          instruction: "Rate how well your organization provides each element. Score from 1 (nonexistent) to 5 (world-class).",
          type: "scoring-grid",
          fields: [
            { id: "icp", label: "ICP and persona documentation" },
            { id: "scoring", label: "Account scoring and prioritization criteria" },
            { id: "messaging", label: "Messaging (talk tracks, email frameworks)" },
            { id: "math", label: "Sales math (activity to pipeline goals)" },
            { id: "playbooks", label: "Documented playbooks and workflows" },
            { id: "engagement", label: "Sales engagement platform" },
            { id: "linkedin", label: "LinkedIn Sales Navigator" },
            { id: "ai", label: "AI tools and prompts" }
          ],
          followUp: "Where is the biggest gap? What would have the most impact if improved?",
          followUpId: "foundation-gap"
        },
        {
          id: "m2-org-execution",
          title: "Rate Your Org Execution",
          instruction: "Score each element from 1 (nonexistent) to 5 (world-class).",
          type: "scoring-grid",
          fields: [
            { id: "coaching", label: "Manager coaching and reinforcement" },
            { id: "gsd", label: "GSD sessions (doing the work with reps)" },
            { id: "reporting", label: "Reporting and dashboards for outbound" },
            { id: "leadership", label: "Senior leadership participation" }
          ],
          followUp: "What is missing? What would you change first?",
          followUpId: "org-gap"
        }
      ],
      takeaways: [
        "Outbound needs a methodology, not just tactics",
        "The Outbound Equation has three levels: Foundation, Org Execution, Rep Execution",
        "Most organizations skip the foundation and jump straight to rep training",
        "The front-line manager is the most critical person in making training stick"
      ]
    },
    {
      id: "module-3",
      number: 3,
      section: "Foundation",
      title: "Prioritization",
      tagline: "Outbound is more about what you say no to than what you say yes to.",
      keyIdeas: [
        {
          number: 1,
          title: "The Martini Glass Pipeline",
          body: "Do not treat your accounts like an assembly line. If you work every account with the same effort, you are wasting weeks or months on accounts that will never take a meeting.",
          callout: "Armis had their SDR team reaching out across seven industry verticals and multiple personas. By narrowing focus to the top two industries where they had the highest win rates, they increased pipeline by 22% in 90 days. No new tools. No new hires. Just focus.",
          bodyContinued: "The goal: a martini glass-shaped pipeline, not a funnel. Shrink the top of funnel. Go narrow and deep instead of wide and shallow."
        },
        {
          number: 2,
          title: "Account-Level Fit",
          body: "Look at your last 10 closed-won deals (or 2-4 quarters of org data). Identify patterns:",
          table: {
            headers: ["Criteria", "What to Look For"],
            rows: [
              ["Ease of sale", "Highest win rates, largest deals, fastest time to close"],
              ["Industry / sub-industry", "e.g., 'fintech' not just 'software'"],
              ["Company size", "Headcount and growth rate"],
              ["Revenue band", "Annual revenue sweet spot"],
              ["Tech stack", "Required platforms (e.g., must use Salesforce)"],
              ["Department size", "Growth of the team you sell into"],
              ["Geography", "Region or market focus"],
              ["Funding stage", "Seed, Series A, growth, public, etc."]
            ]
          }
        },
        {
          number: 3,
          title: "Persona-Level Fit",
          body: "Choose an entrance path, then classify personas by their role in the deal:",
          table: {
            headers: ["Entrance Path", "How It Works", "Best For"],
            rows: [
              ["Bottoms-up", "Start with ICs/managers, gather insights, work upward", "Technical sales, complex products"],
              ["Top-down", "Start with C-suite, get referred down", "Strong insights and executive relationships"],
              ["Middle-out", "Start with Directors/VPs", "Most sellers (recommended starting point)"]
            ]
          },
          secondTable: {
            headers: ["Persona Type", "Role in the Deal", "Where to Start?"],
            rows: [
              ["Champions / Coaches", "Do the internal selling, put their reputation on the line", "Yes, great starting point"],
              ["Economic Buyers", "Own budget and final approval (C-suite/SVP)", "Usually brought in later"],
              ["Influencers / Users", "End users with day-to-day pain", "Good for gathering intel"],
              ["Blockers", "IT, procurement, legal", "Avoid unless you sell to them"]
            ]
          }
        }
      ],
      exercises: [
        {
          id: "m3-icp",
          title: "Define Your ICP",
          instruction: "Based on your closed-won patterns, define your Ideal Customer Profile.",
          type: "fillable-table",
          layout: "vertical",
          fields: [
            { id: "industry1", label: "Top industry #1", placeholder: "e.g., Fintech SaaS" },
            { id: "industry2", label: "Top industry #2" },
            { id: "industry3", label: "Top industry #3" },
            { id: "companySize", label: "Company size sweet spot", placeholder: "e.g., 200-1000 employees" },
            { id: "revenue", label: "Revenue band sweet spot" },
            { id: "techStack", label: "Tech stack requirements" },
            { id: "otherPatterns", label: "Other patterns", type: "textarea" },
            { id: "stopList", label: "Accounts to STOP reaching out to", type: "textarea", placeholder: "What does a clear non-fit look like?" }
          ]
        },
        {
          id: "m3-personas",
          title: "Identify Your Top Personas",
          instruction: "Define your target personas and entrance path.",
          type: "custom",
          fields: [
            { id: "entrancePath", label: "Primary entrance path", type: "radio", options: ["Bottoms-up", "Top-down", "Middle-out"] },
            { id: "persona1-title", label: "Persona 1: Title/Role" },
            { id: "persona1-type", label: "Persona 1: Type (Champion, EB, Influencer)" },
            { id: "persona1-why", label: "Persona 1: Why this persona", type: "textarea" },
            { id: "persona2-title", label: "Persona 2: Title/Role" },
            { id: "persona2-type", label: "Persona 2: Type (Champion, EB, Influencer)" },
            { id: "persona2-why", label: "Persona 2: Why this persona", type: "textarea" },
            { id: "blockers", label: "Who should you AVOID (blockers)?", type: "textarea" }
          ]
        },
        {
          id: "m3-accounts",
          title: "Build Your 3-Account Short List",
          instruction: "You will use these accounts for exercises throughout the rest of the course.",
          type: "account-grid",
          accountCount: 3,
          fields: [
            { id: "name", label: "Company name" },
            { id: "industry", label: "Industry" },
            { id: "fit", label: "Why they fit your ICP", type: "textarea" },
            { id: "persona", label: "Persona you will target" }
          ]
        }
      ],
      takeaways: [
        "Outbound is about what you say no to, not what you say yes to",
        "Use data to narrow your ICP, not gut feel",
        "Focus on the top 2 industries and 2 personas where you have the best win rates",
        "Classify personas by their role in the deal",
        "Pick 3 target accounts now. You will use them throughout the rest of the course."
      ]
    },
    {
      id: "module-4",
      number: 4,
      section: "Foundation",
      title: "Messaging",
      tagline: "Move from product voice to customer voice. Talk about what buyers care about.",
      keyIdeas: [
        {
          number: 1,
          title: "Push vs. Pull",
          body: "91% of buyers feel reps do not understand their world. Problem-based language is 3x more effective than buzzwords (Gong). Buzzwords reduce email reply rates by up to 57%.<br><br>Push means talking about your product. Pull means talking about what the buyer cares about. We need to meet buyers in their world first, then pull them into ours."
        },
        {
          number: 2,
          title: "The Messaging Matrix",
          body: "Four components of great messaging:",
          table: {
            headers: ["Component", "Description"],
            rows: [
              ["Priorities", "What is top of mind for the buyer right now?"],
              ["Current Solutions", "How do they get the job done today?"],
              ["Problems", "How do current solutions make it harder? What is the impact?"],
              ["Aspirations", "Desired outcomes 6-12 months after purchasing"]
            ]
          }
        },
        {
          number: 3,
          title: "Leverage AI for Messaging",
          body: "Gather your source material: sales call recordings, top rep emails, customer success calls, case studies, job descriptions, industry reports. Upload to AI. Use prompts to generate a messaging matrix in minutes instead of hours.<br><br>Red pen (edit), do not black pen (start from scratch). AI gives you a strong first draft. Your job is to refine it."
        }
      ],
      exercises: [
        {
          id: "m4-matrix",
          title: "Build Your Messaging Matrix",
          instruction: "Fill out the matrix for each of your top 2 personas from Module 3.",
          type: "messaging-matrix",
          personas: 2,
          columns: [
            { id: "priorities", label: "Priorities" },
            { id: "currentSolutions", label: "Current Solutions" },
            { id: "problems", label: "Problems/Impact" },
            { id: "aspirations", label: "Aspirations" }
          ]
        },
        {
          id: "m4-sources",
          title: "Gather Your Source Material",
          instruction: "Check off each source as you collect it. These feed your AI tool for matrix generation.",
          type: "checklist",
          items: [
            "Sales call recordings",
            "Top rep emails/talk tracks",
            "Customer success calls",
            "Customer interviews",
            "Case studies",
            "Job descriptions",
            "Industry reports",
            "Marketing content"
          ]
        }
      ],
      takeaways: [
        "Sell the buyer on what they are already sold on",
        "Move from product voice to customer voice",
        "The messaging matrix has four components: priorities, current solutions, problems, aspirations",
        "Use AI to generate your matrix, then edit with a red pen",
        "Build messaging for at least two personas across your three target accounts"
      ]
    },
    {
      id: "module-5",
      number: 5,
      section: "Reason To Meet",
      title: "The Offer",
      tagline: "Give buyers a reason to meet beyond learning about your product.",
      keyIdeas: [
        {
          number: 1,
          title: "The Blind Date (Good Offer)",
          body: "75% of buyers prefer a rep-free buying experience (Gartner). Only 3-5% of your TAM is actively looking for a solution. Over 58% of buyers say meetings they attend are a waste of time. A compelling offer increases email reply rates by 28%+ (Gong).<br><br>Sell the person, not the product. Hype up who the buyer will meet. SDR sells the AE's expertise. AE sells themselves or a solutions expert. Every seller can use this immediately."
        },
        {
          number: 2,
          title: "One-to-Many Insights (Better Offer)",
          body: "Benchmark reports, mystery shopping data, best practice guides, research pieces. Example: mystery shopped 300 e-commerce companies and used response time data as a hook. Very powerful for getting emotional reactions."
        },
        {
          number: 3,
          title: "One-to-One Custom Offers (Best Offer)",
          body: "Lightweight audits, risk/opportunity assessments, competitor benchmarks, mini workshops, trials/pilots. Primarily for enterprise and strategic accounts. Example: a checkout review for e-commerce companies."
        }
      ],
      exercises: [
        {
          id: "m5-offers",
          title: "Design Your Offer",
          instruction: "Design one offer at each tier. Start with the Blind Date (easiest) and work up.",
          type: "offer-grid",
          offers: [
            { id: "blindDate", label: "Blind Date", description: "The person you're offering a meeting with" },
            { id: "oneToMany", label: "One-to-Many Insight", description: "A report or benchmark you can share" },
            { id: "oneToOne", label: "One-to-One Custom", description: "A custom audit or assessment" }
          ],
          fields: [
            { id: "version", label: "Your Version", type: "textarea" },
            { id: "usage", label: "How You Will Use It", type: "textarea" }
          ]
        },
        {
          id: "m5-blindDateScript",
          title: "Write Your Blind Date Script",
          instruction: "Fill in the template with the person you're hyping up.",
          type: "template-fill",
          template: "\"I'd love to connect you with [Name]. [He/She] has [X years/experience]. [He/She] has worked with companies like [logos]. [He/She] will walk you through [specific insight #1] and [specific insight #2].\"",
          fields: [
            { id: "yourVersion", label: "Your version", type: "textarea", rows: 5 }
          ]
        }
      ],
      takeaways: [
        "Buyers need a reason to meet beyond your product",
        "The blind date is the easiest offer to implement immediately",
        "One-to-many insights (benchmarks, reports) are more scalable",
        "One-to-one custom offers are the most powerful but require more effort",
        "Start with the blind date today, then work toward better and best offers"
      ]
    },
    {
      id: "module-6",
      number: 6,
      section: "Reason To Meet",
      title: "Triggers",
      tagline: "Move outreach from generic to specific. Answer \"why me?\" for every buyer.",
      keyIdeas: [
        {
          number: 1,
          title: "Hard vs. Soft Triggers",
          body: "Company-level personalization gets 9% reply rate vs. 2% baseline (Gong). Personalization can increase reply rates by 5x.",
          table: {
            headers: ["Trigger Type", "Description"],
            rows: [
              ["Hard Trigger", "Clear evidence of a problem with urgency (e.g., hiring for roles that mention manual processes)"],
              ["Soft Trigger", "Indicators that lead to a problem but are not proof (e.g., active projects underway)"],
              ["No Trigger", "Nothing going on. Do not reach out."]
            ]
          },
          bodyContinued: "You can also create triggers by calling ICs on the team first (bottoms-up outreach)."
        },
        {
          number: 2,
          title: "Where to Find Triggers",
          body: "Know what you are looking for before you start researching:",
          table: {
            headers: ["Source", "What to Look For"],
            rows: [
              ["LinkedIn profile", "About section, work experience, activity feed, recommendations"],
              ["Company website", "Careers page, blog/news, case studies, annual reports"],
              ["Company social profiles", "Recent posts, company updates, leadership changes"],
              ["Third parties", "Earnings calls (Seeking Alpha), press releases, legislation"],
              ["Inbound triggers", "Content downloads, event attendance, website visits"]
            ]
          }
        }
      ],
      exercises: [
        {
          id: "m6-triggers",
          title: "Map Your Top 5 Triggers",
          instruction: "Identify 5 triggers that indicate a prospect is a good fit to reach out to.",
          type: "trigger-table",
          rows: 5,
          fields: [
            { id: "trigger", label: "Trigger" },
            { id: "type", label: "Type", type: "select", options: ["Hard Trigger", "Soft Trigger"] },
            { id: "source", label: "Where to Find It" },
            { id: "meaning", label: "What It Tells You" }
          ]
        },
        {
          id: "m6-accountTriggers",
          title: "Research Your 3 Accounts",
          instruction: "For each of the 3 accounts from Module 3, find at least one trigger.",
          type: "account-grid",
          accountCount: 3,
          fields: [
            { id: "trigger", label: "Trigger Found", type: "textarea" },
            { id: "type", label: "Type", type: "select", options: ["Hard Trigger", "Soft Trigger"] },
            { id: "source", label: "Source" },
            { id: "reference", label: "How You Will Reference It", type: "textarea" }
          ]
        }
      ],
      takeaways: [
        "Triggers answer \"why me?\" for the buyer",
        "Hard triggers have urgency, soft triggers indicate potential",
        "Company-level personalization outperforms individual-level for director+ buyers",
        "Know what you are looking for before you start researching",
        "Identify your top 5 triggers and where to find them"
      ]
    },
    {
      id: "module-7",
      number: 7,
      section: "Reason To Meet",
      title: "Leveraging AI",
      tagline: "AI will not replace you, but you will be replaced by a rep trained in AI.",
      keyIdeas: [
        {
          number: 1,
          title: "The Educate-Dig-Summarize Framework",
          body: "Treat AI like a new hire. Onboard it with your messaging matrix, product info, case studies, and call transcripts. Tell it exactly what to look for (and what not to). Get a concise summary with prioritized triggers.<br><br>One client went from 10-15 hours analyzing reports to 5-10 minutes using this framework.",
          table: {
            headers: ["Step", "What to Do"],
            rows: [
              ["Educate", "Upload messaging matrix, product info, case studies, call transcripts"],
              ["Dig", "Give specific instructions on what to look for (and what not to)"],
              ["Summarize", "Get a concise summary with prioritized triggers and key findings"]
            ]
          }
        },
        {
          number: 2,
          title: "Prompts and Workflow",
          body: "Use the provided prompts to educate AI on your solution, research accounts, and generate draft emails. Red pen the output. Do not expect perfection. AI gives you a strong starting point, and your expertise makes it great."
        }
      ],
      exercises: [
        {
          id: "m7-aiSetup",
          title: "Set Up Your AI Assistant",
          instruction: "Upload these materials to your AI tool of choice (ChatGPT, Claude, Gemini).",
          type: "checklist",
          items: [
            "Messaging matrix (from Module 4)",
            "Product/solution overview",
            "Sales deck",
            "3-5 customer case studies",
            "Call transcripts (if available)",
            "Your ICP and persona definitions (from Module 3)"
          ]
        },
        {
          id: "m7-aiResearch",
          title: "Run AI Research on Your 3 Accounts",
          instruction: "For each account, use AI to generate a mini account plan and 2 sample outbound emails.",
          type: "account-grid",
          accountCount: 3,
          fields: [
            { id: "triggers", label: "Key Triggers Found", type: "textarea" },
            { id: "subjectLine", label: "Draft Email Subject Line" }
          ]
        }
      ],
      takeaways: [
        "AI is your assistant, not your replacement",
        "Educate it like you would a new hire",
        "Be specific about what to look for and what to ignore",
        "Always red pen the output",
        "You should now have a mini account plan and sample emails for your 3 accounts"
      ]
    },
    {
      id: "module-8",
      number: 8,
      section: "World-Class Execution",
      title: "Omnichannel Outreach",
      tagline: "Average reps reach out 3-5 times. The data says you need 12-15 touches.",
      keyIdeas: [
        {
          number: 1,
          title: "Tiering Your Sequences",
          body: "Combo prospecting (phone + email + social simultaneously) increases contact rate by 3.1x (SalesLoft). Voicemails pointing to emails increase reply rates by 2.1x (Gong). Future pickup rates increase 25.8% with voicemails (Orem).",
          table: {
            headers: ["Tier", "Approach", "Best For"],
            rows: [
              ["High-touch", "Customized, multi-channel (phone + email + social)", "Senior stakeholders, high-value accounts"],
              ["Low-touch", "More automated, email-heavy", "ICs, managers, easier to reach"]
            ]
          }
        },
        {
          number: 2,
          title: "The Data-Backed Sequence",
          body: "Multi-day (3-4 weeks), multi-touch (12-15 touches), multi-channel (phone + email + social).<br><br>Week 1 pattern: Call + voicemail + email + LinkedIn on Day 1, break Day 2, call + bump email Day 3. Repeat for 3 weeks. Follow engagement, bump emails in same thread, point voicemails to emails."
        }
      ],
      exercises: [
        {
          id: "m8-highTouch",
          title: "Design Your High-Touch Sequence",
          instruction: "Build out a 15-day sequence for senior stakeholders.",
          type: "sequence-table",
          days: 15,
          fields: [
            { id: "channel", label: "Channel", type: "select", options: ["Call", "Email", "LinkedIn", "Voicemail", "Video", "Skip"] },
            { id: "activity", label: "Activity" },
            { id: "notes", label: "Notes" }
          ]
        },
        {
          id: "m8-lowTouch",
          title: "Design Your Low-Touch Sequence",
          instruction: "Build out a 10-day sequence for ICs and managers (more email-heavy).",
          type: "sequence-table",
          days: 10,
          fields: [
            { id: "channel", label: "Channel", type: "select", options: ["Call", "Email", "LinkedIn", "Voicemail", "Video", "Skip"] },
            { id: "activity", label: "Activity" },
            { id: "notes", label: "Notes" }
          ]
        }
      ],
      takeaways: [
        "Do not treat all prospects the same. Tier your sequences.",
        "High-touch for senior buyers, low-touch for ICs and managers",
        "12-15 touches over 3-4 weeks across phone, email, and social",
        "Double and triple taps (same day, multiple channels) increase contact rates by 3.1x",
        "Point voicemails to emails to connect the experience"
      ]
    },
    {
      id: "module-9",
      number: 9,
      section: "World-Class Execution",
      title: "Cold Calling: The Initial Call",
      tagline: "The average cold call lasts 80 seconds. Make the first 60 count.",
      keyIdeas: [
        {
          number: 1,
          title: "The First 60 Seconds (Intro)",
          body: "No one picks up a cold call on purpose. 90% of cold calls die in the first 60 seconds. Get an opt-in. Do not pitch.<br><br>Manage call reluctance with box breathing, standing up, and reframing the goal: start a conversation, not book a meeting."
        },
        {
          number: 2,
          title: "The Reverse Pitch (Hook)",
          body: "Share 2-3 common problems their peers experience. See what resonates. Use money questions to dig deeper. Do not pitch your product.<br><br>Top 25% of reps book 16.7% of live conversations vs. 4.6% for average. The reverse pitch is what separates them."
        },
        {
          number: 3,
          title: "The Close",
          body: "Summarize what you heard, propose the meeting, use triple confirmation (what, who, when + calendar invite + follow-up email) to ensure 80%+ show rates."
        }
      ],
      exercises: [
        {
          id: "m9-opener",
          title: "Write Your Opener",
          instruction: "Fill in the template with your own language.",
          type: "template-fill",
          template: "\"Hey [Name], it's [Your Name] with [Company]. We haven't spoken before. I was reaching out to a few [persona] in [industry] and was hoping to get your take on something. Do you have a minute?\"",
          fields: [
            { id: "yourOpener", label: "Your version", type: "textarea", rows: 4 }
          ]
        },
        {
          id: "m9-reversePitch",
          title: "Write Your Reverse Pitch",
          instruction: "Share 2-3 problems your buyer's peers experience. See what resonates.",
          type: "template-fill",
          template: "\"A lot of the [personas] I talk to are telling me [Problem 1], [Problem 2], and [Problem 3]. Is any of that resonating with you, or is there something else that is more top of mind?\"",
          fields: [
            { id: "yourReversePitch", label: "Your version", type: "textarea", rows: 4 }
          ]
        },
        {
          id: "m9-moneyQuestions",
          title: "Write 3 Money Questions",
          instruction: "Questions that dig deeper into the problem the buyer mentioned.",
          type: "numbered-list",
          count: 3,
          placeholder: "Your money question..."
        },
        {
          id: "m9-close",
          title: "Write Your Close",
          instruction: "Summarize, propose the meeting, lock it in.",
          type: "template-fill",
          template: "\"Based on what you shared about [problem], I think it would make sense to connect you with [person/offer]. We can [value of meeting]. Can I send over a couple of times that work?\"",
          fields: [
            { id: "yourClose", label: "Your version", type: "textarea", rows: 4 }
          ]
        }
      ],
      takeaways: [
        "90% of cold calls die in the first 60 seconds",
        "Get an opt-in, do not launch into a pitch",
        "Use the reverse pitch to lead with problems, not products",
        "Money questions deepen the conversation",
        "Triple confirmation drives 80%+ show rates"
      ]
    },
    {
      id: "module-10",
      number: 10,
      section: "World-Class Execution",
      title: "Objection Handling",
      tagline: "Objections are reflexive, not rational. Do not argue. Redirect.",
      keyIdeas: [
        {
          number: 1,
          title: "Why Prospects Object",
          body: "Prospects lie. Objections are reflexive, not personal. They expected someone else to call. They are trying to get off the phone fast. The objection is rarely the real reason."
        },
        {
          number: 2,
          title: "The AAP Framework",
          body: "Acknowledge, Ask, Pivot. Works for every objection.",
          table: {
            headers: ["Step", "What to Do"],
            rows: [
              ["Acknowledge", "Validate what they said. Show you heard them."],
              ["Ask", "Probe with a question. Dig into the real reason."],
              ["Pivot", "Redirect to a problem or offer. Restart the conversation."]
            ]
          }
        },
        {
          number: 3,
          title: "Common Objections and Responses",
          body: "Each common objection has a specific AAP response:",
          table: {
            headers: ["Objection", "AAP Approach"],
            rows: [
              ["\"Not interested\"", "Acknowledge: \"Totally fair.\" Ask: \"Most people say that before knowing what it is. Curious, what are you doing about [problem]?\" Pivot to a relevant problem."],
              ["\"Send me an email\"", "Acknowledge: \"Happy to.\" Ask: \"So I can make it relevant, what would be most useful to include?\" Pivot to a quick problem question."],
              ["\"We already have a solution\"", "Acknowledge: \"Good to hear.\" Ask: \"How is it working for [specific use case]?\" Pivot to a known gap in that solution."],
              ["\"Bad timing\"", "Acknowledge: \"I get it.\" Ask: \"Is it a bad time for a conversation, or a bad time for a project like this?\" Pivot based on their answer."],
              ["\"I'm busy\"", "Acknowledge: \"I figured you would be.\" Ask: \"If I could get you 30 seconds of context, would that be fair?\" Pivot to your reverse pitch."]
            ]
          }
        }
      ],
      exercises: [
        {
          id: "m10-aap",
          title: "Write Your Objection Responses",
          instruction: "Write your AAP response for the top 5 objections you hear most.",
          type: "objection-table",
          rows: 5,
          fields: [
            { id: "objection", label: "Objection" },
            { id: "acknowledge", label: "Acknowledge" },
            { id: "ask", label: "Ask" },
            { id: "pivot", label: "Pivot" }
          ]
        },
        {
          id: "m10-rolePlay",
          title: "Role Play Prep",
          instruction: "Pick your top 3 objections and write out the full response for each.",
          type: "numbered-textarea",
          count: 3,
          placeholder: "Full response..."
        }
      ],
      takeaways: [
        "Objections are reflexive, not rational",
        "Never argue or get defensive",
        "Acknowledge, Ask, Pivot (AAP) works for every objection",
        "Practice your responses until they feel natural",
        "The goal is to restart the conversation, not win an argument"
      ]
    },
    {
      id: "module-11",
      number: 11,
      section: "World-Class Execution",
      title: "Voicemails and Gatekeepers",
      tagline: "Point voicemails to emails. Be direct with gatekeepers.",
      keyIdeas: [
        {
          number: 1,
          title: "The Voicemail Framework",
          body: "Keep voicemails under 20 seconds. Do not ask for callbacks. Point them to your email instead. Voicemails increase future pickup rates by 25.8% (Orem).",
          callout: "\"Hey [Name], it's [Your Name] with [Company]. I sent you an email about [subject line]. Take a look when you get a chance.\"<br><br><strong>That is it. Under 20 seconds.</strong>"
        },
        {
          number: 2,
          title: "Gatekeepers",
          body: "Be direct, be honest, use the prospect's first name. Do not over-explain. Do not try to trick gatekeepers.<br><br>\"Hey, is [First Name] available?\" If asked what it is about, keep it simple and honest."
        }
      ],
      exercises: [
        {
          id: "m11-voicemail",
          title: "Write Your Voicemail Script",
          instruction: "Fill in your details for a 20-second voicemail.",
          type: "fillable-table",
          layout: "vertical",
          fields: [
            { id: "nameCompany", label: "Your name + company" },
            { id: "subjectRef", label: "Email subject line reference" },
            { id: "fullScript", label: "Full voicemail script", type: "textarea" }
          ]
        },
        {
          id: "m11-gatekeeper",
          title: "Write Your Gatekeeper Response",
          instruction: "What will you say when the gatekeeper asks \"What is this regarding?\"",
          type: "single-textarea",
          placeholder: "Keep it direct, honest, and specific..."
        }
      ],
      takeaways: [
        "Voicemails should point to your email, not ask for a callback",
        "Keep voicemails under 20 seconds",
        "Be direct and honest with gatekeepers",
        "Use the prospect's first name",
        "Voicemails increase future pickup rates by 25.8%"
      ]
    },
    {
      id: "module-12",
      number: 12,
      section: "World-Class Execution",
      title: "Cold Email: The REPLY Method",
      tagline: "Under 100 words. Personalized. Problem-based. No buzzwords.",
      keyIdeas: [
        {
          number: 1,
          title: "Email Structure: The REPLY Method",
          body: "Emails under 100 words get the highest reply rates. Personalized first line = 5x more likely to get a reply (Gong). Social proof increases reply rate by 41%. Offers increase reply rate by 28%.",
          table: {
            headers: ["Section", "What to Write"],
            rows: [
              ["First line", "Personalization/reason (about them, not you)"],
              ["Problem", "Problem statement they can relate to"],
              ["Value + proof", "Social proof: name a peer company who solved this"],
              ["CTA", "Compelling offer, not just \"can we meet?\""]
            ]
          }
        },
        {
          number: 2,
          title: "What the Data Shows",
          body: "50-100 words, 3-4 sentences, clear paragraph breaks, mobile-optimized. No self-introductions. No buzzwords. Pitch words (AI, platform, ROI) reduce reply rates by up to 57%.<br><br>Closed-ended CTAs with offers outperform open-ended questions and meeting requests."
        }
      ],
      exercises: [
        {
          id: "m12-email",
          title: "Write Your First Cold Email",
          instruction: "Using the REPLY framework for one of your 3 target accounts.",
          type: "fillable-table",
          layout: "vertical",
          fields: [
            { id: "subject", label: "Subject line" },
            { id: "firstLine", label: "First line (personalization)", type: "textarea" },
            { id: "problem", label: "Problem statement", type: "textarea" },
            { id: "proof", label: "Social proof", type: "textarea" },
            { id: "cta", label: "CTA/Offer", type: "textarea" }
          ]
        },
        {
          id: "m12-checklist",
          title: "Email Self-Check",
          instruction: "Run through this checklist before sending.",
          type: "checklist",
          items: [
            "Under 100 words?",
            "Personalized first line?",
            "Problem-based (not product-based)?",
            "Social proof included?",
            "Compelling CTA/offer?",
            "No buzzwords?",
            "Mobile-friendly formatting?"
          ]
        }
      ],
      takeaways: [
        "Keep emails under 100 words, 3-4 sentences",
        "Personalize the first line with something about them or their company",
        "Lead with problems, not products",
        "Social proof increases reply rates by 41%",
        "Offers in your CTA increase reply rates by 28%",
        "Never introduce yourself in the first line"
      ]
    },
    {
      id: "module-13",
      number: 13,
      section: "World-Class Execution",
      title: "Subject Lines and Follow-Up Emails",
      tagline: "Under 5 words. Priority-based. No buzzwords in the subject line.",
      keyIdeas: [
        {
          number: 1,
          title: "Seven Subject Line Formulas",
          body: "Open rates are highest when subject lines are under 5 words. Priority-based language works best. Avoid AI, numbers, buzzwords, social proof, and question marks in subject lines (decrease open rates by up to 17%).",
          table: {
            headers: ["#", "Formula", "Example"],
            rows: [
              ["1", "Pervasive problems", "One-word macro problem (e.g., \"Attrition\")"],
              ["2", "Industry trends", "Reference a known industry shift"],
              ["3", "Company/org-wide initiatives", "Reference their known priority"],
              ["4", "Exec leadership quotes", "Quote their CEO or VP from a talk/article"],
              ["5", "People on their team", "Shared connections or team references"],
              ["6", "Short pattern interrupts", "Something unexpected to break the scroll"],
              ["7", "Competitor share", "Reference a competitor (carefully)"]
            ]
          }
        },
        {
          number: 2,
          title: "Five Bump Email Frameworks",
          body: "Bump emails increase reply rates by up to 89%. Follow up in the same email chain. Do not start new threads.",
          table: {
            headers: ["Bump Type", "Approach"],
            rows: [
              ["Interest bump", "One-sentence CTA variation"],
              ["Offer bump", "Repitch the offer with a new angle"],
              ["Any thoughts bump", "Short, simple check-in"],
              ["Quick chat bump", "Offer specific times to talk"],
              ["Breakup bump", "Redirect or easy out (no cheesy guilt trips)"]
            ]
          }
        }
      ],
      exercises: [
        {
          id: "m13-subjects",
          title: "Write 3 Subject Lines",
          instruction: "Using the formulas above for your target accounts.",
          type: "formula-table",
          rows: 3,
          fields: [
            { id: "formula", label: "Formula Used", type: "select", options: ["Pervasive problems", "Industry trends", "Company/org-wide initiatives", "Exec leadership quotes", "People on their team", "Short pattern interrupts", "Competitor share"] },
            { id: "subject", label: "Subject Line" },
            { id: "account", label: "Target Account" }
          ]
        },
        {
          id: "m13-bumpSequence",
          title: "Plan Your Bump Sequence",
          instruction: "For a 3-email chain, plan which bump type you will use for emails 2 and 3.",
          type: "bump-table",
          fields: [
            { id: "bumpType2", label: "Email 2: Bump Type", type: "select", options: ["Interest bump", "Offer bump", "Any thoughts bump", "Quick chat bump", "Breakup bump"] },
            { id: "bump2Content", label: "Email 2: What You Will Say", type: "textarea" },
            { id: "bumpType3", label: "Email 3: Bump Type", type: "select", options: ["Interest bump", "Offer bump", "Any thoughts bump", "Quick chat bump", "Breakup bump"] },
            { id: "bump3Content", label: "Email 3: What You Will Say", type: "textarea" }
          ]
        }
      ],
      takeaways: [
        "Subject lines under 5 words with priority-based language get the highest open rates",
        "Stop selling on the subject line",
        "Bump emails increase reply rates by up to 89%",
        "Follow up in the same email chain, do not start new threads",
        "Use different bump types (interest, offer, thoughts, breakup) across your sequence"
      ]
    },
    {
      id: "module-14",
      number: 14,
      section: "World-Class Execution",
      title: "The Weekly Rhythm",
      tagline: "The most important appointments are the ones you make with yourself.",
      keyIdeas: [
        {
          number: 1,
          title: "Activate GSD Mode",
          body: "Work in undistracted 30-60 minute blocks. Turn off notifications. Put your phone out of reach. You do not need to respond to Slack within 5 minutes.<br><br>Gong data: response time within 24 hours matters. Faster than that does not. Stop refreshing your inbox.<br><br>Pomodoro method: 25 minutes on, 5 minutes off. Repeat."
        },
        {
          number: 2,
          title: "Time Audit",
          body: "Track how you spend your week. You cannot optimize what you do not track."
        },
        {
          number: 3,
          title: "Task Batching and GSD Blocks",
          body: "Block your calendar for each activity type:",
          table: {
            headers: ["Block Type", "When", "Duration"],
            rows: [
              ["Target selection", "Monday and Friday", "60 minutes"],
              ["Call blocks", "Tuesday to Thursday mornings", "60-90 minutes"],
              ["Sequence blocks", "Anytime", "30-60 minutes"],
              ["Whitespace blitzes", "No-show meetings, gaps", "15-30 minutes"],
              ["Weekly lock-in", "First thing Monday", "30 minutes"],
              ["Daily wrap-up", "Last 30 min of each day", "30 minutes"]
            ]
          }
        }
      ],
      exercises: [
        {
          id: "m14-audit",
          title: "Time Audit",
          instruction: "Estimate how many hours per week you spend on each activity.",
          type: "hours-grid",
          fields: [
            { id: "calls", label: "Outbound calls" },
            { id: "email", label: "Sequencing/emailing" },
            { id: "research", label: "Finding accounts and contacts" },
            { id: "admin", label: "Admin work" },
            { id: "internalMeetings", label: "Internal meetings" },
            { id: "salesCalls", label: "Sales calls" },
            { id: "development", label: "Self-development" }
          ]
        },
        {
          id: "m14-idealWeek",
          title: "Design Your Ideal Week",
          instruction: "Block out your ideal Monday through Thursday. Use the block types from Key Idea #3.",
          type: "week-schedule",
          days: ["Mon", "Tue", "Wed", "Thu"],
          timeSlots: ["8:00-9:00", "9:00-10:00", "10:00-11:00", "11:00-12:00", "12:00-1:00", "1:00-2:00", "2:00-3:00", "3:00-4:00", "4:00-5:00"]
        },
        {
          id: "m14-reflection",
          title: "Reflection",
          instruction: "Think about how you're spending your time right now.",
          type: "multi-textarea",
          fields: [
            { id: "roi", label: "Where do I get the highest ROI on my time?", type: "textarea" },
            { id: "procrastinate", label: "What do I procrastinate the most?", type: "textarea" },
            { id: "energy", label: "What energizes me vs. drains me?", type: "textarea" },
            { id: "next", label: "What could I do differently next week?", type: "textarea" }
          ]
        }
      ],
      takeaways: [
        "The most important appointments are with yourself",
        "Task batch your outbound activities",
        "Prioritize call blocks during peak pickup times (Tue-Thu mornings)",
        "Track your time so you can optimize it",
        "Save admin and CRM hygiene for end of day"
      ]
    },
    {
      id: "module-15",
      number: 15,
      section: "World-Class Execution",
      title: "Closing + Next Steps",
      tagline: "You have everything you need. Now put it into action.",
      keyIdeas: [
        {
          number: 1,
          title: "Course Recap",
          body: "You now have a complete outbound system. Here is what you covered:",
          table: {
            headers: ["Section", "Modules", "What You Built"],
            rows: [
              ["Foundation", "Outbound equation, prioritization, messaging", "ICP, personas, 3 target accounts, messaging matrix"],
              ["Reason to Meet", "Offer, triggers, AI", "Compelling offers, trigger lists, AI-powered research"],
              ["World-Class Execution", "Omni-channel, phone, email, weekly rhythm", "Sequences, scripts, email templates, weekly plan"]
            ]
          },
          bodyContinued: "Average client increases qualified pipeline by 20%+ within 90 days."
        },
        {
          number: 2,
          title: "Next Steps",
          body: "<strong>If you are a rep:</strong> put this into action. Start with one module per week. Focus on the exercises you skipped.<br><br><strong>If you are a leader:</strong> consider the free outbound audit for teams with 20+ reps at outboundsquad.com."
        }
      ],
      exercises: [
        {
          id: "m15-takeaways",
          title: "Your Top 3 Takeaways",
          instruction: "What are the 3 most impactful things you learned?",
          type: "numbered-textarea",
          count: 3,
          placeholder: "Your takeaway..."
        },
        {
          id: "m15-actionPlan",
          title: "Your 30-Day Action Plan",
          instruction: "Pick what you'll implement each week for the next 30 days.",
          type: "action-plan",
          weeks: 4,
          fields: [
            { id: "implement", label: "What I Will Implement", type: "textarea" },
            { id: "measure", label: "How I Will Measure It", type: "textarea" }
          ]
        },
        {
          id: "m15-accountability",
          title: "Accountability",
          instruction: "Real implementation requires someone holding you accountable.",
          type: "multi-textarea",
          fields: [
            { id: "share", label: "Who will you share this plan with?", type: "textarea" },
            { id: "checkin", label: "When will you check in with them?", type: "textarea" }
          ]
        }
      ],
      takeaways: [
        "You have everything you need to fill your pipeline",
        "The best reps: Disqualify ruthlessly. Offer compelling reasons to meet. Provoke with a strong point of view.",
        "Implementation is everything. Pick 1-2 things to start with this week.",
        "Outbound is a skill. The more you practice, the better you get."
      ]
    }
  ]
};

// Helper: count total exercises across all modules
WORKBOOK_CONTENT.totalExercises = WORKBOOK_CONTENT.modules.reduce(
  (sum, m) => sum + (m.exercises ? m.exercises.length : 0),
  0
);

// Helper: group modules by section
WORKBOOK_CONTENT.sections = [
  { number: 1, name: "Foundation", moduleIds: ["module-1", "module-2", "module-3", "module-4"] },
  { number: 2, name: "Reason To Meet", moduleIds: ["module-5", "module-6", "module-7"] },
  { number: 3, name: "World-Class Execution", moduleIds: ["module-8", "module-9", "module-10", "module-11", "module-12", "module-13", "module-14", "module-15"] }
];
