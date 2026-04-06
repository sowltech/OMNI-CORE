// ScorecardView — score all 8 layers 1-10, get instant read

import { useState } from 'react';
import { LAYERS } from '../data/layers';
import { LAYER_TO_MODE } from '../data/diagnostic';
import { MODES } from '../data/modes';

const DEFAULT_SCORES = Object.fromEntries(LAYERS.map((l) => [l.id, 5]));

function getColor(score) {
  if (score <= 3) return 'score-critical';
  if (score <= 5) return 'score-low';
  if (score <= 7) return 'score-mid';
  return 'score-high';
}

export default function ScorecardView({ onNavigate }) {
  const [scores, setScores] = useState(DEFAULT_SCORES);
  const [submitted, setSubmitted] = useState(false);

  function handleScore(layerId, value) {
    setScores((prev) => ({ ...prev, [layerId]: Number(value) }));
  }

  function handleSubmit() {
    setSubmitted(true);
  }

  function handleReset() {
    setScores(DEFAULT_SCORES);
    setSubmitted(false);
  }

  // Compute weakest and strongest
  const sortedLayers = LAYERS.slice().sort((a, b) => scores[a.id] - scores[b.id]);
  const weakest = sortedLayers[0];
  const strongest = sortedLayers[sortedLayers.length - 1];
  const avgScore = (Object.values(scores).reduce((a, b) => a + b, 0) / LAYERS.length).toFixed(1);
  const recommendedMode = LAYER_TO_MODE[weakest.id];
  const recommendedModeData = MODES[recommendedMode];

  return (
    <div className="view scorecard-view">
      <div className="section-header">
        <div className="section-label">WEEKLY SCORECARD</div>
        <h2>Rate Your 8 Operating Layers</h2>
        <p>Score each layer from 1 (broken) to 10 (thriving). Be honest.</p>
      </div>

      <div className="scorecard-grid">
        {LAYERS.map((layer) => {
          const score = scores[layer.id];
          return (
            <div key={layer.id} className={`scorecard-row ${getColor(score)}`}>
              <div className="scorecard-layer-info">
                <div className="scorecard-icon">{layer.icon}</div>
                <div>
                  <div className="scorecard-layer-label">{layer.label}</div>
                  <div className="scorecard-layer-desc">{layer.description}</div>
                </div>
              </div>
              <div className="scorecard-slider-area">
                <input
                  type="range"
                  min={1}
                  max={10}
                  value={score}
                  className="score-slider"
                  onChange={(e) => handleScore(layer.id, e.target.value)}
                  aria-label={`${layer.label} score`}
                />
                <div className={`score-value ${getColor(score)}`}>{score}</div>
              </div>
            </div>
          );
        })}
      </div>

      {!submitted ? (
        <div className="scorecard-submit">
          <p className="scorecard-avg">Average score: <strong>{avgScore}</strong></p>
          <button className="btn-primary" onClick={handleSubmit}>
            Get My Read →
          </button>
        </div>
      ) : (
        <div className="scorecard-result">
          <div className="scorecard-result-grid">
            <div className="scorecard-result-card critical">
              <div className="result-card-label">⬇ Weakest Layer</div>
              <div className="result-card-value">{weakest.label}</div>
              <div className="result-card-score">{scores[weakest.id]}/10</div>
            </div>
            <div className="scorecard-result-card strong">
              <div className="result-card-label">⬆ Strongest Layer</div>
              <div className="result-card-value">{strongest.label}</div>
              <div className="result-card-score">{scores[strongest.id]}/10</div>
            </div>
            <div className="scorecard-result-card avg">
              <div className="result-card-label">◎ System Average</div>
              <div className="result-card-value">{avgScore}</div>
              <div className="result-card-score">out of 10</div>
            </div>
          </div>

          {recommendedModeData && (
            <div className="scorecard-recommendation">
              <div className="rec-label">Priority Intervention</div>
              <div className="rec-mode">{recommendedModeData.label}</div>
              <div className="rec-desc">{recommendedModeData.directive}</div>
              <div className="result-actions">
                <button
                  className="btn-secondary"
                  onClick={() => onNavigate(`mode-detail-${recommendedMode}`)}
                >
                  View Full Protocol →
                </button>
              </div>
            </div>
          )}

          <div className="result-actions" style={{ marginTop: '1rem' }}>
            <button className="btn-ghost" onClick={handleReset}>
              ← Re-score
            </button>
            <button className="btn-secondary" onClick={() => onNavigate('diagnostic')}>
              Run Full Diagnostic →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
