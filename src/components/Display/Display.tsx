import '../../styles/display.css'

import type { DisplayProps } from './Display.types'

function Display({ value }: DisplayProps) {
  return (
    <div
      aria-label="calculator-display"
      className="calculator-display"
    >
      {value}
    </div>
  )
}

export default Display