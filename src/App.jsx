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

function ChevronRightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M7.5 5L12.5 10L7.5 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M10 4V16M4 10H16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function BankIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 10L12 4L21 10M5 10V19H9V14H15V19H19V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CardIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 10H21" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function CardSmallIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="1.5" y="4.5" width="15" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.25" />
      <path d="M1.5 7.5H16.5" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  )
}

function HelpIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M7 7C7 5.9 7.9 5 9 5C10.1 5 11 5.9 11 7C11 8.2 9.5 8.5 9 9.5V10"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <circle cx="9" cy="12.5" r="0.75" fill="currentColor" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ShieldCheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3L5 6.5V11.5C5 16.08 8.13 20.36 12 21.5C15.87 20.36 19 16.08 19 11.5V6.5L12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9 12L11 14L15 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function NavBar({ title, onBack }) {
  return (
    <header className="nav-bar">
      <button type="button" className="nav-back" onClick={onBack} aria-label="Go back">
        <BackIcon />
      </button>
      <h1 className="nav-title">{title}</h1>
    </header>
  )
}

function ConfirmationNavBar({ title, onClose }) {
  return (
    <header className="nav-bar confirmation-nav-bar">
      <div className="nav-spacer" aria-hidden="true" />
      <h1 className="nav-title">{title}</h1>
      <button type="button" className="nav-close" onClick={onClose} aria-label="Close demo">
        <CloseIcon />
      </button>
    </header>
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

const CARD_TYPE_TO_BRAND = {
  Visa: 'visa',
  Mastercard: 'mastercard',
  Discover: 'discover',
}

const ALTERNATIVE_METHODS = [
  { id: 'bank-1200', type: 'bank', label: 'Bank Account', last4: '1200', brand: null },
  { id: 'visa-8891', type: 'card', label: 'Visa', last4: '8891', brand: 'visa' },
]

function detectCardBrand(cardNumber) {
  const n = cardNumber.replace(/\D/g, '')
  const rules = [
    { brand: 'visa', re: /^4\d{12}(\d{3})?(\d{3})?$/ },
    {
      brand: 'mastercard',
      re: /^(5[1-5]\d{14}|2(2[2-9]\d|[3-6]\d{2}|7[01]\d|720)\d{12})$/,
    },
    { brand: 'amex', re: /^3[47]\d{13}$/ },
    {
      brand: 'discover',
      re: /^(6011\d{12,15}|65\d{14,17}|64[4-9]\d{13,16}|622(12[6-9]|1[3-9]\d|[2-8]\d{2}|9[01]\d|92[0-5])\d{10,13})$/,
    },
  ]
  return rules.find((r) => r.re.test(n))?.brand ?? 'unknown'
}

function getCardLogoUrl(brand) {
  const base =
    'https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/cards/'
  const generic =
    'https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/generic/card-generic.svg'
  const logos = {
    visa: base + 'visa.svg',
    mastercard: base + 'mastercard.svg',
    amex: base + 'american-express.svg',
    discover: base + 'discover.svg',
  }
  return logos[brand] ?? generic
}

function detectCardBrandFromDigits(digits) {
  const full = detectCardBrand(digits)
  if (full !== 'unknown') return full
  if (/^4/.test(digits)) return 'visa'
  if (/^5[1-5]/.test(digits)) return 'mastercard'
  if (/^2[2-7]/.test(digits)) return 'mastercard'
  if (/^3[47]/.test(digits)) return 'amex'
  if (/^(6011|65|64[4-9]|622)/.test(digits)) return 'discover'
  return 'unknown'
}

function brandToLabel(brand) {
  const labels = {
    visa: 'Visa',
    mastercard: 'Mastercard',
    amex: 'Amex',
    discover: 'Discover',
  }
  return labels[brand] ?? 'Card'
}

const DEFAULT_CONFIG = {
  failedPaymentType: 'Bank',
  cardType: 'Visa',
  timeline: 'notPastDue',
  selectedPaymentMethod: null,
}

const URGENCY_MESSAGES = {
  notPastDue: 'Pay by Apr 7, 2026 to avoid a late fee',
  dueToday: 'Your bill is due today — pay now to avoid a late fee',
  pastDue: 'Your account is past due — pay now to avoid service interruption',
}

function getFailedMethodDisplay(config) {
  const isBank = config.failedPaymentType === 'Bank'
  if (isBank) return 'Bank Account ending 0042'
  return `${config.cardType} ending ${CARD_LAST4[config.cardType]}`
}

function generateConfirmationNumber() {
  const num = Math.floor(10000000 + Math.random() * 90000000)
  return `TMO-${num}`
}

function getFailedMethod(config) {
  const isBank = config.failedPaymentType === 'Bank'
  if (isBank) {
    return { id: 'failed', type: 'bank', label: 'Bank Account', last4: '0042', failed: true }
  }
  return {
    id: 'failed',
    type: 'card',
    label: config.cardType,
    last4: CARD_LAST4[config.cardType],
    failed: true,
  }
}

function MethodIcon({ type }) {
  return type === 'bank' ? <BankIcon /> : <CardIcon />
}

function CardLogoImg({ brand, alt, size = 'md' }) {
  const normalizedBrand = brand && brand !== 'unknown' ? brand : undefined
  const url = getCardLogoUrl(normalizedBrand)
  return (
    <img
      src={url}
      alt={alt || normalizedBrand || 'Card'}
      className={size === 'sm' ? 'card-logo-img-sm' : 'card-logo-img'}
      width={size === 'sm' ? 32 : 44}
      height={size === 'sm' ? 20 : 28}
    />
  )
}

function MethodRowLogo({ method }) {
  if (method.type === 'bank') {
    return (
      <span className="card-logo-slot card-logo-bank" aria-hidden="true">
        <BankIcon />
      </span>
    )
  }
  return <CardLogoImg brand={method.brand} alt={method.label} />
}

const EMPTY_CARD_FORM = {
  nameOnCard: '',
  cardNumber: '',
  expirationDate: '',
  cvv: '',
  zipCode: '',
}

function filterNameOnCard(value) {
  return value.replace(/[^a-zA-Z ]/g, '')
}

function formatCardNumber(value, brandHint = 'unknown') {
  const raw = value.replace(/\D/g, '')
  const brand = brandHint !== 'unknown' ? brandHint : detectCardBrandFromDigits(raw)

  if (brand === 'amex') {
    const digits = raw.slice(0, 15)
    const parts = [digits.slice(0, 4), digits.slice(4, 10), digits.slice(10, 15)].filter(
      (part) => part.length > 0,
    )
    return parts.join(' ')
  }

  const digits = raw.slice(0, 16)
  const groups = []
  for (let i = 0; i < digits.length; i += 4) {
    groups.push(digits.slice(i, i + 4))
  }
  return groups.join(' ')
}

function formatExpiration(value) {
  const digits = value.replace(/\D/g, '').slice(0, 4)
  if (digits.length <= 2) return digits
  return `${digits.slice(0, 2)}/${digits.slice(2)}`
}

function filterNumeric(value, maxLen) {
  return value.replace(/\D/g, '').slice(0, maxLen)
}

function isExpirationValid(exp) {
  if (exp.length !== 5) return false
  const [mm, yy] = exp.split('/')
  const month = parseInt(mm, 10)
  const year = parseInt(yy, 10)
  if (Number.isNaN(month) || Number.isNaN(year) || month < 1 || month > 12) return false
  if (year < 26) return false
  if (year === 26 && month < 5) return false
  return true
}

function getExpirationError(exp) {
  if (exp.length !== 5) return ''
  if (!isExpirationValid(exp)) return 'Your card appears to be expired'
  return ''
}

function getCardNumberError(digits) {
  if (digits.length !== 15 && digits.length !== 16) return ''
  if (detectCardBrand(digits) === 'unknown') return 'Please enter a valid card number'
  return ''
}

function isCardFormValid(form, errors) {
  const digits = form.cardNumber.replace(/\D/g, '')
  const brand = detectCardBrand(digits)
  const isAmex = brand === 'amex'
  const requiredDigits = isAmex ? 15 : 16
  const requiredCvv = isAmex ? 4 : 3

  return (
    form.nameOnCard.trim().length >= 2 &&
    digits.length === requiredDigits &&
    brand !== 'unknown' &&
    isExpirationValid(form.expirationDate) &&
    form.cvv.length === requiredCvv &&
    form.zipCode.length === 5 &&
    !errors.cardNumber &&
    !errors.expiration
  )
}

function formatCardPaymentDisplay(label, last4) {
  return `${label} Card ending ${last4}`
}

function formatPaymentMethodDisplay(method) {
  if (!method) return '—'
  if (method.type === 'bank') return `Bank Account ending ${method.last4}`
  return formatCardPaymentDisplay(method.label, method.last4)
}

function FloatingField({ id, label, value, error, children, className = '' }) {
  const filled = value.length > 0
  return (
    <div
      className={`floating-field${filled ? ' is-filled' : ''}${error ? ' has-error' : ''} ${className}`.trim()}
    >
      <label htmlFor={id} className="floating-label">
        {label}
      </label>
      {children}
      {error ? <p className="field-error">{error}</p> : null}
    </div>
  )
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

function PaymentFailureScreen({ config, onResolve }) {
  const [billDetailsOpen, setBillDetailsOpen] = useState(false)

  const isBank = config.failedPaymentType === 'Bank'
  const paymentMethod = isBank
    ? 'Bank Account ending 0042'
    : `${config.cardType} card ending ${CARD_LAST4[config.cardType]}`

  const alertTone = config.timeline === 'pastDue' ? 'danger' : 'warning'
  const urgencyMessage = URGENCY_MESSAGES[config.timeline] ?? URGENCY_MESSAGES.notPastDue

  return (
    <>
      <NavBar title="Payment Issue" onBack={() => {}} />

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
        <button type="button" className="btn-primary" onClick={onResolve}>
          Resolve Now →
        </button>
      </div>
    </>
  )
}

function MakePaymentScreen({ config, onBack, onChoosePaymentMethod, onSubmit }) {
  const selected = config.selectedPaymentMethod

  return (
    <div className="payment-flow">
      <NavBar title="Make Payment" onBack={onBack} />

      <main className="payment-flow-content">
        <section className="payment-amount-card">
          <span className="payment-field-label">Amount Due</span>
          <span className="payment-amount-value">$127.40</span>
        </section>

        <span className="payment-field-label">Payment Method</span>
        {selected ? (
          <div className="payment-method-tile payment-method-tile-selected">
            {selected.type === 'bank' ? (
              <span className="card-logo-slot card-logo-bank" aria-hidden="true">
                <BankIcon />
              </span>
            ) : (
              <CardLogoImg brand={selected.brand} alt={selected.label} />
            )}
            <div className="payment-method-text">
              {selected.type === 'bank' ? (
                <span className="payment-method-line">
                  Bank Account ending {selected.last4}
                </span>
              ) : (
                <span className="payment-method-line">
                  {formatCardPaymentDisplay(selected.label, selected.last4)}
                </span>
              )}
            </div>
            <button
              type="button"
              className="link-button link-button-edit"
              onClick={onChoosePaymentMethod}
            >
              Edit
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="payment-method-tile payment-method-tile-add"
            onClick={onChoosePaymentMethod}
          >
            <PlusIcon />
            <span>Add payment method</span>
          </button>
        )}
      </main>

      <div className="payment-flow-footer bottom-action-stacked">
        <p className="terms-text">
          By submitting, you agree to our{' '}
          <a
            href="https://www.t-mobile.com/guest-pay/terms-and-conditions"
            target="_blank"
            rel="noopener noreferrer"
            className="terms-link"
          >
            Terms &amp; Conditions
          </a>
        </p>
        <button
          type="button"
          className="btn-primary"
          disabled={!selected}
          onClick={onSubmit}
        >
          Agree &amp; Submit
        </button>
      </div>
    </div>
  )
}

function ChoosePaymentMethodScreen({
  config,
  onBack,
  onAddCard,
  onSelect,
  onCancel,
}) {
  const [pendingSelection, setPendingSelection] = useState(null)
  const failedMethod = getFailedMethod(config)

  const handleSelect = () => {
    if (!pendingSelection) return
    const method = ALTERNATIVE_METHODS.find((item) => item.id === pendingSelection)
    if (method) {
      onSelect({
        type: method.type,
        label: method.label,
        last4: method.last4,
        brand: method.brand,
      })
    }
  }

  const failedBrand =
    failedMethod.type === 'card' ? CARD_TYPE_TO_BRAND[config.cardType] : null

  return (
    <div className="payment-flow">
      <NavBar title="Payment Method" onBack={onBack} />

      <main className="payment-flow-content">
        <h2 className="payment-section-heading">Payment Method</h2>
        <p className="payment-page-subtitle">Select a payment method</p>

        <div className="payment-method-list">
          <div className="payment-method-row payment-method-row-disabled">
            <input type="radio" name="paymentMethod" disabled checked={false} readOnly />
            {failedMethod.type === 'bank' ? (
              <span className="card-logo-slot card-logo-bank" aria-hidden="true">
                <BankIcon />
              </span>
            ) : (
              <CardLogoImg brand={failedBrand} alt={failedMethod.label} />
            )}
            <span className="payment-method-row-text">
              <span className="payment-method-row-name">{failedMethod.label}</span>
              <span className="payment-method-row-sub">ending {failedMethod.last4}</span>
            </span>
            <span className="badge badge-failed">Failed</span>
          </div>

          {ALTERNATIVE_METHODS.map((method) => (
            <label
              key={method.id}
              className={`payment-method-row${
                pendingSelection === method.id ? ' payment-method-row-selected' : ''
              }`}
            >
              <input
                type="radio"
                name="paymentMethod"
                checked={pendingSelection === method.id}
                onChange={() => setPendingSelection(method.id)}
              />
              <MethodRowLogo method={method} />
              <span className="payment-method-row-text">
                <span className="payment-method-row-name">{method.label}</span>
                <span className="payment-method-row-sub">ending {method.last4}</span>
              </span>
            </label>
          ))}
        </div>

        <div className="payment-method-divider" />

        <div className="payment-action-list">
          <div className="payment-action-row payment-action-row-disabled">
            <span className="card-logo-slot card-logo-bank" aria-hidden="true">
              <BankIcon />
            </span>
            <span className="payment-action-label">Add bank account</span>
            <span className="badge badge-preferred">PREFERRED</span>
            <ChevronRightIcon />
          </div>

          <button type="button" className="payment-action-row" onClick={onAddCard}>
            <span className="card-logo-slot card-logo-generic" aria-hidden="true">
              <CardIcon />
            </span>
            <span className="payment-action-label">Add a card</span>
            <ChevronRightIcon />
          </button>
        </div>
      </main>

      <div className="payment-flow-footer bottom-action-stacked">
        <button
          type="button"
          className="btn-primary"
          disabled={!pendingSelection}
          onClick={handleSelect}
        >
          Select payment method
        </button>
        <button type="button" className="btn-text" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  )
}

function AddCardScreen({ onBack, onContinue, onCancel }) {
  const [showCvvHelp, setShowCvvHelp] = useState(false)
  const [form, setForm] = useState(EMPTY_CARD_FORM)
  const [errors, setErrors] = useState({ cardNumber: '', expiration: '' })

  const cardDigits = form.cardNumber.replace(/\D/g, '')
  const detectedBrand = detectCardBrandFromDigits(cardDigits)
  const resolvedBrand = detectCardBrand(cardDigits)
  const activeBrand = resolvedBrand !== 'unknown' ? resolvedBrand : detectedBrand
  const logoBrand = activeBrand !== 'unknown' ? activeBrand : undefined
  const cvvMax = activeBrand === 'amex' ? 4 : 3
  const cardMaxLen = activeBrand === 'amex' ? 17 : 19

  const updateForm = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }))
    if (field === 'cardNumber' || field === 'expirationDate') {
      setErrors((current) => ({ ...current, [field === 'cardNumber' ? 'cardNumber' : 'expiration']: '' }))
    }
  }

  const handleCardNumberChange = (value) => {
    const digits = value.replace(/\D/g, '')
    const brand = detectCardBrandFromDigits(digits)
    updateForm('cardNumber', formatCardNumber(value, brand))
  }

  const handleCardNumberBlur = () => {
    setErrors((current) => ({
      ...current,
      cardNumber: getCardNumberError(cardDigits),
    }))
  }

  const handleExpirationBlur = () => {
    setErrors((current) => ({
      ...current,
      expiration: getExpirationError(form.expirationDate),
    }))
  }

  const formValid = isCardFormValid(form, errors)

  const handleContinue = () => {
    const brand = detectCardBrand(cardDigits)
    const last4 = cardDigits.slice(-4)
    onContinue({
      type: 'card',
      label: brandToLabel(brand),
      last4,
      brand,
    })
  }

  return (
    <div className="payment-flow">
      <NavBar title="Add a Card" onBack={onBack} />

      <main className="payment-flow-content">
        <h2 className="payment-section-heading">Pay by card</h2>

        <form className="card-form" onSubmit={(event) => event.preventDefault()}>
          <FloatingField
            id="nameOnCard"
            label="Name on card"
            value={form.nameOnCard}
            onChange={(event) =>
              updateForm('nameOnCard', filterNameOnCard(event.target.value))
            }
          >
            <input
              id="nameOnCard"
              type="text"
              className="pf-input"
              value={form.nameOnCard}
              onChange={(event) =>
                updateForm('nameOnCard', filterNameOnCard(event.target.value))
              }
              autoComplete="cc-name"
            />
          </FloatingField>

          <FloatingField
            id="cardNumber"
            label="Card number"
            value={form.cardNumber}
            error={errors.cardNumber}
            className="floating-field-card"
          >
            <div className="pf-input-with-logo">
              <span className="pf-input-logo" aria-hidden="true">
                <CardLogoImg brand={logoBrand} alt="" />
              </span>
              <input
                id="cardNumber"
                type="text"
                inputMode="numeric"
                className="pf-input pf-input-has-logo"
                value={form.cardNumber}
                onChange={(event) => handleCardNumberChange(event.target.value)}
                onBlur={handleCardNumberBlur}
                maxLength={cardMaxLen}
                autoComplete="cc-number"
              />
            </div>
          </FloatingField>

          <div className="field-row">
            <FloatingField
              id="expirationDate"
              label="Expiration date"
              value={form.expirationDate}
              error={errors.expiration}
              className="field-wrap-half"
            >
              <input
                id="expirationDate"
                type="text"
                inputMode="numeric"
                className="pf-input"
                value={form.expirationDate}
                onChange={(event) =>
                  updateForm('expirationDate', formatExpiration(event.target.value))
                }
                onBlur={handleExpirationBlur}
                maxLength={5}
                autoComplete="cc-exp"
              />
            </FloatingField>

            <FloatingField
              id="cvv"
              label={activeBrand === 'amex' ? 'CVV (4 digits)' : 'CVV'}
              value={form.cvv}
              className="field-wrap-half floating-field-cvv"
            >
              <div className="pf-input-with-help">
                <input
                  id="cvv"
                  type="text"
                  inputMode="numeric"
                  className="pf-input pf-input-has-help"
                  value={form.cvv}
                  onChange={(event) =>
                    updateForm('cvv', filterNumeric(event.target.value, cvvMax))
                  }
                  maxLength={cvvMax}
                  autoComplete="cc-csc"
                />
                <button
                  type="button"
                  className="help-button"
                  aria-label="CVV help"
                  onClick={() => setShowCvvHelp((open) => !open)}
                >
                  <HelpIcon />
                </button>
              </div>
              {showCvvHelp ? (
                <p className="field-help">
                  3 digits on the back of your card (4 digits for Amex)
                </p>
              ) : null}
            </FloatingField>
          </div>

          <FloatingField id="zipCode" label="Zip code" value={form.zipCode}>
            <input
              id="zipCode"
              type="text"
              inputMode="numeric"
              className="pf-input"
              value={form.zipCode}
              onChange={(event) =>
                updateForm('zipCode', filterNumeric(event.target.value, 5))
              }
              maxLength={5}
              autoComplete="postal-code"
            />
          </FloatingField>
        </form>
      </main>

      <div className="payment-flow-footer bottom-action-stacked">
        <button
          type="button"
          className="btn-primary"
          disabled={!formValid}
          onClick={handleContinue}
        >
          Continue
        </button>
        <button type="button" className="btn-text" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  )
}

