import React from 'react'

export function Card({
  children,
  title,
  subtitle,
  actions,
  padding = '24px',
  radius = '12px',
  shadow = false,
  fullWidth = true,
  style = {},
}) {
  const cardStyles = {
    background: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: radius,
    padding,
    width: fullWidth ? '100%' : 'auto',
    boxShadow: shadow ? '0 4px 6px -1px rgba(0,0,0,0.05)' : 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    ...style,
  }

  return (
    <div style={cardStyles}>
      {(title || subtitle || actions) && (
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
          <div>
            {title && (
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', lineHeight: '24px', margin: 0 }}>
                {title}
              </h3>
            )}
            {subtitle && (
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '20px', margin: 0, marginTop: '2px' }}>
                {subtitle}
              </p>
            )}
          </div>
          {actions && <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>{actions}</div>}
        </div>
      )}
      {children}
    </div>
  )
}

export function Badge({ children, variant = 'default', size = 'medium' }) {
  const variantStyles = {
    purple: { background: '#f5f3ff', color: '#7c3aed', border: '1px solid #ede9fe' },
    blue: { background: '#eff6ff', color: '#2563eb', border: '1px solid #dbeafe' },
    green: { background: '#ecfdf5', color: '#059669', border: '1px solid #d1fae5' },
    red: { background: '#fef2f2', color: '#dc2626', border: '1px solid #fee2e2' },
    gray: { background: '#f3f4f6', color: '#4b5563', border: '1px solid #e5e7eb' },
    default: { background: '#f3f4f6', color: '#374151', border: '1px solid #e5e7eb' },
  }

  const sizeStyles = {
    small: { padding: '2px 8px', fontSize: '12px', lineHeight: '16px' },
    medium: { padding: '4px 10px', fontSize: '13px', lineHeight: '18px' },
    large: { padding: '4px 12px', fontSize: '14px', lineHeight: '20px' },
  }

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        borderRadius: '6px',
        fontWeight: '500',
        whiteSpace: 'nowrap',
        ...sizeStyles[size],
        ...variantStyles[variant],
      }}
    >
      {children}
    </span>
  )
}

export function Divider({ margin = '16px 0' }) {
  return (
    <div
      style={{
        height: '1px',
        background: '#e5e7eb',
        margin,
      }}
    />
  )
}
