// DriftResetView — quick realignment protocol for when you've gone off-track

export default function DriftResetView({ onNavigate }) {
  const steps = [
    {
      step: 1,
      label: 'Stop',
      action:
        'Pause all non-essential activity for 24 hours. Do not start anything new. Close your open tabs.',
    },
    {
      step: 2,
      label: 'Name the drift',
      action:
        'Write one sentence describing what has gone wrong. Be precise. Avoid excuses. This sentence is your diagnostic.',
    },
    {
      step: 3,
      label: 'Identify the layer',
      action:
        'Which of your 8 operating layers has failed? Identity, Strategy, Product, Execution, Revenue, Systems, Relationships, or Energy?',
    },
    {
      step: 4,
      label: 'Cut the noise',
      action:
        'List everything you are currently doing. Remove or defer everything that does not connect to fixing the failed layer.',
    },
    {
      step: 5,
      label: 'Define the single action',
      action:
        'What is one concrete action you can take today that moves you back on course? Write it down. Do it before anything else.',
    },
    {
      step: 6,
      label: 'Establish a review rhythm',
      action:
        'Commit to a daily 5-minute written review for the next 7 days. Measure whether you are back on course.',
    },
  ];

  return (
    <div className="view drift-reset-view">
      <div className="section-header">
        <div className="section-label">PROTOCOL</div>
        <h2>Drift Reset</h2>
        <p>
          Use this when you recognise you have drifted from your operating baseline — scattered,
          unfocused, or stuck in reactive mode.
        </p>
      </div>

      <div className="drift-steps">
        {steps.map((s) => (
          <div key={s.step} className="drift-step">
            <div className="drift-step-number">{s.step}</div>
            <div className="drift-step-content">
              <div className="drift-step-label">{s.label}</div>
              <div className="drift-step-action">{s.action}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="drift-cta">
        <p>
          If drift is deep or recurring, use the full{' '}
          <strong>30-Day Reset Protocol</strong> instead.
        </p>
        <div className="result-actions">
          <button className="btn-secondary" onClick={() => onNavigate('diagnostic')}>
            ← Run Diagnostic
          </button>
          <button className="btn-primary" onClick={() => onNavigate('reset')}>
            30-Day Reset →
          </button>
        </div>
      </div>
    </div>
  );
}
