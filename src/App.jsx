import { useState } from 'react'
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

function ChevronDownIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const CARD_OPTIONS = ['Visa', 'Mastercard', 'Discover']

const CARD_LAST4 = {
  Visa: '4242',
  Mastercard: '8891',
  Discover: '6303',
}

const TIMELINE_OPTIONS = [
  { value: 'notPastDue', label: 'Bill NOT past due' },
  { value: 'dueToday', label: 'Bill due today' },
  { value: 'pastDue', label: 'Bill past due' },
]

const DEFAULT_CONFIG = {
  failedPaymentType: 'Bank',
  cardType: 'Visa',
  timeline: 'notPastDue',
}

function DemoConfigScreen({ config, onConfigChange, onStart }) {
  const isBank = config.failedPaymentType === 'Bank'

  return (
    <>
      <header className="demo-header">
        <h1 className="demo-header-title">Payment Recovery Demo</h1>
      </header>

      <main className="screen-content">
        <p className="demo-subtitle">Configure the scenario you want to test</p>

        <section className="info-card form-section">
          <h2 className="info-card-title">Failed Payment Type</h2>

          <div className="radio-group" role="radiogroup" aria-label="Failed payment type">
            {['Bank', 'Credit Card', 'Debit Card'].map((type) => (
              <label key={type} className="radio-option">
                <input
                  type="radio"
                  name="paymentType"
                  checked={config.failedPaymentType === type}
                  onChange={() => onConfigChange({ failedPaymentType: type })}
                />
                <span>{type}</span>
              </label>
            ))}
          </div>

          {!isBank && (
            <div className="field-wrap">
              <label className="field-label" htmlFor="cardTypeSelect">
                Card Type
              </label>
              <select
                id="cardTypeSelect"
                className="select-field"
                value={config.cardType}
                onChange={(event) => onConfigChange({ cardType: event.target.value })}
              >
                {CARD_OPTIONS.map((cardType) => (
                  <option key={cardType} value={cardType}>
                    {cardType}
                  </option>
                ))}
              </select>
            </div>
          )}
        </section>

        <section className="info-card form-section">
          <h2 className="info-card-title">Payment Timeline</h2>
          <div className="radio-group" role="radiogroup" aria-label="Payment timeline">
            {TIMELINE_OPTIONS.map((option) => (
              <label key={option.value} className="radio-option">
                <input
                  type="radio"
                  name="timeline"
                  checked={config.timeline === option.value}
                  onChange={() => onConfigChange({ timeline: option.value })}
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </section>
      </main>

      <div className="bottom-action">
        <button type="button" className="btn-primary" onClick={onStart}>
          Start Demo →
        </button>
      </div>
    </>
  )
}

const URGENCY_MESSAGES = {
  notPastDue: 'Pay by Apr 7, 2026 to avoid a late fee',
  dueToday: 'Your bill is due today — pay now to avoid a late fee',
  pastDue: 'Your account is past due — pay now to avoid service interruption',
}

function PaymentFailureScreen({ config }) {
  const [billDetailsOpen, setBillDetailsOpen] = useState(false)

  const isBank = config.failedPaymentType === 'Bank'
  const paymentMethod = isBank
    ? 'Bank Account ending 0042'
    : `${config.cardType} card ending ${CARD_LAST4[config.cardType]}`

  const alertTone = config.timeline === 'pastDue' ? 'danger' : 'warning'
  const urgencyMessage = URGENCY_MESSAGES[config.timeline] ?? URGENCY_MESSAGES.notPastDue

  return (
    <>
      <header className="nav-bar">
        <button type="button" className="nav-back" aria-label="Go back">
          <BackIcon />
        </button>
        <h1 className="nav-title">Payment Issue</h1>
      </header>

      <div className={`alert-banner alert-banner-${alertTone}`} role="alert">
        <WarningIcon />
        <div className="alert-banner-content">
          <p className="alert-banner-text">
            Postpaid Mobile bill payment of $127.40 was not processed
          </p>
          <p className="alert-banner-urgency">{urgencyMessage}</p>
        </div>
      </div>

      <main className="screen-content">
        <section className="info-card detail-card">
          <h2 className="info-card-title">Payment Attempted</h2>
          <div className="detail-row">
            <span className="detail-label">Method</span>
            <span className="detail-value">{paymentMethod}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Date</span>
            <span className="detail-value">Apr 5, 2026</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Amount</span>
            <span className="detail-value">$127.40</span>
          </div>
        </section>

        <section className="info-card accordion">
          <button
            type="button"
            className="accordion-header"
            onClick={() => setBillDetailsOpen((open) => !open)}
            aria-expanded={billDetailsOpen}
          >
            <span className="accordion-title">Bill Details</span>
            <span className={`accordion-chevron${billDetailsOpen ? ' accordion-chevron-open' : ''}`}>
              <ChevronDownIcon />
            </span>
          </button>
          {billDetailsOpen && (
            <div className="accordion-body">
              <div className="detail-row">
                <span className="detail-label">Service</span>
                <span className="detail-value">Postpaid Mobile</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Bill period</span>
                <span className="detail-value">03/16/2026 – 04/15/2026</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Due date</span>
                <span className="detail-value">Apr 7, 2026</span>
              </div>
            </div>
          )}
        </section>
      </main>

      <div className="bottom-action">
        <button type="button" className="btn-primary">
          Resolve Now →
        </button>
      </div>
    </>
  )
}

function App() {
  const [screen, setScreen] = useState('config')
  const [config, setConfig] = useState(DEFAULT_CONFIG)

  const handleConfigChange = (updates) => {
    setConfig((current) => ({ ...current, ...updates }))
  }

  return (
    <div className="desktop-shell">
      <div className="phone-frame">
        {screen === 'config' ? (
          <DemoConfigScreen
            config={config}
            onConfigChange={handleConfigChange}
            onStart={() => setScreen('failure')}
          />
        ) : (
          <PaymentFailureScreen config={config} />
        )}
      </div>
    </div>
  )
}

export default App
