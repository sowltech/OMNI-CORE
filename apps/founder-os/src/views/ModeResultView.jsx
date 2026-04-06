// ModeResultView — displays the inferred founder mode with full protocol

import { MODES } from '../data/modes';
import { LAYERS } from '../data/layers';

export default function ModeResultView({ modeId, onRunAgain, onNavigate }) {
  const mode = MODES[modeId];
  if (!mode) return null;

  const layer = LAYERS.find((l) => l.id === mode.unstableLayer);

  return (
    <div className="view mode-result-view">
      <div className="result-header">
        <div className="result-badge">YOUR CURRENT MODE</div>
        <h1 className="result-mode-label">{mode.label}</h1>
        <p className="result-tagline">{mode.tagline}</p>
        {layer && (
          <div className="result-layer">
            Unstable Layer: <span className="highlight">{layer.label}</span>
          </div>
        )}
      </div>

      <div className="protocol-grid">
        <div className="protocol-card directive">
          <div className="protocol-card-title">▷ Directive</div>
          <p>{mode.directive}</p>
        </div>

        <div className="protocol-card steps">
          <div className="protocol-card-title">◉ Steps</div>
          <ol className="protocol-steps-list">
            {mode.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>

        <div className="protocol-card avoidance">
          <div className="protocol-card-title">⊗ Avoidance Rules</div>
          <ul className="protocol-avoid-list">
            {mode.avoidanceRules.map((rule, i) => (
              <li key={i}>{rule}</li>
            ))}
          </ul>
        </div>

        <div className="protocol-card success">
          <div className="protocol-card-title">◎ Success Condition</div>
          <p className="success-text">{mode.successCondition}</p>
        </div>
      </div>

      <div className="result-actions">
        <button className="btn-ghost" onClick={onRunAgain}>
          ← Run Diagnostic Again
        </button>
        <button className="btn-secondary" onClick={() => onNavigate('drift-reset')}>
          Drift Reset Protocol →
        </button>
        <button className="btn-secondary" onClick={() => onNavigate('modes')}>
          View All Modes →
        </button>
      </div>
    </div>
  );
}
