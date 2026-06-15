import React, { useState } from 'react'
import { Card, Badge, Button, Input } from '../components'

export default function CanvasTask() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')
  const [view, setView] = useState('active')

  const task = {
    id: '#TK-1042',
    title: 'Update onboarding flow for new users',
    description:
      'Redesign the onboarding experience to reduce drop-off rates. Focus on clarity, guidance, and progressive disclosure.',
    status: 'In Progress',
    statusColor: 'blue',
    priority: 'High',
    due: '2026-06-18',
    assignee: 'Ganesh J.',
    category: 'Design System',
    tag: 'Core',
  }

  const steps = [
    { id: '1', label: 'Research & Discovery', done: true },
    { id: '2', label: 'Wireframing', done: true },
    { id: '3', label: 'Visual Design', done: true },
    { id: '4', label: 'Prototype Review', done: false },
    { id: '5', label: 'Developer Handoff', done: false },
  ]

  const activity = ['Sarah updated the design specs.', 'Mike commented on the prototype.', 'You marked Wireframing as done.']
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#f5f5f7',
      }}
    >
      {/* Top bar */}
      <header
        style={{
          height: '56px',
          background: '#ffffff',
          borderBottom: '1px solid #e5e7eb',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          position: 'sticky',
          top: 0,
          zIndex: 10,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '28px',
              height: '28px',
              background: '#2563eb',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: '700',
              fontSize: '13px',
            }}
          >
            A
          </div>
          <span style={{ fontWeight: '600', fontSize: '15px', color: '#111827' }}>Ainyx Workspace</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search tasks..."
            style={{
              height: '34px',
              padding: '0 12px 0 36px',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              fontSize: '13px',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '10px center',
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z' stroke='%239CA3AF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
              width: '260px',
              outline: 'none',
            }}
          />
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: '#f3f4f6',
              border: '1px solid #e5e7eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              color: '#374151',
              fontWeight: '600',
            }}
          >
            GJ
          </div>
        </div>
      </header>

      <div
        style={{
          display: 'flex',
          height: 'calc(100vh - 56px)',
        }}
      >
        {/* Sidebar */}
        <aside
          style={{
            width: '220px',
            background: '#ffffff',
            borderRight: '1px solid #e5e7eb',
            padding: '16px 12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          <NavItem label="Dashboard" active={view === 'dashboard'} onClick={() => setView('dashboard')} />
          <NavItem label="Active Tasks" active={view === 'active'} onClick={() => setView('active')} />
          <NavItem label="Completed" active={view === 'completed'} onClick={() => setView('completed')} />
          <div style={{ flex: 1 }} />
          <NavItem label="Settings" />
          <NavItem label="Help" />
        </aside>

        {/* Main */}
        <main style={{ flex: 1, overflow: 'auto', padding: '24px' }}>
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#6b7280' }}>
              <span style={{ color: '#6b7280' }}>Tasks</span>
              <span>/</span>
              <span style={{ color: '#374151' }}>Active</span>
              <span style={{ margin: '0 4px' }}>/</span>
              <span style={{ color: '#2563eb', fontWeight: '500' }}>Canvas Task</span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
              }}
            >
              <div>
                <h1 style={{ fontSize: '22px', fontWeight: '700', color: '#111827', margin: 0 }}>Canvas Task</h1>
                <p style={{ fontSize: '14px', color: '#6b7280', margin: 0, marginTop: '4px' }}>
                  Track and manage your assigned design tasks.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <Button variant="outline" startIcon="+">
                  New Task
                </Button>
                <Button variant="primary" startIcon="●">
                  Update Status
                </Button>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
              {/* Left */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Card title={task.title} subtitle={task.description} fullWidth style={{ gap: '20px' }}>
                  <div
                    style={{
                      display: 'flex',
                      gap: '10px',
                      flexWrap: 'wrap',
                    }}
                  >
                    <Badge variant={task.statusColor}>{task.status}</Badge>
                    <Badge variant="gray">{task.priority}</Badge>
                    <Badge variant="gray">Due {task.due}</Badge>
                    <Badge variant="purple">{task.category}</Badge>
                  </div>

                  <Divider />

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {steps.map((step, idx) => (
                      <div
                        key={step.id}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '8px 0',
                        }}
                      >
                        <div
                          style={{
                            width: '22px',
                            height: '22px',
                            borderRadius: '50%',
                            border: '2px solid #d1d5db',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '11px',
                            color: step.done ? '#fff' : '#9ca3af',
                            background: step.done ? '#2563eb' : '#fff',
                            borderColor: step.done ? '#2563eb' : '#d1d5db',
                            flexShrink: 0,
                          }}
                        >
                          {step.done ? '✓' : idx + 1}
                        </div>
                        <span
                          style={{
                            fontSize: '14px',
                            fontWeight: step.done ? '500' : '400',
                            color: step.done ? '#374151' : '#9ca3af',
                          }}
                        >
                          {step.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Divider />

                  <div>
                    <p
                      style={{
                        fontSize: '13px',
                        fontWeight: '600',
                        color: '#374151',
                        marginBottom: '8px',
                      }}
                    >
                      Recent Activity
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {activity.map((a, idx) => (
                        <div
                          key={idx}
                          style={{
                            fontSize: '13px',
                            color: '#6b7280',
                            padding: '6px 8px',
                            background: '#f9fafb',
                            borderRadius: '6px',
                          }}
                        >
                          {a}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>

              {/* Right - Filters */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Card title="Filters" subtitle="Refine task views" fullWidth>
                  <Input label="Filter by status" placeholder="Select..." />
                  <Input label="Assignee" placeholder="Select..." />
                  <Input label="Priority" placeholder="Select..." />
                  <Button variant="secondary" fullWidth>
                    Apply Filters
                  </Button>
                </Card>

                <Card title="Quick Actions" fullWidth>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {['Mark as Complete', 'Reassign Task', 'Add Subtask'].map((a) => (
                      <Button key={a} variant="outline" fullWidth startIcon="→">
                        {a}
                      </Button>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function NavItem({ label, active, onClick }) {
  const base = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '8px 12px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    width: '100%',
    textAlign: 'left',
    color: active ? '#111827' : '#6b7280',
    background: active ? '#f3f4f6' : 'transparent',
    transition: 'background 120ms ease',
    fontFamily: 'inherit',
  }

  return (
    <button style={base} onClick={onClick}>
      <span style={{ fontSize: '16px', width: '20px' }}>{active ? '■' : '○'}</span>
      {label}
    </button>
  )
}
