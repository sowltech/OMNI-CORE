// ResetView — 30-Day Staged Reset Protocol

import { useState } from 'react';
import { RESET_PHASES } from '../data/reset';

export default function ResetView() {
  const [activePhase, setActivePhase] = useState(1);

  const phase = RESET_PHASES.find((p) => p.phase === activePhase);

  return (
    <div className="view reset-view">
      <div className="section-header">
        <div className="section-label">30-DAY RESET</div>
        <h2>Staged Reset Protocol</h2>
        <p>
          A structured 4-phase recovery for when you have drifted significantly from your
          operating baseline — scattered focus, stalling momentum, or systemic drift.
        </p>
      </div>

      <div className="phase-tabs">
        {RESET_PHASES.map((p) => (
          <button
            key={p.phase}
            className={`phase-tab${activePhase === p.phase ? ' active' : ''}`}
            onClick={() => setActivePhase(p.phase)}
          >
            <span className="phase-tab-number">Phase {p.phase}</span>
            <span className="phase-tab-days">{p.days}</span>
          </button>
        ))}
      </div>

      {phase && (
        <div className="phase-content">
          <div className="phase-header">
            <div className="phase-label">{phase.label}</div>
            <div className="phase-objective">
              <strong>Objective:</strong> {phase.objective}
            </div>
          </div>

          <div className="phase-tasks-section">
            <div className="phase-tasks-title">Tasks</div>
            <ol className="phase-tasks-list">
              {phase.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ol>
          </div>

          <div className="phase-deliverable">
            <div className="phase-deliverable-label">◉ Phase Deliverable</div>
            <p>{phase.deliverable}</p>
          </div>

          <div className="phase-nav">
            {activePhase > 1 && (
              <button
                className="btn-ghost"
                onClick={() => setActivePhase(activePhase - 1)}
              >
                ← Previous Phase
              </button>
            )}
            {activePhase < RESET_PHASES.length && (
              <button
                className="btn-secondary"
                onClick={() => setActivePhase(activePhase + 1)}
              >
                Next Phase →
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
