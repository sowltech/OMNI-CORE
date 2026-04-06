// Welcome Hub — the landing view

export default function WelcomeView({ onNavigate }) {
  const tiles = [
    {
      id: 'diagnostic',
      icon: '◎',
      label: 'Run Diagnostic',
      desc: 'Answer 6 questions. Get your current founder mode and a full protocol.',
      cta: 'Start Diagnostic',
    },
    {
      id: 'scorecard',
      icon: '▣',
      label: 'Weekly Scorecard',
      desc: 'Score all 8 operating layers 1–10. Get an instant read on your weakest point.',
      cta: 'Open Scorecard',
    },
    {
      id: 'patterns',
      icon: '⬡',
      label: 'Pattern Library',
      desc: 'Recognise the 5 most common founder dysfunction patterns — and how to break them.',
      cta: 'Browse Patterns',
    },
    {
      id: 'reset',
      icon: '▷',
      label: '30-Day Reset',
      desc: 'A staged protocol to restart from drift, chaos, or stall.',
      cta: 'View Reset Protocol',
    },
    {
      id: 'modes',
      icon: '◈',
      label: 'Mode Reference',
      desc: 'All 8 founder operating modes — directives, steps, and success conditions.',
      cta: 'View All Modes',
    },
  ];

  return (
    <div className="view welcome-view">
      <div className="welcome-header">
        <div className="welcome-logo">SOWL OS</div>
        <h1>Founder/Builder Operating System</h1>
        <p className="welcome-subtitle">
          Diagnose where you are stuck. Get a precise protocol. Execute against it.
        </p>
        <button className="btn-primary btn-lg" onClick={() => onNavigate('diagnostic')}>
          Run Diagnostic →
        </button>
      </div>

      <div className="tile-grid">
        {tiles.map((tile) => (
          <div key={tile.id} className="tile" onClick={() => onNavigate(tile.id)}>
            <div className="tile-icon">{tile.icon}</div>
            <div className="tile-label">{tile.label}</div>
            <div className="tile-desc">{tile.desc}</div>
            <div className="tile-cta">{tile.cta} →</div>
          </div>
        ))}
      </div>

      <div className="welcome-footer">
        <p>
          <strong>8 layers.</strong> 8 modes. 5 patterns. 1 operating system.
        </p>
      </div>
    </div>
  );
}
