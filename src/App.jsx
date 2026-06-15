import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import CanvasTask from './pages/CanvasTask'
import FormTask from './pages/FormTask'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/canvas-task" element={<CanvasTask />} />
        <Route path="/form-task" element={<FormTask />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

function Home() {
  const pageStyle = {
    minHeight: '100vh',
    background: '#f5f5f7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
  }

  const cardStyle = {
    background: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '16px',
    padding: '40px',
    maxWidth: '480px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
  }

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <div
          style={{
            width: '44px',
            height: '44px',
            background: '#2563eb',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: '700',
            fontSize: '18px',
            margin: '0 auto',
          }}
        >
          A
        </div>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '22px', fontWeight: '700', color: '#111827', margin: 0 }}>Ainyx Solution</h1>
          <p style={{ fontSize: '14px', color: '#6b7280', margin: 0, marginTop: '6px', lineHeight: '20px' }}>
            Product UI/UX Intern Task
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <NavLink
            to="/canvas-task"
            style={({ isActive }) => ({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 16px',
              borderRadius: '10px',
              background: isActive ? '#eff6ff' : '#ffffff',
              border: '1px solid',
              borderColor: isActive ? '#2563eb' : '#e5e7eb',
              color: isActive ? '#2563eb' : '#374151',
              fontSize: '14px',
              fontWeight: '500',
              textDecoration: 'none',
              transition: 'all 120ms ease',
            })}
          >
            <span style={{ fontSize: '18px' }}>○</span>
            Canvas Task
          </NavLink>
          <NavLink
            to="/form-task"
            style={({ isActive }) => ({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 16px',
              borderRadius: '10px',
              background: isActive ? '#eff6ff' : '#ffffff',
              border: '1px solid',
              borderColor: isActive ? '#2563eb' : '#e5e7eb',
              color: isActive ? '#2563eb' : '#374151',
              fontSize: '14px',
              fontWeight: '500',
              textDecoration: 'none',
              transition: 'all 120ms ease',
            })}
          >
            <span style={{ fontSize: '18px' }}>□</span>
            Form Task
          </NavLink>
        </div>
        <p style={{ fontSize: '12px', color: '#9ca3af', textAlign: 'center' }}>
          Figma recreation source of truth — static mocks in the task brief.
        </p>
      </div>
    </div>
  )
}
