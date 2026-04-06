// Pattern Library — 5 founder dysfunction patterns

export const PATTERNS = [
  {
    id: 'stack-chasing',
    label: 'Stack Chasing',
    description:
      'Constantly switching tools, frameworks, or platforms before the current stack has been properly validated.',
    signs: [
      'You have tried 3+ different tech stacks in the past 6 months.',
      'You spend time comparing tools rather than building with them.',
      'Your architecture changes before customers exist.',
      'You follow new releases and feel compelled to migrate.',
    ],
    affectedLayers: ['product', 'execution', 'strategy'],
    correction:
      'Lock your current stack for 90 days. Write down the only conditions under which you will change it. Build with what you have.',
  },
  {
    id: 'architecture-theatre',
    label: 'Architecture Theatre',
    description:
      'Designing overly sophisticated systems for problems that don\'t yet exist — or for an audience that isn\'t there.',
    signs: [
      'You are building for scale before you have users.',
      'Your system design documents are longer than your product documentation.',
      'You know the technical architecture but cannot describe the user experience.',
      'You have refactored the same module three times without shipping it.',
    ],
    affectedLayers: ['product', 'execution', 'strategy'],
    correction:
      'Write the simplest possible version that solves the real problem. Ship that. Only add complexity when scale demands it.',
  },
  {
    id: 'founder-inflation',
    label: 'Founder Inflation',
    description:
      'Mistaking the identity and trappings of founder status for the substance of building a real business.',
    signs: [
      'You spend more time creating content about building than actually building.',
      'You describe yourself as a founder before you have revenue.',
      'You are active in founder communities but behind on core commitments.',
      'You seek validation from peers over outcomes from customers.',
    ],
    affectedLayers: ['identity', 'revenue', 'execution'],
    correction:
      'Go dark. Remove yourself from communities for 2 weeks. Work only on the things that move the core business forward. Let the business speak.',
  },
  {
    id: 'open-loop-overload',
    label: 'Open-Loop Overload',
    description:
      'Accumulating more unfinished projects, commitments, and conversations than can be held or resolved.',
    signs: [
      'Your task list has items that are months old with no resolution.',
      'You have 3+ projects in flight with no clear completion date.',
      'You regularly start new things before finishing existing ones.',
      'You feel mentally heavy even when you haven\'t done much.',
    ],
    affectedLayers: ['execution', 'energy', 'systems'],
    correction:
      'Do a full open-loop audit. Close, delete, or defer everything that is not active. Work on one track at a time until it reaches a defined milestone.',
  },
  {
    id: 'planning-addiction',
    label: 'Planning Addiction',
    description:
      'Using planning, strategy, and analysis as a substitute for the discomfort of direct action and real risk.',
    signs: [
      'You have detailed plans that have never been executed.',
      'You plan the next phase before completing the current one.',
      'You feel productive after planning sessions even when nothing shipped.',
      'You seek more information before acting when sufficient information already exists.',
    ],
    affectedLayers: ['execution', 'strategy', 'identity'],
    correction:
      'Institute a rule: no planning beyond 7 days unless current week\'s priorities are complete. Every plan must have a named action with a date and a done condition.',
  },
];