function PaymentConfirmedScreen({ config, onClose, onDone }) {
  const [confirmationNumber] = useState(generateConfirmationNumber)
  const selected = config.selectedPaymentMethod
  const failedMethodDisplay = getFailedMethodDisplay(config)

  const paymentMethodDisplay = formatPaymentMethodDisplay(selected)

  return (
    <div className="payment-flow">
      <ConfirmationNavBar title="Payment Confirmed" onClose={onClose} />

      <main className="payment-flow-content payment-flow-content-scroll">
        <section className="confirmation-hero">
          <div className="confirmation-hero-icon" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path
                d="M8 16L14 22L24 10"
                stroke="#ffffff"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="confirmation-hero-title">Payment Submitted</h2>
          <p className="confirmation-hero-subtext">Your payment is being processed</p>
        </section>

        <section className="confirmation-card confirmation-card-primary">
          <h3 className="confirmation-card-title">Payment Summary</h3>
          <div className="confirmation-card-divider" />
          <div className="confirmation-summary-row">
            <span className="confirmation-row-label">Amount</span>
            <span className="confirmation-row-value">$127.40</span>
          </div>
          <div className="confirmation-card-divider" />
          <div className="confirmation-summary-row confirmation-summary-row-method">
            <span className="confirmation-row-label">Payment method</span>
            <span className="confirmation-row-value">{paymentMethodDisplay}</span>
          </div>
          <div className="confirmation-card-divider" />
          <div className="confirmation-summary-row">
            <span className="confirmation-row-label">Date</span>
            <span className="confirmation-row-value">May 30, 2026</span>
          </div>
          <div className="confirmation-card-divider" />
          <div className="confirmation-summary-row">
            <span className="confirmation-row-label">Confirmation #</span>
            <span className="confirmation-row-value">{confirmationNumber}</span>
          </div>
        </section>

        <section className="confirmation-card confirmation-card-muted">
          <div className="confirmation-notice-row">
            <span className="confirmation-notice-icon" aria-hidden="true">
              <ShieldCheckIcon />
            </span>
            <div className="confirmation-notice-text">
              <p className="confirmation-notice-primary">Pending retry cancelled</p>
              <p className="confirmation-notice-secondary">
                The scheduled retry on {failedMethodDisplay} has been cancelled
              </p>
            </div>
          </div>
        </section>

        <section className="confirmation-card confirmation-card-muted">
          <h3 className="confirmation-card-title">What&apos;s Next?</h3>
          <div className="confirmation-card-divider" />
          <div className="confirmation-next-row">
            <span className="confirmation-next-bullet" aria-hidden="true" />
            <p className="confirmation-next-text">
              Payment will reflect on your account within 1–2 business days
            </p>
          </div>
          <div className="confirmation-card-divider" />
          <div className="confirmation-next-row">
            <span className="confirmation-next-bullet" aria-hidden="true" />
            <p className="confirmation-next-text">
              A confirmation email will be sent to you shortly
            </p>
          </div>
        </section>
      </main>

      <div className="payment-flow-footer">
        <button type="button" className="btn-primary" onClick={onDone}>
          Done
        </button>
      </div>
    </div>
  )
}

