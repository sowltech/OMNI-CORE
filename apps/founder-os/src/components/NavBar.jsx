// NavBar — top navigation strip

export default function NavBar({ currentView, onNavigate }) {
  const navItems = [
    { id: 'welcome', label: 'Home' },
    { id: 'diagnostic', label: 'Diagnose' },
    { id: 'scorecard', label: 'Scorecard' },
    { id: 'patterns', label: 'Patterns' },
    { id: 'reset', label: '30-Day Reset' },
    { id: 'modes', label: 'Modes' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => onNavigate('welcome')}>
        SOWL OS
      </div>
      <div className="navbar-items">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-btn${currentView === item.id || currentView.startsWith(item.id) ? ' active' : ''}`}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
