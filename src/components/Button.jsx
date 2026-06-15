import React from 'react'

export function Button({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  iconLeft,
  iconRight,
  onClick,
  type = 'button',
}) {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    borderRadius: '8px',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '20px',
    border: '1px solid transparent',
    transition: 'all 150ms ease',
    outline: 'none',
    whiteSpace: 'nowrap',
    fontFamily: 'inherit',
  }

  const sizeStyles = {
    small: { padding: '6px 12px', height: '32px', fontSize: '13px' },
    medium: { padding: '8px 16px', height: '36px' },
    large: { padding: '10px 20px', height: '40px', fontSize: '15px' },
  }

  const variantStyles = {
    primary: {
      background: '#2563eb',
      color: '#ffffff',
      border: '1px solid #2563eb',
    },
    secondary: {
      background: '#ffffff',
      color: '#2563eb',
      border: '1px solid #c7d2fe',
    },
    outline: {
      background: 'transparent',
      color: '#374151',
      border: '1px solid #d1d5db',
    },
    ghost: {
      background: 'transparent',
      color: '#6b7280',
      border: '1px solid transparent',
    },
  }

  const disabledStyles = disabled
    ? { opacity: 0.5, cursor: 'not-allowed', pointerEvents: 'none' }
    : { cursor: 'pointer' }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={{
        ...baseStyles,
        ...sizeStyles[size],
        ...variantStyles[variant],
        ...disabledStyles,
        width: fullWidth ? '100%' : 'auto',
        padding: fullWidth && size === 'medium' ? '8px 16px' : undefined,
      }}
      onMouseEnter={(e) => {
        if (!disabled && variant === 'primary')
          e.currentTarget.style.background = '#1d4ed8'
        if (!disabled && variant === 'secondary')
          e.currentTarget.style.background = '#eff6ff'
        if (!disabled && variant === 'outline')
          e.currentTarget.style.background = '#f9fafb'
      }}
      onMouseLeave={(e) => {
        if (variant === 'primary')
          e.currentTarget.style.background = '#2563eb'
        if (variant === 'secondary')
          e.currentTarget.style.background = '#ffffff'
        if (variant === 'outline')
          e.currentTarget.style.background = 'transparent'
      }}
    >
      {iconLeft && <span style={{ display: 'flex', fontSize: '16px' }}>{iconLeft}</span>}
      {children}
      {iconRight && <span style={{ display: 'flex', fontSize: '16px' }}>{iconRight}</span>}
    </button>
  )
}
