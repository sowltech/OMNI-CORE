const { useMemo, useState } = React;

const layers = [
  "Vision", "Strategy", "Architecture", "Execution", "Cadence", "Recovery", "Signal", "Identity"
];

const modes = {
  "Signal": {
    name: "Signal Collapse",
    directive: "Reduce intake by 70% and re-anchor in live customer feedback.",
    steps: ["Pause new channels for 72h.", "Run 5 direct customer conversations.", "Extract one core pattern and publish team brief."],
    avoid: ["Doom-scrolling frameworks", "Adding tooling before clarity"],
    success: "One unambiguous decision path for the next sprint."
  },
  "Execution": {
    name: "Execution Diffusion",
    directive: "Collapse concurrent work to one active objective.",
    steps: ["List all open initiatives.", "Kill or pause everything except one objective.", "Define done-state for 7 days."],
    avoid: ["Context switching", "New feature promises"],
    success: "Single objective shipped with measurable impact."
  },
  "Architecture": {
    name: "Architecture Theatre",
    directive: "Build only what the current constraint requires.",
    steps: ["Map current bottleneck.", "Apply smallest viable architecture patch.", "Re-measure in 48 hours."],
    avoid: ["Premature abstraction", "Speculative systems"],
    success: "Throughput increases without expanding complexity."
  },
  "Cadence": {
    name: "Cadence Drift",
    directive: "Restore operating rhythm before making strategic decisions.",
    steps: ["Re-establish daily startup/closeout ritual.", "Timebox decisions to one daily review slot.", "Run end-of-week retrospective."],
    avoid: ["Late-night reactive planning", "Skipping weekly review"],
    success: "Team cadence stable for 5 consecutive days."
  },
  "Recovery": {
    name: "Burnout Spiral",
    directive: "Protect physiological recovery as a production dependency.",
    steps: ["Define non-negotiable sleep floor.", "Block one daily no-input window.", "Delegate one draining responsibility."],
    avoid: ["Heroics", "Unbounded availability"],
    success: "Energy score ≥7 for one full week."
  },
  "Identity": {
    name: "Founder Inflation",
    directive: "Shift from self-worth protection to system stewardship.",
    steps: ["Separate ego triggers from operating decisions.", "Document role boundaries for founder vs operator.", "Review one tough decision with external advisor."],
    avoid: ["Status signaling", "Performative complexity"],
    success: "Decisions map to mission over identity defense."
  },
  "Strategy": {
    name: "Planning Addiction",
    directive: "Exchange planning comfort for execution certainty.",
    steps: ["Freeze roadmap edits for one week.", "Choose one testable strategic bet.", "Execute and review with hard metrics."],
    avoid: ["Infinite planning loops", "Deck polishing"],
    success: "Validated/invalidated bet with learning captured."
  },
  "Vision": {
    name: "Stack Chasing",
    directive: "Lock vision to customer pain, not ecosystem trend.",
    steps: ["Define target user + burning pain in one sentence.", "Reject initiatives not tied to that sentence.", "Re-prioritize roadmap by pain intensity."],
    avoid: ["Trend-led pivots", "Platform envy"],
    success: "Roadmap aligns to one pain-centered narrative."
  }
};

const patternLibrary = [
  {name: "Stack Chasing", signs: "Frequent tech pivots, weak customer language", layers: "Vision, Strategy", correction: "Anchor roadmap to one customer pain metric."},
  {name: "Architecture Theatre", signs: "Refactors outrun shipping", layers: "Architecture, Execution", correction: "Only architect around active bottleneck."},
  {name: "Founder Inflation", signs: "Defensive decision-making", layers: "Identity, Signal", correction: "Use advisor review for high-emotion calls."},
  {name: "Open-Loop Overload", signs: "Too many partially started threads", layers: "Execution, Cadence", correction: "Single-thread objective with daily closure."},
  {name: "Planning Addiction", signs: "Roadmap churn, low experiment velocity", layers: "Strategy, Recovery", correction: "Freeze planning; run one high-signal test."},
];

const diagnosticQs = [
  "Where is friction most visible right now?",
  "Which layer degrades first under pressure?",
  "What has been postponed repeatedly?",
  "What type of work consumes attention but yields low outcomes?",
  "What do your last 7 days prove?",
  "Where do you feel the greatest avoidance?"
];

