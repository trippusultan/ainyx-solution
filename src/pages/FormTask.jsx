import React from 'react'
import '../styles/form.css'

function App() {
  return (
    <div className="min-h-screen bg-form-bg text-text-dark">
      <div className="mx-auto max-w-6xl p-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="rounded-lg border border-form-border bg-white p-4">
              <div className="mb-4 flex items-center justify-between rounded-md border border-form-border bg-white px-3 py-2">
                <div className="flex items-center gap-2 text-sm font-medium text-text-gray">
                  <span aria-hidden="true" className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-xs">→</span>
                  Form
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-text-dark">Step 3</span>
                  <span aria-hidden="true" className="text-text-gray">×</span>
                </div>
              </div>

              <div className="mb-5 space-y-1">
                <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-text-gray">Settings</button>
                <button className="flex w-full items-center gap-2 rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white">Form</button>
                <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-text-gray">Metrics/</button>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-text-dark">
                  <span aria-hidden="true" className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 text-xs">✏️</span>
                  Account
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-text-dark">
                  <span aria-hidden="true" className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 text-xs">✨</span>
                  Reports
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-text-dark">
                  <span aria-hidden="true" className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 text-xs">🔔</span>
                  Alerts
                </div>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-9">
            <div className="rounded-lg border border-form-border bg-white p-6">
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-form-border">
                      <svg className="h-5 w-5 text-text-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 2v6h6M9 15l2 2 4-4" />
                      </svg>
                    </div>
                    <h1 className="text-xl font-semibold text-text-dark">Merchant Device Form</h1>
                  </div>
                  <p className="text-sm leading-6 text-text-gray">Build your merchant configuration by adding systems, devices, and review details.</p>
                </div>
              </div>

              <div className="mb-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-text-dark">Device ID</span>
                  <input className="h-11 rounded-lg border border-form-border bg-white px-3 text-sm text-text-dark" defaultValue="89074391" />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-text-dark">Store Name</span>
                  <input className="h-11 rounded-lg border border-form-border bg-white px-3 text-sm text-text-dark" defaultValue="Empire Cinemas" />
                </label>
              </div>

              <p className="mb-4 text-base font-semibold text-text-dark">Systems + Devices</p>

              <div className="mb-6 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 rounded-full border border-form-border bg-gray-50 px-3 py-1.5 text-sm font-semibold text-text-dark">
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-gray-200 text-xs">🌍</span>
                  Earth
                </div>
                <div className="flex items-center gap-2 rounded-full border border-form-border bg-gray-50 px-3 py-1.5 text-sm font-semibold text-text-dark">
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-gray-200 text-xs">🍃</span>
                  Merger
                  <span aria-hidden="true" className="text-xs text-text-gray">×</span>
                </div>
              </div>

              <div className="mb-6 flex flex-wrap gap-2">
                <button className="rounded-full border border-form-border bg-white px-4 py-1.5 text-sm font-medium text-text-dark">Merger</button>
                <button className="rounded-full border border-form-border bg-white px-4 py-1.5 text-sm font-medium text-text-dark">Rank</button>
              </div>

              <div className="rounded-xl border border-form-border bg-gray-50/60 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-form-border bg-white text-sm">🍃</span>
                    <div>
                      <p className="text-sm font-semibold text-text-dark">Merger</p>
                      <p className="text-xs text-text-gray">-</p>
                    </div>
                  </div>
                  <button className="rounded-lg border border-form-border bg-white px-3 py-1.5 text-xs font-medium text-text-dark">Configure</button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
