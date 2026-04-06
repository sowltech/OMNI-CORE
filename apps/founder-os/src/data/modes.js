// The 8 Founder Modes — each maps to an unstable system layer
// and carries a full protocol.

export const MODES = {
  ANCHOR: {
    id: 'ANCHOR',
    label: 'Anchor Mode',
    tagline: 'Rebuild your foundation before anything else.',
    unstableLayer: 'identity',
    directive: 'Stop building outward. Rebuild inward first.',
    steps: [
      'Write a single paragraph: what you are building, for whom, and why it matters.',
      'Eliminate every active commitment that does not connect to that paragraph.',
      'Spend 3 days doing only the most constrained possible version of core work.',
      'Do not add new tools, frameworks, or strategies this week.',
    ],
    avoidanceRules: [
      'No new pivots until the core statement is stable for 7 days.',
      'No strategy meetings until you can explain your direction in one sentence.',
      'No product additions until identity is re-anchored.',
    ],
    successCondition:
      'You can explain what you are building, for whom, and why — in under 30 seconds — without hesitation.',
  },
  STRATEGY: {
    id: 'STRATEGY',
    label: 'Strategy Mode',
    tagline: 'Sharpen your theory of winning before burning more energy.',
    unstableLayer: 'strategy',
    directive: 'Audit your current strategy against real market signals.',
    steps: [
      'List every active bet you are making. Rank them by evidence of traction.',
      'Drop the bottom 50% of bets with the lowest evidence.',
      'Define one primary strategic question you are trying to answer in the next 30 days.',
      'Run one focused experiment per week that tests that question directly.',
    ],
    avoidanceRules: [
      'No new strategic directions until you have closed the current loop.',
      'No consumption of strategy content — podcasts, books, frameworks — this week.',
      'No grand plans. Only testable moves.',
    ],
    successCondition:
      'You have a single active strategic question and evidence-based bets ranked by traction.',
  },
  BUILD: {
    id: 'BUILD',
    label: 'Build Mode',
    tagline: 'Ship faster. Validate sooner. Stop polishing the prototype.',
    unstableLayer: 'product',
    directive: 'Define the minimum shippable unit and ship it this week.',
    steps: [
      'List every feature or capability currently in progress.',
      'Identify which single thing, if shipped, would generate the most learning.',
      'Strip everything else. Ship that one thing.',
      'Get it in front of a real user before adding anything new.',
    ],
    avoidanceRules: [
      'No feature additions to the current build until it is in user hands.',
      'No architecture redesigns during active ship cycles.',
      'No perfectionism — done and tested beats polished and delayed.',
    ],
    successCondition:
      'Something real is in front of a real user. Feedback exists. Next iteration is defined.',
  },
  EXECUTE: {
    id: 'EXECUTE',
    label: 'Execute Mode',
    tagline: 'Close the gap between plan and action.',
    unstableLayer: 'execution',
    directive: 'Lock your weekly and daily operating rhythm.',
    steps: [
      'Define the 3 most important moves this week. Write them down.',
      'Block 2-hour focused work windows every day — non-negotiable.',
      'End each day with a 5-minute written debrief: done, stuck, next.',
      'Do a weekly review every Sunday: wins, losses, and the single priority for the week ahead.',
    ],
    avoidanceRules: [
      'No open-ended task lists without clear completion criteria.',
      'No reactive scheduling — protect your deep work blocks.',
      'No context-switching between major tracks more than once per day.',
    ],
    successCondition:
      'You complete your 3 weekly priorities 3 weeks in a row without structural interruption.',
  },
  REVENUE: {
    id: 'REVENUE',
    label: 'Revenue Mode',
    tagline: 'Close the revenue gap before building further.',
    unstableLayer: 'revenue',
    directive: 'Put commercial activity at the top of every day until revenue is stable.',
    steps: [
      'List every person who could pay you money in the next 30 days.',
      'Send a direct, specific, non-desperate message to the top 5 today.',
      'Have at least one revenue conversation per day until you close.',
      'Document every objection and iterate the offer.',
    ],
    avoidanceRules: [
      'No new product work until you have closed at least one paying customer.',
      'No brand redesign, strategy work, or content loops when revenue is zero.',
      'No "building audience" as a substitute for direct sales.',
    ],
    successCondition:
      'At least one paying customer exists. Revenue is not zero. You know your conversion rate.',
  },
  SYSTEMS: {
    id: 'SYSTEMS',
    label: 'Systems Mode',
    tagline: 'Stop being the bottleneck. Build the machine.',
    unstableLayer: 'systems',
    directive: 'Document and delegate one critical workflow this week.',
    steps: [
      'List everything that only you can currently do in the business.',
      'Identify the one task that consumes the most of your time.',
      'Write a clear process document for it — step by step, with decision rules.',
      'Assign it, automate it, or build a template — then remove yourself from it.',
    ],
    avoidanceRules: [
      'No heroics. If you are doing it all manually, the system is failing.',
      'No complex automation before the manual process is documented.',
      'No adding new workflows until the most critical bottleneck is resolved.',
    ],
    successCondition:
      'At least one critical workflow runs without your direct involvement for a full week.',
  },
  CONNECT: {
    id: 'CONNECT',
    label: 'Connect Mode',
    tagline: 'Repair the human infrastructure.',
    unstableLayer: 'relationships',
    directive: 'Audit your key relationships and close the most important open loop.',
    steps: [
      'List your 5 most important professional relationships right now.',
      'Identify which one has the most unresolved tension or neglect.',
      'Have a direct, honest conversation with that person this week.',
      'Define what a healthy working relationship looks like with each of the 5.',
    ],
    avoidanceRules: [
      'No avoidance of hard relationship conversations — silence compounds damage.',
      'No over-reliance on async communication for critical issues.',
      'No team or partner expansion while core relationships are unstable.',
    ],
    successCondition:
      'Your most important professional relationship has a clear, shared understanding of where you stand.',
  },
  RECOVERY: {
    id: 'RECOVERY',
    label: 'Recovery Mode',
    tagline: 'You cannot build from empty. Refuel first.',
    unstableLayer: 'energy',
    directive: 'Protect and restore your capacity before doing anything ambitious.',
    steps: [
      'Identify the 3 biggest energy drains in your current life/work.',
      'Eliminate or significantly reduce one this week.',
      'Establish a minimum viable sleep, movement, and nutrition baseline.',
      'Reduce active commitments by at least 25% until energy is stable.',
    ],
    avoidanceRules: [
      'No major strategic decisions when depleted.',
      'No new high-stakes commitments while in recovery.',
      'No pretending output is possible at full capacity when you are running at 40%.',
    ],
    successCondition:
      'You can sustain 5+ hours of focused, quality work per day for 5 consecutive days.',
  },
};
