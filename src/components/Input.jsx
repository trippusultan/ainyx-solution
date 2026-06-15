import React, { forwardRef } from 'react'

export const Input = forwardRef(function Input({
  label,
  placeholder = '',
  value,
  onChange,
  type = 'text',
  disabled = false,
  error = false,
  helperText,
  startIcon,
  endIcon,
  fullWidth = true,
  multiline = false,
  rows = 4,
}, ref) {
  const inputStyles = {
    width: fullWidth ? '100%' : 'auto',
    padding: '8px 12px',
    border: `1px solid ${error ? '#ef4444' : '#d1d5db'}`,
    borderRadius: '8px',
    fontSize: '14px',
    lineHeight: '20px',
    background: disabled ? '#f9fafb' : '#ffffff',
    color: '#111827',
    outline: 'none',
    fontFamily: 'inherit',
    transition: 'border-color 150ms ease, box-shadow 150ms ease',
  }

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    width: fullWidth ? '100%' : 'auto',
  }

  const labelStyles = {
    fontSize: '13px',
    fontWeight: '500',
    color: '#374151',
    lineHeight: '18px',
  }

  const helperStyles = {
    fontSize: '12px',
    color: error ? '#ef4444' : '#6b7280',
    lineHeight: '16px',
  }

  return (
    <div style={containerStyles}>
      {label && <label style={labelStyles}>{label}</label>}
      <div style={{ position: 'relative' }}>
        {startIcon && (
          <span
            style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#9ca3af',
              display: 'flex',
              pointerEvents: 'none',
              fontSize: '16px',
            }}
          >
            {startIcon}
          </span>
        )}
        {multiline ? (
          <textarea
            ref={ref}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            rows={rows}
            style={{
              ...inputStyles,
              padding: multiline && startIcon ? '24px 12px 8px 12px' : undefined,
              resize: 'vertical',
              minHeight: '80px',
            }}
          />
        ) : (
          <input
            ref={ref}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            style={{
              ...inputStyles,
              paddingLeft: startIcon ? '36px' : '12px',
              paddingRight: endIcon ? '36px' : '12px',
            }}
          />
        )}
        {endIcon && (
          <span
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#9ca3af',
              display: 'flex',
              pointerEvents: 'none',
              fontSize: '16px',
            }}
          >
            {endIcon}
          </span>
        )}
      </div>
      {helperText && <span style={helperStyles}>{helperText}</span>}
    </div>
  )
})

export const Select = forwardRef(function Select(
  { label, options = [], value, onChange, placeholder = 'Select...', disabled = false, error = false, helperText, fullWidth = true },
  ref
) {
  const selectStyles = {
    width: fullWidth ? '100%' : 'auto',
    padding: '8px 36px 8px 12px',
    border: `1px solid ${error ? '#ef4444' : '#d1d5db'}`,
    borderRadius: '8px',
    fontSize: '14px',
    lineHeight: '20px',
    background: disabled ? '#f9fafb' : '#ffffff',
    color: value ? '#111827' : '#9ca3af',
    outline: 'none',
    fontFamily: 'inherit',
    appearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%239CA3AF' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 12px center',
    cursor: 'pointer',
  }

  const containerStyles = { display: 'flex', flexDirection: 'column', gap: '6px', width: fullWidth ? '100%' : 'auto' }
  const labelStyles = { fontSize: '13px', fontWeight: '500', color: '#374151', lineHeight: '18px' }
  const helperStyles = { fontSize: '12px', color: error ? '#ef4444' : '#6b7280', lineHeight: '16px' }

  return (
    <div style={containerStyles}>
      {label && <label style={labelStyles}>{label}</label>}
      <div style={{ position: 'relative' }}>
        <select ref={ref} value={value} onChange={onChange} disabled={disabled} style={selectStyles}>
          <option value="" disabled>{placeholder}</option>
          {options.map((opt) => (
            <option key={typeof opt === 'string' ? opt : opt.value} value={typeof opt === 'string' ? opt : opt.value}>
              {typeof opt === 'string' ? opt : opt.label}
            </option>
          ))}
        </select>
      </div>
      {helperText && <span style={helperStyles}>{helperText}</span>}
    </div>
  )
})
