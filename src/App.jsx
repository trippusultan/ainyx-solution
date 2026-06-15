import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import CanvasTask from './pages/CanvasTask'
import FormTask from './pages/FormTask'

export default function App() {
  return (
    <Routes>
      <Route path="/canvas-task" element={<CanvasTask />} />
      <Route path="/form-task" element={<FormTask />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px) 0 0 / 24px 24px, #0b0c10',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <div
        style={{
          background: '#fff',
          border: '1px solid #e5e7eb',
          borderRadius: '16px',
          padding: '32px',
          maxWidth: '460px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          boxShadow: '0 20px 25px -5px rgba(0,0,0,0.08)',
        }}
      >
        <div style={{ width: '40px', height: '40px', background: '#111827', borderRadius: '10px', display: 'grid', placeItems: 'center', color: '#fff', fontWeight: '800', fontSize: '16px', margin: '0 auto' }}>A</div>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '20px', fontWeight: '700', color: '#111827', margin: 0 }}>Ainyx Solution</h1>
          <p style={{ fontSize: '14px', color: '#6b7280', margin: 0, marginTop: '6px' }}>Product UI/UX Intern Task</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <NavLink to="/canvas-task" style={({ isActive }) => ({ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 14px', borderRadius: '10px', background: isActive ? '#eff6ff' : '#fff', border: '1px solid', borderColor: isActive ? '#2563eb' : '#e5e7eb', color: isActive ? '#2563eb' : '#374151', fontSize: '14px', fontWeight: '500', textDecoration: 'none' })}>Canvas Task</NavLink>
          <NavLink to="/form-task" style={({ isActive }) => ({ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 14px', borderRadius: '10px', background: isActive ? '#eff6ff' : '#fff', border: '1px solid', borderColor: isActive ? '#2563eb' : '#e5e7eb', color: isActive ? '#2563eb' : '#374151', fontSize: '14px', fontWeight: '500', textDecoration: 'none' })}>Form Task</NavLink>
        </div>
      </div>
    </div>
  )
}
