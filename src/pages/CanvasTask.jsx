import React from 'react'
import './../styles/canvas.css'
import { GitHubIcon, PostgresIcon, RedisIcon, MongoIcon, ChevronDownIcon, MoreIcon, ShareIcon, SunIcon, MoonIcon, SettingsIcon, ClockIcon, CheckIcon, AlertIcon, ZoomIcon, HelpIcon } from '../components'

const SERVICES = [
  { id: 'build', label: 'Build', Icon: GitHubIcon, status: 'To be deployed', tone: 'default' },
  { id: 'postgres', label: 'Postgres', Icon: PostgresIcon, status: 'Success', tone: 'success' },
  { id: 'redis', label: 'Redis', Icon: RedisIcon, status: 'Error', tone: 'error' },
  { id: 'mongodb', label: 'Mongodb', Icon: MongoIcon, status: 'Error', tone: 'error' },
]

const STATUSES = {
  default: { color: '#9fb7ff', Icon: ClockIcon },
  success: { color: '#5ceabc', Icon: CheckIcon },
  error: { color: '#fa5252', Icon: AlertIcon },
}

const STATS = [
  { label: 'CPU', value: '0.02' },
  { label: 'Memory', value: '0.05 GB' },
  { label: 'Disk', value: '10.00 GB' },
  { label: 'Region', value: '1' },
]

const TABS = ['CPU', 'Memory', 'Disk', 'Region']

export default function CanvasTask() {
  return (
    <div className="App">
      <header className="ainyx-nav">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: '#f7faf8', color: '#0b0c10', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 14, border: '1px solid rgba(0,0,0,0.03)' }}>S</div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(235,233,230,0.08)', color: '#f7faf8', border: '1px solid rgba(235,233,230,0.18)', padding: '6px 12px', borderRadius: 10, fontSize: 13, fontWeight: 500 }}>
            <span aria-hidden="true" style={{ fontSize: 14 }}>💡</span>
            supertokens-golang
            <button style={{ background: 'transparent', border: 'none', color: 'inherit', display: 'inline-flex', padding: 2, borderRadius: 6 }} aria-label="Project options">
              <ChevronDownIcon />
            </button>
          </div>
          <button style={{ background: 'transparent', border: 'none', color: '#f7faf8', display: 'inline-flex', padding: 2, borderRadius: 6 }} aria-label="More">
            <MoreIcon />
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(235,233,230,0.08)', border: '1px solid rgba(235,233,230,0.18)', color: '#f7faf8', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Share">
            <ShareIcon />
          </button>
          <div style={{ display: 'inline-flex', borderRadius: 999, background: 'rgba(24,24,27,1)', border: '1px solid rgba(235,233,230,0.32)', padding: 2, gap: 6 }}>
            <button style={{ border: 'none', background: 'rgba(235,233,230,0.18)', color: '#f7faf8', fontSize: 12, fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 10px', borderRadius: 999 }} aria-label="Dark theme">
              <MoonIcon /> Dark
            </button>
            <button style={{ border: 'none', background: 'transparent', color: '#f7faf8', fontSize: 12, fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 10px', borderRadius: 999 }} aria-label="Light theme">
              <SunIcon /> Light
            </button>
          </div>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#f3f4f6', border: '1px solid rgba(235,233,230,0.18)', display: 'grid', placeItems: 'center', color: '#0b0c10' }} aria-label="User profile">
            <span aria-hidden="true" style={{ fontSize: 18 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v1h20v-1c0-3.3-6.7-5-10-5z" />
              </svg>
            </span>
          </div>
        </div>
      </header>

      <div className="ainyx-layout">
        <aside className="ainyx-sidebar" aria-label="Primary">
          <button className="ainyx-sidebarItem" aria-label="GitHub" type="button"><GitHubIcon size={20} /></button>
          <button className="ainyx-sidebarItem" aria-label="Postgres" type="button"><PostgresIcon size={20} /></button>
          <button className="ainyx-sidebarItem" aria-label="Redis" type="button"><RedisIcon size={20} /></button>
          <button className="ainyx-sidebarItem" aria-label="MongoDB" type="button"><MongoIcon size={20} /></button>
          <button className="ainyx-sidebarItem" aria-label="Cube" type="button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M12 10 2 17l10 7 10-7-10-7zM2 8l10-7 10 7M2 14l10 7 10-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="ainyx-sidebarItem" aria-label="Analytics" type="button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4 20h4V10H4v10zm6-10v10h4V10h-4zm6 6h4V10h-4v6z" />
            </svg>
          </button>
          <button className="ainyx-sidebarItem" aria-label="Network" type="button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <circle cx="12" cy="12" r="3" fill="currentColor" />
              <path d="M12 2v4m0 12v4M2 12h4m12 0h4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83" strokeLinecap="round" />
            </svg>
          </button>
        </aside>

        <main className="ainyx-canvas">
          <div className="ainyx-canvasGrid">
            {SERVICES.map((service) => {
              const status = STATUSES[service.tone]
              const StatusIcon = status.Icon
              const activeTabIndex = 0
              return (
                <div key={service.id} className={`ainyx-card${service.tone === 'error' ? ' ainyx-card--error' : ''}`}>
                  <div className="ainyx-cardMeta">
                    <div className="ainyx-cardHeader">
                      <span className="ainyx-cardBrand"><service.Icon size={18} /></span>
                      <span className="ainyx-cardTitle">{service.label}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span className="ainyx-badge">$0.03/HR</span>
                      <button className="ainyx-iconBtn" aria-label="Settings" type="button"><SettingsIcon /></button>
                    </div>
                  </div>

                  <div className="ainyx-metaGrid">
                    {STATS.map((item) => (
                      <div key={item.label} className="ainyx-metaItem">
                        <span className="ainyx-metaLabel">{item.label}</span>
                        <span className="ainyx-metaValue">{item.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="ainyx-tabs" role="tablist">
                    {TABS.map((tab, idx) => (
                      <button key={tab} type="button" role="tab" aria-selected={idx === activeTabIndex} className="ainyx-tab" style={{ background: idx === activeTabIndex ? '#f7faf8' : 'transparent', color: idx === activeTabIndex ? '#0b0c10' : '#d1d3db' }}>
                        {tab}
                      </button>
                    ))}
                  </div>

                  <div className="ainyx-control">
                    <div className="ainyx-slider">
                      <span className="ainyx-sliderKnob" aria-hidden="true" />
                    </div>
                    <span className="ainyx-sliderField">0.02</span>
                  </div>

                  <div className="ainyx-footer">
                    <span className="ainyx-status" style={{ color: status.color }}>
                      <StatusIcon />
                      <span>{service.status}</span>
                    </span>
                    <span className="ainyx-footerProvider">aws</span>
                  </div>
                </div>
              )
            })}
          </div>
        </main>
      </div>

      <div className="ainyx-zoom">
        <button className="ainyx-zoomBtn" type="button" aria-label="Zoom out">-</button>
        <span className="ainyx-zoomLabel">100%</span>
        <button className="ainyx-zoomBtn" type="button" aria-label="Zoom in">+</button>
        <button className="ainyx-zoomBtn" type="button" aria-label="Help"><HelpIcon /></button>
      </div>
    </div>
  )
}
