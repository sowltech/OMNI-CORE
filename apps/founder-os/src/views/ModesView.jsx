// ModesView — full reference of all 8 founder modes

import { useState } from 'react';
import { MODES } from '../data/modes';
import { LAYERS } from '../data/layers';

export default function ModesView() {
  const [activeId, setActiveId] = useState(null);
  const modeList = Object.values(MODES);
  const active = MODES[activeId];

  return (
    <div className="view modes-view">
      <div className="section-header">
        <div className="section-label">MODE REFERENCE</div>
        <h2>All 8 Founder Operating Modes</h2>
        <p>Each mode corresponds to a specific unstable layer with a complete protocol.</p>
      </div>

      <div className="modes-layout">
        <div className="modes-list">
          {modeList.map((mode) => {
            const layer = LAYERS.find((l) => l.id === mode.unstableLayer);
            return (
              <button
                key={mode.id}
                className={`mode-item${activeId === mode.id ? ' active' : ''}`}
                onClick={() => setActiveId(activeId === mode.id ? null : mode.id)}
              >
                <div className="mode-item-label">{mode.label}</div>
                <div className="mode-item-layer">{layer?.label}</div>
              </button>
            );
          })}
        </div>

        <div className="mode-detail">
          {active ? (
            <>
              <div className="mode-detail-header">
                <h3>{active.label}</h3>
                <p className="mode-detail-tagline">{active.tagline}</p>
                {(() => {
                  const layer = LAYERS.find((l) => l.id === active.unstableLayer);
                  return layer ? (
                    <div className="mode-detail-layer">
                      Unstable Layer: <strong>{layer.label}</strong>
                    </div>
                  ) : null;
                })()}
              </div>

              <div className="mode-protocol">
                <div className="protocol-block">
                  <div className="protocol-block-title">▷ Directive</div>
                  <p>{active.directive}</p>
                </div>

                <div className="protocol-block">
                  <div className="protocol-block-title">◉ Steps</div>
                  <ol>
                    {active.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </div>

                <div className="protocol-block avoidance">
                  <div className="protocol-block-title">⊗ Avoidance Rules</div>
                  <ul>
                    {active.avoidanceRules.map((rule, i) => (
                      <li key={i}>{rule}</li>
                    ))}
                  </ul>
                </div>

                <div className="protocol-block success">
                  <div className="protocol-block-title">◎ Success Condition</div>
                  <p>{active.successCondition}</p>
                </div>
              </div>
            </>
          ) : (
            <div className="mode-placeholder">
              <p>Select a mode to view its full protocol.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