function App() {
  const [view, setView] = useState("welcome");
  const [answers, setAnswers] = useState(Array(6).fill("Vision"));
  const [scores, setScores] = useState(Object.fromEntries(layers.map((l) => [l, 5])));

  const unstableLayer = useMemo(() => {
    const tally = answers.reduce((acc, layer) => ({ ...acc, [layer]: (acc[layer] || 0) + 1 }), {});
    return Object.entries(tally).sort((a,b) => b[1] - a[1])[0]?.[0] || "Vision";
  }, [answers]);

  const weakest = useMemo(() => Object.entries(scores).sort((a,b) => a[1]-b[1])[0], [scores]);
  const strongest = useMemo(() => Object.entries(scores).sort((a,b) => b[1]-a[1])[0], [scores]);

  const mode = modes[unstableLayer] || modes.Vision;

  return (
    <div className="app-shell">
      <div className="header">
        <div>
          <h1>SOWL TECH Founder/Builder Operating System</h1>
          <div className="muted">Interactive command interface for founder operating resets.</div>
        </div>
        <button className="btn primary" onClick={() => {setAnswers(Array(6).fill("Vision")); setScores(Object.fromEntries(layers.map((l) => [l, 5])));}}>Hard Reset</button>
      </div>

      <div className="nav">
        {[
          ["welcome", "Welcome Hub"], ["diagnostic", "6-Step Diagnostic"], ["mode", "Mode Protocol"],
          ["drift", "Drift Reset"], ["scorecard", "Weekly Scorecard"], ["reset30", "30-Day Reset"],
          ["patterns", "Pattern Library"], ["reference", "Mode Reference"]
        ].map(([k, label]) => (
          <button key={k} className={`btn ${view===k ? "active" : ""}`} onClick={() => setView(k)}>{label}</button>
        ))}
      </div>

      {view === "welcome" && <div className="card"><h3>Welcome hub</h3><p>Run diagnostic, identify unstable layer, execute mode protocol, score weekly, and apply targeted resets.</p></div>}

      {view === "diagnostic" && (
        <div className="grid">
          {diagnosticQs.map((q, i) => (
            <div key={q} className="card">
              <strong>{i+1}. {q}</strong>
              <select value={answers[i]} onChange={(e) => setAnswers(answers.map((a, idx) => idx===i ? e.target.value : a))}>
                {layers.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
          ))}
          <div className="card">
            <h4>Inference</h4>
            <div className="kpi">Unstable Layer: {unstableLayer}</div>
            <div className="muted">Assigned Mode: {mode.name}</div>
          </div>
        </div>
      )}

      {view === "mode" && (
        <div className="card">
          <h3>{mode.name}</h3>
          <p><strong>Directive:</strong> {mode.directive}</p>
          <p><strong>Execution steps</strong></p>
          <ul>{mode.steps.map((s) => <li key={s}>{s}</li>)}</ul>
          <p><strong>Avoidance rules</strong></p>
          <ul>{mode.avoid.map((a) => <li key={a}>{a}</li>)}</ul>
          <p><strong>Success condition:</strong> {mode.success}</p>
        </div>
      )}

      {view === "drift" && (
        <div className="card">
          <h3>Drift reset protocol (15 min)</h3>
          <ol>
            <li>Name active mode and unstable layer.</li>
            <li>Delete/close three open loops immediately.</li>
            <li>Choose one mission-critical action for today.</li>
            <li>Set shutdown ritual with written proof of done-state.</li>
          </ol>
        </div>
      )}

      {view === "scorecard" && (
        <div className="grid">
          <div className="card">
            <h3>Weekly scorecard</h3>
            {layers.map((l) => (
              <label key={l}>{l}
                <input type="number" min="1" max="10" value={scores[l]} onChange={(e) => setScores({...scores, [l]: Number(e.target.value || 1)})} />
              </label>
            ))}
          </div>
          <div className="card">
            <h3>Live scoring</h3>
            <p>Weakest layer: <strong>{weakest[0]}</strong> ({weakest[1]}/10)</p>
            <p>Strongest layer: <strong>{strongest[0]}</strong> ({strongest[1]}/10)</p>
            <p>Priority intervention: <strong>{modes[weakest[0]].name}</strong></p>
            <div className="progress"><div style={{width: `${(Object.values(scores).reduce((a,b)=>a+b,0)/(layers.length*10))*100}%`}} /></div>
            <small>System stability score</small>
          </div>
        </div>
      )}

      {view === "reset30" && (
        <div className="card">
          <h3>30-Day staged reset</h3>
          <ul>
            <li><strong>Days 1-7:</strong> Stabilize cadence + sleep, remove open loops.</li>
            <li><strong>Days 8-14:</strong> Run one focused strategic bet.</li>
            <li><strong>Days 15-21:</strong> Tighten architecture around active bottleneck.</li>
            <li><strong>Days 22-30:</strong> Compound wins, document reusable protocol.</li>
          </ul>
        </div>
      )}

      {view === "patterns" && (
        <div className="grid">
          {patternLibrary.map((p) => (
            <div className="card" key={p.name}>
              <h4>{p.name}</h4>
              <p><strong>Signs:</strong> {p.signs}</p>
              <p><strong>Affected layers:</strong> {p.layers}</p>
              <p><strong>Correction:</strong> {p.correction}</p>
            </div>
          ))}
        </div>
      )}

      {view === "reference" && (
        <div className="grid">
          {Object.entries(modes).map(([layer, m]) => (
            <div className="card" key={layer}><h4>{layer}: {m.name}</h4><p>{m.directive}</p></div>
          ))}
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
