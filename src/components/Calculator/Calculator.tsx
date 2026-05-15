import '../../styles/calculator.css'

import Display from '../Display'
import Keyboard from '../Keyboard'

import useCalculator from '../../hooks/useCalculator'

function Calculator() {
  const {
    display,
    handleButtonPress,
  } = useCalculator()

  return (
    <div className="calculator">
      <Display value={display} />

      <Keyboard
        onButtonPress={handleButtonPress}
      />
      <p className="calculator-copyright">
        © Alejandro Pérez
      </p>
    </div>
  )
}

export default Calculator