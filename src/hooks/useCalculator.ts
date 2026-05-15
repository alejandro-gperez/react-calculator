import { useState } from 'react'

const MAX_DISPLAY_LENGTH = 9
const MAX_VALUE = 999999999

function formatResult(value: number) {
  if (value < 0 || value > MAX_VALUE) {
    return 'ERROR'
  }

  const formatted = value.toString().slice(
  0,
  MAX_DISPLAY_LENGTH,
)

  if (formatted.length > MAX_DISPLAY_LENGTH) {
    return 'ERROR'
  }

  return formatted
}

function calculate(
  previous: number,
  current: number,
  operation: string,
) {
  switch (operation) {
    case '+':
      return previous + current

    case '-':
      return previous - current

    case '*':
      return previous * current

    case '/':
      return current === 0
        ? Infinity
        : previous / current
    case '%':
      return previous % current  
        

    default:
      return current
  }
}

function useCalculator() {
  const [display, setDisplay] = useState('0')

  const [previousValue, setPreviousValue] =
    useState<number | null>(null)

  const [operation, setOperation] =
    useState<string | null>(null)

  const [waitingForNextValue, setWaitingForNextValue] =
    useState(false)

  function handleNumber(value: string) {
    if (display === 'ERROR') {
      return
    }

    if (waitingForNextValue) {
      setDisplay(value)
      setWaitingForNextValue(false)

      return
    }

    if (display.length >= MAX_DISPLAY_LENGTH) {
      return
    }

    if (display === '0') {
      setDisplay(value)

      return
    }

    setDisplay((previous) => previous + value)
  }

  function handleClear() {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setWaitingForNextValue(false)
  }

  function handleOperation(nextOperation: string) {
    if (display === 'ERROR') {
      return
    }

    const currentValue = Number(display)

    if (previousValue === null) {
      setPreviousValue(currentValue)
    } else if (operation) {
      const result = calculate(
        previousValue,
        currentValue,
        operation,
      )

      const formattedResult = formatResult(result)

      setDisplay(formattedResult)

      if (formattedResult === 'ERROR') {
        setPreviousValue(null)
        setOperation(null)
        setWaitingForNextValue(false)

        return
      }

      setPreviousValue(Number(formattedResult))
    }

    setOperation(nextOperation)
    setWaitingForNextValue(true)
  }

  function handleEquals() {
    if (
      operation === null ||
      previousValue === null ||
      display === 'ERROR'
    ) {
      return
    }

    const currentValue = Number(display)

    const result = calculate(
      previousValue,
      currentValue,
      operation,
    )

    const formattedResult = formatResult(result)

    setDisplay(formattedResult)

    setPreviousValue(null)
    setOperation(null)
    setWaitingForNextValue(false)
  }

  function handleButtonPress(value: string) {
    if (!Number.isNaN(Number(value))) {
      handleNumber(value)

      return
    }

    if (value === 'C') {
      handleClear()

      return
    }

    if (value === '=') {
      handleEquals()

      return
    }

    if (value === '.') {
        handleDecimal()

        return
    }

    handleOperation(value)
  }

  return {
    display,
    handleButtonPress,
  }

  function handleDecimal() {
  if (display === 'ERROR') {
    return
  }

  if (waitingForNextValue) {
    setDisplay('0.')
    setWaitingForNextValue(false)

    return
  }

  if (display.includes('.')) {
    return
  }

  if (display.length >= MAX_DISPLAY_LENGTH) {
    return
  }

  setDisplay((previous) => previous + '.')
    }
}

export default useCalculator