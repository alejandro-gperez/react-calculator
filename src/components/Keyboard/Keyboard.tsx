import '../../styles/keyboard.css'

import Button from '../Button'

import type { KeyboardProps } from './Keyboard.types'

function Keyboard({ onButtonPress }: KeyboardProps) {
  return (
    <div className="keyboard">
      <Button label="7" onClick={() => onButtonPress('7')} />
      <Button label="8" onClick={() => onButtonPress('8')} />
      <Button label="9" onClick={() => onButtonPress('9')} />

      <Button
        label="+"
        variant="operator"
        onClick={() => onButtonPress('+')}
      />

      <Button label="4" onClick={() => onButtonPress('4')} />
      <Button label="5" onClick={() => onButtonPress('5')} />
      <Button label="6" onClick={() => onButtonPress('6')} />

      <Button
        label="-"
        variant="operator"
        onClick={() => onButtonPress('-')}
      />

      <Button label="1" onClick={() => onButtonPress('1')} />
      <Button label="2" onClick={() => onButtonPress('2')} />
      <Button label="3" onClick={() => onButtonPress('3')} />

      <Button
        label="×"
        variant="operator"
        onClick={() => onButtonPress('*')}
      />

      <Button label="0" onClick={() => onButtonPress('0')} />

      <Button
        label="C"
        variant="clear"
        onClick={() => onButtonPress('C')}
      />

      <Button
        label="="
        variant="equals"
        onClick={() => onButtonPress('=')}
      />

      <Button
        label="÷"
        variant="operator"
        onClick={() => onButtonPress('/')}
      />
    </div>
  )
}

export default Keyboard