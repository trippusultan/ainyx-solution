import React from 'react'
import '../styles/form.css'
import { CloseIcon, ChevronRightIcon, SearchIcon, SortIcon, ArrowLeftIcon, QuestionIcon } from '../components'

const STEPS = [
  { key: 'param', label: 'Paramètre promo', icon: '🏷' },
  { key: 'clients', label: 'Données client', icon: '❤️' },
  { key: 'periode', label: 'Période', icon: '📅' },
  { key: 'indicators', label: 'Indicateurs', icon: '🗒' },
]

const INDICATORS = [
  { id: 'conversion', name: 'Taux de conversion des ventes', help: 'Sales conversion rate definition.' },
  { id: 'revenue', name: "Chiffre d'affaires total", help: 'Total Revenue definition.', active: true },
  { id: 'margin', name: 'Marge brute totale', help: 'Total Gross Margin definition.' },
  { id: 'repurchase', name: 'Taux de réachat', help: 'Repurchase rate definition.' },
]

const CATEGORIES = ['# Performance générale', '# Vente', '# Rentabilité', '# Clients', '4+']

function SectionIcon() {
  return (
    <span className="formSectionIcon" aria-hidden="true">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 2v6h6M9 15l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="formSectionBadge" aria-hidden="true">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M19 9h-4V5H9v4H5l7 7 7-7z" />
        </svg>
      </span>
    </span>
  )
}

function InlineIcon({ children, className = '', ...props }) {
  return (
    <span aria-hidden="true" className={`formInlineIcon ${className}`.trim()} {...props}>
      {children}
    </span>
  )
}

export default function FormTask() {
  const [activeStep, setActiveStep] = React.useState('indicators')
  const [selected, setSelected] = React.useState(["Chiffre d'affaires total"])
  const [search, setSearch] = React.useState('')

  const toggle = (name) => setSelected((prev) => (prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]))

  return (
    <div className="App">
      <header className="formHeader">
        <button className="formQuit" type="button">
          <CloseIcon /> Quitter
        </button>
      </header>

      <div className="formLayout">
        <aside className="formSidebar" aria-label="Sidebar">
          {STEPS.map((step) => (
            <button
              key={step.key}
              className={`formSidebarItem${activeStep === step.key ? ' active' : ''}`}
              type="button"
              aria-current={activeStep === step.key ? 'true' : 'false'}
              onClick={() => setActiveStep(step.key)}
            >
              <span className="formSidebarIcon">{step.icon}</span>
              <span className="formSidebarLabel">{step.label}</span>
              {step.key === 'indicators' && <InlineIcon><ChevronRightIcon /></InlineIcon>}
            </button>
          ))}
        </aside>

        <main className="formMain">
          <div className="formPageTitle">
            <SectionIcon />
            <h1 className="formTitle">Performances Promotionnelles</h1>
            <p className="formSubtitle">
              Mesurer l’impact et l’efficacité des stratégies promotionnelles pour maximiser les résultats
            </p>
          </div>

          <div className="formBreadcrumb">
            <span>Formulaire</span>
            <span className="formBreadcrumbSep">/</span>
            <span className="formBreadcrumbCurrent">Indicateurs</span>
          </div>

          <div className="formSectionHeader">
            <span className="formSectionIconSm" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h2 className="formSectionTitle">Indicateurs</h2>
          </div>

          <div className="formFilters" aria-label="Active filters">
            {['PANIER MOYEN', 'ROI'].map((chip) => (
              <span key={chip} className="formChip">
                {chip}
                <button type="button" className="formChipClose" aria-label={`Remove ${chip}`}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </span>
            ))}
          </div>

          <div className="formSearchWrap">
            <InlineIcon className="formSearchIcon">
              <SearchIcon />
            </InlineIcon>
            <input
              className="formSearch"
              placeholder="Rechercher un indicateur"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <div className="formSearchActions">
              <button className="formSearchAction" type="button" aria-label="Clear">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M9 9l6 6M15 9l-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button className="formSearchAction" type="button" aria-label="Sort">
                <SortIcon />
              </button>
            </div>
          </div>

          <div className="formCategories" role="list" aria-label="Categories">
            {CATEGORIES.map((category, idx) => (
              <button key={category} className={`formCategory${idx === 0 ? ' active' : ''}`} type="button" role="listitem">
                {category}
              </button>
            ))}
          </div>

          <div className="formList" role="list" aria-label="Indicators">
            {INDICATORS.map((indicator) => {
              const active = selected.includes(indicator.name)
              return (
                <div
                  key={indicator.id}
                  className={`formRow${active ? ' active' : ''}`}
                  role="listitem"
                  tabIndex={0}
                  aria-pressed={active ? 'true' : 'false'}
                  onClick={() => toggle(indicator.name)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault()
                      toggle(indicator.name)
                    }
                  }}
                >
                  <span className="formRowName">{indicator.name}</span>
                  <button
                    className="formHelp"
                    type="button"
                    aria-label="Help"
                    onClick={(event) => {
                      event.stopPropagation()
                      alert('Description: ' + indicator.help)
                    }}
                  >
                    <QuestionIcon />
                  </button>
                </div>
              )
            })}
          </div>
        </main>
      </div>

      <div className="formFooterWrap">
        <div className="formFooterShadow" aria-hidden="true" />
        <footer className="formFooter">
          <div className="formFooterGroup">
            <button className="formSecondary" type="button">
              <ArrowLeftIcon /> Retour
            </button>
          </div>
          <div className="formFooterCenter">
            <span className="formFooterCount">1</span> / 10 indicateurs sélectionnés
          </div>
          <div className="formFooterGroup">
            <button className="formSecondary" type="button">Réinitialiser</button>
            <button className="formPrimary" type="button">Valider</button>
          </div>
        </footer>
      </div>
    </div>
  )
}
