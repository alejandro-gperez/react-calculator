import '../../styles/calculator.css'

import Display from '../Display'
import Keyboard from '../Keyboard'

function Calculator() {
  return (
    <div className="calculator">
      <Display value="123456789" />

      <Keyboard
        onButtonPress={(value) => console.log(value)}
      />
    </div>
  )
}

export default Calculator