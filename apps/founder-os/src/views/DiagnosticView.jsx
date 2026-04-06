// DiagnosticView — 6-step question flow + mode inference

import { useState } from 'react';
import { DIAGNOSTIC_QUESTIONS, inferMode } from '../data/diagnostic';

export default function DiagnosticView({ onResult }) {
  const [step, setStep] = useState(0); // 0 = intro, 1-6 = questions, 7 = processing
  const [answers, setAnswers] = useState([]); // array of selected option objects
  const [selected, setSelected] = useState(null); // currently highlighted option

  const totalQuestions = DIAGNOSTIC_QUESTIONS.length;

  function handleStart() {
    setStep(1);
    setSelected(null);
  }

  function handleSelect(option) {
    setSelected(option);
  }

  function handleNext() {
    if (!selected) return;
    const newAnswers = [...answers, selected];
    setAnswers(newAnswers);
    setSelected(null);

    if (step < totalQuestions) {
      setStep(step + 1);
    } else {
      // All questions answered — infer mode
      const modeId = inferMode(newAnswers);
      onResult(modeId);
    }
  }

  function handleBack() {
    if (step <= 1) return;
    const newAnswers = answers.slice(0, -1);
    setAnswers(newAnswers);
    setStep(step - 1);
    setSelected(null);
  }

  if (step === 0) {
    return (
      <div className="view diagnostic-view">
        <div className="diag-intro">
          <div className="diag-step-label">DIAGNOSTIC</div>
          <h2>Where Are You Stuck?</h2>
          <p>
            Answer 6 honest questions. The system will identify your most unstable operating
            layer and assign you the matching protocol.
          </p>
          <p className="diag-note">
            Takes under 3 minutes. No account required. Results stay local.
          </p>
          <button className="btn-primary" onClick={handleStart}>
            Begin Diagnostic →
          </button>
        </div>
      </div>
    );
  }

  const currentQ = DIAGNOSTIC_QUESTIONS[step - 1];
  const progress = Math.round((step / totalQuestions) * 100);

  return (
    <div className="view diagnostic-view">
      <div className="diag-header">
        <div className="diag-step-label">
          Question {step} of {totalQuestions}
        </div>
        <div className="diag-progress-bar">
          <div className="diag-progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="diag-question">
        <h2>{currentQ.question}</h2>
      </div>

      <div className="diag-options">
        {currentQ.options.map((option, idx) => (
          <button
            key={idx}
            className={`diag-option${selected === option ? ' selected' : ''}`}
            onClick={() => handleSelect(option)}
          >
            <span className="diag-option-marker">{selected === option ? '◉' : '○'}</span>
            {option.label}
          </button>
        ))}
      </div>

      <div className="diag-footer">
        {step > 1 && (
          <button className="btn-ghost" onClick={handleBack}>
            ← Back
          </button>
        )}
        <button
          className="btn-primary"
          onClick={handleNext}
          disabled={!selected}
        >
          {step === totalQuestions ? 'See My Mode →' : 'Next →'}
        </button>
      </div>
    </div>
  );
}
