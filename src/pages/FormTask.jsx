import React, { useState } from 'react'
import { Card, Badge, Button, Input, Select } from '../components'

export default function FormTask() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    role: '',
    department: '',
    experience: '',
    startDate: '',
    skills: '',
    coverLetter: '',
  })

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Form submitted — check the browser console for values.')
    console.log(form)
  }

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
          <span
            style={{
              fontSize: '13px',
              color: '#6b7280',
              background: '#f3f4f6',
              border: '1px solid #e5e7eb',
              padding: '4px 10px',
              borderRadius: '6px',
            }}
          >
            2 of 5 sections completed
          </span>
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
          <NavItem label="Dashboard" />
          <NavItem label="Form Task" active />
          <NavItem label="Submissions" />
          <NavItem label="Reports" />
          <div style={{ flex: 1 }} />
          <NavItem label="Help" />
        </aside>

        {/* Main content */}
        <main style={{ flex: 1, overflow: 'auto', padding: '24px' }}>
          <div
            style={{
              maxWidth: '880px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            <div>
              <h1 style={{ fontSize: '22px', fontWeight: '700', color: '#111827', margin: 0 }}>Form Task</h1>
              <p style={{ fontSize: '14px', color: '#6b7280', margin: 0, marginTop: '4px' }}>
                Complete the fields below accurately. Required fields are marked with *.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              <Card title="Personal Information" subtitle="Basic details about the candidate" fullWidth>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <Input label="Full Name *" placeholder="e.g. Ganesh Jayachandran" value={form.name} onChange={update('name')} />
                  <Input label="Email Address *" placeholder="name@company.com" type="email" value={form.email} onChange={update('email')} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <Select
                    label="Role *"
                    value={form.role}
                    onChange={update('role')}
                    placeholder="Select role"
                    options={[
                      { value: 'product-designer', label: 'Product Designer' },
                      { value: 'ux-designer', label: 'UX Designer' },
                      { value: 'ui-designer', label: 'UI Designer' },
                      { value: 'visual-designer', label: 'Visual Designer' },
                    ]}
                  />
                  <Select
                    label="Department *"
                    value={form.department}
                    onChange={update('department')}
                    placeholder="Select department"
                    options={[
                      { value: 'engineering', label: 'Engineering' },
                      { value: 'design', label: 'Design' },
                      { value: 'product', label: 'Product' },
                      { value: 'marketing', label: 'Marketing' },
                    ]}
                  />
                </div>
              </Card>

              <Card title="Experience & Skills" subtitle="Your professional background" fullWidth>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <Input label="Years of Experience *" placeholder="e.g. 2 years" value={form.experience} onChange={update('experience')} />
                  <Input label="Preferred Start Date" placeholder="YYYY-MM-DD" value={form.startDate} onChange={update('startDate')} />
                </div>
                <Input
                  label="Key Skills (comma separated) *"
                  placeholder="e.g. Figma, React, Design Systems"
                  value={form.skills}
                  onChange={update('skills')}
                  helperText="Separate multiple skills with commas."
                />
              </Card>

              <Card title="Additional Information" subtitle="Optional but recommended" fullWidth>
                <Input
                  label="Cover Letter / Notes"
                  multiline
                  rows={5}
                  placeholder="Tell us why you're a great fit..."
                  value={form.coverLetter}
                  onChange={update('coverLetter')}
                />
              </Card>

              <Card title="Review & Submit" fullWidth>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gap: '16px',
                    fontSize: '13px',
                    color: '#6b7280',
                  }}
                >
                  <ReviewRow label="Name" value={form.name} />
                  <ReviewRow label="Email" value={form.email} />
                  <ReviewRow label="Role" value={form.role ? form.role.replace('-', ' ').replace(/\b\w/g, (c) => c.toUpperCase()) : '—'} />
                  <ReviewRow label="Department" value={form.department ? form.department.charAt(0).toUpperCase() + form.department.slice(1) : '—'} />
                  <ReviewRow label="Experience" value={form.experience || '—'} />
                  <ReviewRow label="Start Date" value={form.startDate || '—'} />
                </div>
              </Card>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Button variant="ghost" type="button">
                  ← Back to Tasks
                </Button>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <Button variant="outline" type="button">
                    Save Draft
                  </Button>
                  <Button variant="primary" type="submit" startIcon="→">
                    Submit Form
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}

function ReviewRow({ label, value }) {
  return (
    <div>
      <p style={{ fontSize: '12px', color: '#9ca3af', margin: '0 0 2px 0' }}>{label}</p>
      <p style={{ fontSize: '14px', fontWeight: '500', color: '#111827', margin: 0 }}>{value}</p>
    </div>
  )
}

function NavItem({ label, active }) {
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
    <button style={base}>
      <span style={{ fontSize: '16px', width: '20px', textAlign: 'center' }}>{active ? '■' : '○'}</span>
      {label}
    </button>
  )
}
