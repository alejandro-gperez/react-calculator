import '../../styles/button.css'

import type { ButtonProps } from './Button.types'

function Button({
  label,
  onClick,
  variant = 'default',
}: ButtonProps) {
  return (
    <button
      aria-label={`button-${label}`}
      className={`calculator-button ${variant}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button