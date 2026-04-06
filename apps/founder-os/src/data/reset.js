// 30-Day Staged Reset — 4 phases of 7 days each

export const RESET_PHASES = [
  {
    phase: 1,
    label: 'Phase 1 — Stop & Audit',
    days: 'Days 1–7',
    objective: 'Full inventory of where you are, with no self-deception.',
    tasks: [
      'Write a brutally honest one-page state of the business.',
      'List every active commitment, project, and obligation.',
      'Score all 8 layers of your operating system 1–10.',
      'Identify the single most unstable layer.',
      'Close or defer every commitment that does not map to your core direction.',
    ],
    deliverable: 'A clear written picture of what is real — not what you intended.',
  },
  {
    phase: 2,
    label: 'Phase 2 — Anchor & Reduce',
    days: 'Days 8–14',
    objective: 'Stabilise the foundation before adding velocity.',
    tasks: [
      'Rewrite your core mission/direction statement. Make it one sentence.',
      'Drop to a single active project or track.',
      'Set a daily minimum viable output (one concrete thing per day).',
      'Establish your baseline: sleep, movement, focus blocks.',
      'Have any overdue relationship/team conversations.',
    ],
    deliverable:
      'One active track. A working daily rhythm. No unresolved relationship loops.',
  },
  {
    phase: 3,
    label: 'Phase 3 — Rebuild Momentum',
    days: 'Days 15–21',
    objective: 'Generate consistent forward motion in the single active track.',
    tasks: [
      'Ship something real — even if small — every 3 days.',
      'Have at least one revenue or commercial conversation per day.',
      'Run your weekly review and planning ritual every Sunday.',
      'Document one process or workflow that currently lives in your head.',
      'Measure and log your daily output quality (1–5 scale).',
    ],
    deliverable: 'Visible momentum. At least one external output in user/customer hands.',
  },
  {
    phase: 4,
    label: 'Phase 4 — Evaluate & Extend',
    days: 'Days 22–30',
    objective: 'Review what has been rebuilt and decide what to extend.',
    tasks: [
      'Re-score all 8 layers. Compare to Day 1 scores.',
      'Write a one-page evaluation: what improved, what is still unstable.',
      'Define the single most important goal for the next 30 days.',
      'Decide what new commitments are now safe to take on.',
      'Publish or share something that documents where you are.',
    ],
    deliverable:
      'A 30-day review document. Layer scores. A defined next-phase priority.',
  },
];
