import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import CanvasTask from './pages/CanvasTask'
import FormTask from './pages/FormTask'

function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-6 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Task Screens</h1>
        <p className="text-gray-600">Two screens built with Next.js + Tailwind CSS</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          <NavLink
            to="/canvas-task"
            className="block p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all text-left"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Canvas Task</h2>
            <p className="text-gray-600 text-sm">Dark mode dashboard with 4 service cards in 2x2 grid</p>
          </NavLink>

          <NavLink
            to="/form-task"
            className="block p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all text-left"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Form Task</h2>
            <p className="text-gray-600 text-sm">Light mode form with sidebar and indicator list</p>
          </NavLink>
        </div>
      </div>
    </main>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/canvas-task" element={<CanvasTask />} />
      <Route path="/form-task" element={<FormTask />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}
