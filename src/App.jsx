import './App.css'

function BackIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15 18L9 12L15 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function WarningIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M10 2.5L17.5 16.25H2.5L10 2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M10 8.5V11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="10" cy="14" r="0.75" fill="currentColor" />
    </svg>
  )
}

function App() {
  return (
    <div className="desktop-shell">
      <div className="phone-frame">
        <header className="nav-bar">
          <button type="button" className="nav-back" aria-label="Go back">
            <BackIcon />
          </button>
          <h1 className="nav-title">Payment Issue</h1>
        </header>

        <div className="alert-banner" role="alert">
          <WarningIcon />
          <p className="alert-banner-text">
            Your payment of $127.40 was not processed on Oct 12, 2024
          </p>
        </div>

        <main className="screen-content">
          <section className="info-card">
            <h2 className="info-card-title">What Happened?</h2>
            <p className="info-card-body">
              Your bank declined this charge. This is often due to insufficient
              funds or a daily transaction limit.
            </p>
          </section>
        </main>

        <div className="bottom-action">
          <button type="button" className="btn-primary">
            Resolve Now →
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
