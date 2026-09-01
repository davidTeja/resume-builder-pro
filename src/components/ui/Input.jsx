import { forwardRef, useId } from 'react';

/**
 * Production-grade reusable Input component.
 * Supports:
 * - Stable, unique DOM IDs via React 18 useId()
 * - Ref forwarding for React Hook Form / DOM focus
 * - Accessible error & helper text with aria-invalid and aria-describedby
 * - Native input prop spreading (...props)
 */
const Input = forwardRef(function Input(
  {
    label,
    name,
    type = 'text',
    error,
    helperText,
    required = false,
    id: customId,
    className = '',
    ...props
  },
  ref
) {
  const generatedId = useId();
  const inputId = customId || `${name}-${generatedId}`;
  const errorId = `${inputId}-error`;
  const helperId = `${inputId}-helper`;

  return (
    <div className={`form-control ${error ? 'has-error' : ''} ${className}`}>
      {label && (
        <label htmlFor={inputId} className="form-label">
          {label}
          {required && (
            <span className="required-asterisk" aria-hidden="true">
              {' '}*
            </span>
          )}
        </label>
      )}

      <input
        ref={ref}
        id={inputId}
        name={name}
        type={type}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error ? errorId : helperText ? helperId : undefined
        }
        className="form-input"
        {...props}
      />

      {error && (
        <span id={errorId} className="error-message" role="alert">
          {error}
        </span>
      )}

      {!error && helperText && (
        <span id={helperId} className="helper-text">
          {helperText}
        </span>
      )}
    </div>
  );
});

export default Input;
