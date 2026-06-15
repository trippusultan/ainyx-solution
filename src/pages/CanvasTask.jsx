import { useState } from 'react'

const cards = [
  {
    id: 'build',
    name: 'Build',
    stripeColor: 'bg-blue-500',
    borderColor: 'border-transparent',
    hasRedBorder: false,
    price: '$0.03/hr',
    metrics: ['0.02', '0.05 GB', '10.00 GB', '1'],
    tabs: ['CPU', 'Memory', 'Disk', 'Region'],
    activeTab: 0,
    progress: 35,
    status: { type: 'success', text: 'Running', icon: '✓' },
    provider: 'AWS',
  },
  {
    id: 'postgres',
    name: 'Postgres',
    stripeColor: 'bg-green-500',
    borderColor: 'border-transparent',
    hasRedBorder: false,
    price: '$0.03/hr',
    metrics: ['0.02', '0.05 GB', '10.00 GB', '1'],
    tabs: ['CPU', 'Memory', 'Disk', 'Region'],
    activeTab: 0,
    progress: 45,
    status: { type: 'info', text: 'Connected', icon: '⟳' },
    provider: 'AWS',
  },
  {
    id: 'redis',
    name: 'Redis',
    stripeColor: 'bg-red-500',
    borderColor: 'border-red-500',
    hasRedBorder: true,
    price: '$0.03/hr',
    metrics: ['0.02', '0.05 GB', '10.00 GB', '1'],
    tabs: ['CPU', 'Memory', 'Disk', 'Region'],
    activeTab: 0,
    progress: 25,
    status: { type: 'error', text: 'Error', icon: '✕' },
    provider: 'AWS',
  },
  {
    id: 'mongodb',
    name: 'Mongodb',
    stripeColor: 'bg-red-500',
    borderColor: 'border-red-500',
    hasRedBorder: true,
    price: '$0.03/hr',
    metrics: ['0.02', '0.05 GB', '10.00 GB', '1'],
    tabs: ['CPU', 'Memory', 'Disk', 'Region'],
    activeTab: 0,
    progress: 60,
    status: { type: 'warning', text: 'Warning', icon: '△' },
    provider: 'AWS',
  },
]

const statusColors = {
  success: {
    bg: 'bg-status-greenText',
    text: 'text-status-greenText',
    icon: '✓',
  },
  info: {
    bg: 'bg-status-blue',
    text: 'text-status-blue',
    icon: '⟳',
  },
  error: {
    bg: 'bg-status-red',
    text: 'text-status-red',
    icon: '✕',
  },
  warning: {
    bg: 'bg-yellow-500',
    text: 'text-yellow-500',
    icon: '△',
  },
}

function ServiceCard({ card }) {
  const [activeTab, setActiveTab] = useState(card.activeTab)
  const status = statusColors[card.status.type] || statusColors.info

  return (
    <div
      className={`relative w-full max-w-sm bg-canvas-card rounded-lg border ${
        card.hasRedBorder ? 'border-red-500' : 'border-transparent'
      } overflow-hidden flex flex-col`}
    >
      {/* Top stripe */}
      <div className={`h-1 ${card.stripeColor}`} />

      {/* Card Content */}
      <div className="p-4 space-y-4">
        {/* Top Row: Name, Price, Gear */}
        <div className="flex items-center justify-between">
          <h3 className="text-white font-medium text-sm">{card.name}</h3>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-status-green text-white text-xs font-medium rounded">
              {card.price}
            </span>
            <button
              className="p-1 text-text-secondary hover:text-white transition-colors"
              aria-label="Settings"
              type="button"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Middle Row: 4 Metrics */}
        <div className="flex items-center justify-between text-xs">
          {card.metrics.map((metric, i) => (
            <span key={i} className="text-text-secondary font-mono">
              {metric}
            </span>
          ))}
        </div>

        {/* Tabs Row */}
        <div className="flex gap-1 bg-canvas-bg rounded p-0.5">
          {card.tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-all ${
                i === activeTab ? 'bg-white text-canvas-bg' : 'text-text-secondary hover:text-white'
              }`}
              type="button"
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Progress Bar - Rainbow Gradient */}
        <div className="relative h-2 bg-gradient-to-r from-blue-500 via-yellow-400 to-red-500 rounded-full overflow-hidden">
          <div
            className="absolute top-1/2 left-[35%] -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full border-2 border-canvas-card shadow-lg"
            style={{ left: `${card.progress}%` }}
          />
        </div>

        {/* Bottom Row: Status + Provider */}
        <div className="flex items-center justify-between pt-2 border-t border-canvas-border">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${status.bg}`} />
            <span className={`text-xs font-medium ${status.text}`}>{card.status.text}</span>
          </div>
          <span className="text-xs font-bold text-status-orange">{card.provider}</span>
        </div>
      </div>
    </div>
  )
}

export default function CanvasTask() {
  return (
    <main className="min-h-screen bg-canvas-bg text-text-primary p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold">Canvas Task</h1>
          <p className="text-text-secondary text-sm mt-1">Dark mode dashboard with service cards</p>
        </div>

        {/* 2x2 Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <ServiceCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </main>
  )
}
