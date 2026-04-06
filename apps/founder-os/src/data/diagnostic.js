// 6 Diagnostic questions — each question/answer combination
// contributes weight toward one or more unstable layers.

export const DIAGNOSTIC_QUESTIONS = [
  {
    id: 'q1',
    question: 'What is the biggest thing slowing you down right now?',
    options: [
      { label: "I'm not clear on what I'm actually building or for whom.", layers: ['identity'], weight: 3 },
      { label: "I have too many directions and can't commit to one.", layers: ['strategy', 'identity'], weight: 2 },
      { label: 'I know what to build but I keep not shipping it.', layers: ['product', 'execution'], weight: 2 },
      { label: "I'm not making money and I don't know why.", layers: ['revenue'], weight: 3 },
      { label: 'Everything depends on me and I am the bottleneck.', layers: ['systems'], weight: 3 },
      { label: "I'm burned out or running low on capacity.", layers: ['energy'], weight: 3 },
    ],
  },
  {
    id: 'q2',
    question: 'When you sit down to work, what happens most often?',
    options: [
      { label: "I don't know where to start, so I drift or get distracted.", layers: ['identity', 'execution'], weight: 2 },
      { label: 'I research, plan, and explore but rarely produce real output.', layers: ['execution', 'strategy'], weight: 2 },
      { label: 'I work on product features that probably won\'t matter.', layers: ['product', 'strategy'], weight: 2 },
      { label: 'I avoid the hardest commercial work — outreach, sales, closing.', layers: ['revenue', 'execution'], weight: 2 },
      { label: 'I do things I should have automated or delegated months ago.', layers: ['systems'], weight: 2 },
      { label: 'I make decisions but regret them or second-guess them later.', layers: ['identity', 'energy'], weight: 2 },
    ],
  },
  {
    id: 'q3',
    question: 'How would you describe your current strategy?',
    options: [
      { label: "I don't have a clear strategy — it changes too often.", layers: ['strategy', 'identity'], weight: 3 },
      { label: 'I have a strategy but I\'m not executing against it consistently.', layers: ['execution'], weight: 3 },
      { label: 'My strategy is clear but the product isn\'t ready to support it.', layers: ['product'], weight: 3 },
      { label: 'My strategy is clear but revenue hasn\'t validated it yet.', layers: ['revenue', 'strategy'], weight: 2 },
      { label: 'I have a strategy but I\'m doing too much of the work myself.', layers: ['systems', 'relationships'], weight: 2 },
      { label: 'I have a strategy but I lack the energy to pursue it properly.', layers: ['energy'], weight: 3 },
    ],
  },
  {
    id: 'q4',
    question: 'What does your relationship with revenue look like right now?',
    options: [
      { label: 'Revenue is non-existent — I\'m pre-commercial.', layers: ['revenue', 'product'], weight: 3 },
      { label: 'Revenue is inconsistent — I don\'t know how to make it reliable.', layers: ['revenue', 'systems'], weight: 2 },
      { label: 'Revenue is okay but I avoid the sales conversations.', layers: ['revenue', 'execution'], weight: 2 },
      { label: 'Revenue is growing but I can\'t keep up with delivery.', layers: ['systems', 'energy'], weight: 2 },
      { label: 'Revenue is healthy — this isn\'t my main problem.', layers: [], weight: 0 },
    ],
  },
  {
    id: 'q5',
    question: 'How are your key relationships and team dynamics?',
    options: [
      { label: 'I work alone and I\'m stretched across everything.', layers: ['relationships', 'systems', 'energy'], weight: 2 },
      { label: 'I have collaborators but there\'s unresolved tension or drift.', layers: ['relationships'], weight: 3 },
      { label: 'Relationships are fine but I struggle to delegate or trust.', layers: ['relationships', 'systems'], weight: 2 },
      { label: 'My customer relationships are weak — I lose them too fast.', layers: ['relationships', 'revenue'], weight: 2 },
      { label: 'Relationships are solid — this is not my issue right now.', layers: [], weight: 0 },
    ],
  },
  {
    id: 'q6',
    question: 'How is your energy and mental state this week?',
    options: [
      { label: "I'm running on empty — depleted, reactive, not thinking clearly.", layers: ['energy'], weight: 4 },
      { label: 'I\'m okay but fragile — one bad week could tip me into exhaustion.', layers: ['energy', 'systems'], weight: 2 },
      { label: 'My energy is inconsistent — peaks and crashes.', layers: ['energy', 'execution'], weight: 2 },
      { label: "I'm fine — energy is stable enough to work on real problems.", layers: [], weight: 0 },
    ],
  },
];

// Map layer id → mode id
export const LAYER_TO_MODE = {
  identity: 'ANCHOR',
  strategy: 'STRATEGY',
  product: 'BUILD',
  execution: 'EXECUTE',
  revenue: 'REVENUE',
  systems: 'SYSTEMS',
  relationships: 'CONNECT',
  energy: 'RECOVERY',
};

/**
 * Given an array of selected option objects (one per question),
 * tally layer weights and return the highest-scoring mode id.
 */
export function inferMode(selections) {
  const scores = {};
  for (const option of selections) {
    if (!option) continue;
    for (const layer of option.layers) {
      scores[layer] = (scores[layer] || 0) + option.weight;
    }
  }

  let topLayer = null;
  let topScore = 0;
  for (const [layer, score] of Object.entries(scores)) {
    if (score > topScore) {
      topScore = score;
      topLayer = layer;
    }
  }

  return topLayer ? LAYER_TO_MODE[topLayer] : 'ANCHOR';
}
