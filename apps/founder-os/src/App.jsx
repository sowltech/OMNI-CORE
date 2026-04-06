import { useState } from 'react';
import NavBar from './components/NavBar';
import WelcomeView from './views/WelcomeView';
import DiagnosticView from './views/DiagnosticView';
import ModeResultView from './views/ModeResultView';
import DriftResetView from './views/DriftResetView';
import ScorecardView from './views/ScorecardView';
import ResetView from './views/ResetView';
import PatternLibraryView from './views/PatternLibraryView';
import ModesView from './views/ModesView';
import './App.css';

export default function App() {
  const [view, setView] = useState('welcome');
  const [diagModeId, setDiagModeId] = useState(null);

  function navigate(viewId) {
    setView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleDiagResult(modeId) {
    setDiagModeId(modeId);
    navigate('mode-result');
  }

  function renderView() {
    if (view === 'welcome') {
      return <WelcomeView onNavigate={navigate} />;
    }
    if (view === 'diagnostic') {
      return <DiagnosticView onResult={handleDiagResult} />;
    }
    if (view === 'mode-result') {
      return (
        <ModeResultView
          modeId={diagModeId}
          onRunAgain={() => navigate('diagnostic')}
          onNavigate={navigate}
        />
      );
    }
    if (view === 'drift-reset') {
      return <DriftResetView onNavigate={navigate} />;
    }
    if (view === 'scorecard') {
      return <ScorecardView onNavigate={navigate} />;
    }
    if (view === 'reset') {
      return <ResetView />;
    }
    if (view === 'patterns') {
      return <PatternLibraryView />;
    }
    if (view === 'modes' || view.startsWith('modes')) {
      return <ModesView />;
    }
    // mode-detail-<id> from scorecard
    if (view.startsWith('mode-detail-')) {
      const modeId = view.replace('mode-detail-', '');
      return (
        <ModeResultView
          modeId={modeId}
          onRunAgain={() => navigate('diagnostic')}
          onNavigate={navigate}
        />
      );
    }
    return <WelcomeView onNavigate={navigate} />;
  }

  return (
    <div className="app">
      <NavBar currentView={view} onNavigate={navigate} />
      <main className="main-content">{renderView()}</main>
      <footer className="app-footer">
        <span>SOWL TECH · Founder/Builder OS · Local-first · No data leaves your device</span>
      </footer>
    </div>
  );
}
