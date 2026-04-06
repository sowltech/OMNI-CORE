// PatternLibraryView — browse the 5 dysfunction patterns

import { useState } from 'react';
import { PATTERNS } from '../data/patterns';
import { LAYERS } from '../data/layers';
import LayerBadge from '../components/LayerBadge';

export default function PatternLibraryView() {
  const [activeId, setActiveId] = useState(null);

  const active = PATTERNS.find((p) => p.id === activeId);

  return (
    <div className="view patterns-view">
      <div className="section-header">
        <div className="section-label">PATTERN LIBRARY</div>
        <h2>Founder Dysfunction Patterns</h2>
        <p>
          These are the 5 most common failure patterns. Each has clear signs, the layers it
          affects, and a precise correction.
        </p>
      </div>

      <div className="patterns-layout">
        <div className="patterns-list">
          {PATTERNS.map((pattern) => (
            <button
              key={pattern.id}
              className={`pattern-item${activeId === pattern.id ? ' active' : ''}`}
              onClick={() => setActiveId(activeId === pattern.id ? null : pattern.id)}
            >
              <div className="pattern-item-label">{pattern.label}</div>
              <div className="pattern-item-layers">
                {pattern.affectedLayers.map((l) => (
                  <span key={l} className="mini-badge">
                    {LAYERS.find((layer) => layer.id === l)?.label || l}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>

        <div className="pattern-detail">
          {active ? (
            <>
              <h3>{active.label}</h3>
              <p className="pattern-description">{active.description}</p>

              <div className="pattern-section">
                <div className="pattern-section-title">Signs You Are In This Pattern</div>
                <ul className="pattern-signs">
                  {active.signs.map((sign, i) => (
                    <li key={i}>{sign}</li>
                  ))}
                </ul>
              </div>

              <div className="pattern-section">
                <div className="pattern-section-title">Affected Layers</div>
                <div className="pattern-layers">
                  {active.affectedLayers.map((l) => (
                    <LayerBadge key={l} layerId={l} />
                  ))}
                </div>
              </div>

              <div className="pattern-section correction-section">
                <div className="pattern-section-title">◉ Correction</div>
                <p className="pattern-correction">{active.correction}</p>
              </div>
            </>
          ) : (
            <div className="pattern-placeholder">
              <p>Select a pattern to see details, signs, affected layers, and corrections.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