function App() {
  const [screen, setScreen] = useState('config')
  const [config, setConfig] = useState(DEFAULT_CONFIG)

  const handleConfigChange = (updates) => {
    setConfig((current) => ({ ...current, ...updates }))
  }

  const handleSelectPaymentMethod = (method) => {
    setConfig((current) => ({ ...current, selectedPaymentMethod: method }))
    setScreen('makePayment')
  }

  const handleAddCardContinue = (method) => {
    setConfig((current) => ({
      ...current,
      selectedPaymentMethod: method,
    }))
    setScreen('makePayment')
  }

  const handleResetDemo = () => {
    setConfig({ ...DEFAULT_CONFIG })
    setScreen('config')
  }

  return (
    <div className="desktop-shell">
      <div className="phone-frame">
        {screen === 'config' && (
          <DemoConfigScreen
            config={config}
            onConfigChange={handleConfigChange}
            onStart={() => {
              setConfig((current) => ({ ...current, selectedPaymentMethod: null }))
              setScreen('failure')
            }}
          />
        )}

        {screen === 'failure' && (
          <PaymentFailureScreen
            config={config}
            onResolve={() => setScreen('makePayment')}
          />
        )}

        {screen === 'makePayment' && (
          <MakePaymentScreen
            config={config}
            onBack={() => setScreen('failure')}
            onChoosePaymentMethod={() => setScreen('choosePaymentMethod')}
            onSubmit={() => setScreen('confirmed')}
          />
        )}

        {screen === 'choosePaymentMethod' && (
          <ChoosePaymentMethodScreen
            config={config}
            onBack={() => setScreen('makePayment')}
            onAddCard={() => setScreen('addCard')}
            onSelect={handleSelectPaymentMethod}
            onCancel={() => setScreen('makePayment')}
          />
        )}

        {screen === 'addCard' && (
          <AddCardScreen
            onBack={() => setScreen('choosePaymentMethod')}
            onContinue={handleAddCardContinue}
            onCancel={() => setScreen('choosePaymentMethod')}
          />
        )}

        {screen === 'confirmed' && (
          <PaymentConfirmedScreen
            config={config}
            onClose={handleResetDemo}
            onDone={handleResetDemo}
          />
        )}
      </div>
    </div>
  )
}

export default App
