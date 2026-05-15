import { fireEvent, render, screen } from '@testing-library/react'

import Calculator from '../components/Calculator'

describe('Calculator', () => {
  it('concatenates numbers correctly', () => {
    render(<Calculator />)

    fireEvent.click(screen.getByLabelText('button-1'))
    fireEvent.click(screen.getByLabelText('button-2'))
    fireEvent.click(screen.getByLabelText('button-3'))

    expect(
      screen.getByLabelText('calculator-display'),
    ).toHaveTextContent('123')
  })

  it('limits display to 9 characters', () => {
    render(<Calculator />)

    const nine = screen.getByLabelText('button-9')

    for (let i = 0; i < 10; i += 1) {
      fireEvent.click(nine)
    }

    expect(
      screen.getByLabelText('calculator-display'),
    ).toHaveTextContent('999999999')
  })

  it('performs addition correctly', () => {
    render(<Calculator />)

    fireEvent.click(screen.getByLabelText('button-8'))

    fireEvent.click(screen.getByLabelText('button-+'))

    fireEvent.click(screen.getByLabelText('button-2'))

    fireEvent.click(screen.getByLabelText('button-='))

    expect(
      screen.getByLabelText('calculator-display'),
    ).toHaveTextContent('10')
  })

  it('performs chained operations correctly', () => {
    render(<Calculator />)

    fireEvent.click(screen.getByLabelText('button-2'))

    fireEvent.click(screen.getByLabelText('button-+'))

    fireEvent.click(screen.getByLabelText('button-2'))

    fireEvent.click(screen.getByLabelText('button-+'))

    fireEvent.click(screen.getByLabelText('button-2'))

    fireEvent.click(screen.getByLabelText('button-='))

    expect(
      screen.getByLabelText('calculator-display'),
    ).toHaveTextContent('6')
  })

  it('shows ERROR on negative results', () => {
    render(<Calculator />)

    fireEvent.click(screen.getByLabelText('button-2'))

    fireEvent.click(screen.getByLabelText('button--'))

    fireEvent.click(screen.getByLabelText('button-5'))

    fireEvent.click(screen.getByLabelText('button-='))

    expect(
      screen.getByLabelText('calculator-display'),
    ).toHaveTextContent('ERROR')
  })

  it('shows ERROR on overflow', () => {
    render(<Calculator />)

    fireEvent.click(screen.getByLabelText('button-9'))

    for (let i = 0; i < 8; i += 1) {
      fireEvent.click(
        screen.getByLabelText('button-0'),
      )
    }

    fireEvent.click(screen.getByLabelText('button-×'))

    fireEvent.click(screen.getByLabelText('button-9'))

    fireEvent.click(screen.getByLabelText('button-='))

    expect(
      screen.getByLabelText('calculator-display'),
    ).toHaveTextContent('ERROR')
  })

  it('clears display correctly', () => {
    render(<Calculator />)

    fireEvent.click(screen.getByLabelText('button-7'))

    fireEvent.click(screen.getByLabelText('button-C'))

    expect(
      screen.getByLabelText('calculator-display'),
    ).toHaveTextContent('0')
  })

  it('performs division correctly', () => {
    render(<Calculator />)

    fireEvent.click(screen.getByLabelText('button-8'))

    fireEvent.click(screen.getByLabelText('button-÷'))

    fireEvent.click(screen.getByLabelText('button-2'))

    fireEvent.click(screen.getByLabelText('button-='))

    expect(
      screen.getByLabelText('calculator-display'),
    ).toHaveTextContent('4')
  })

  it('supports decimal numbers', () => {
  render(<Calculator />)

  fireEvent.click(screen.getByLabelText('button-1'))

  fireEvent.click(screen.getByLabelText('button-.'))

  fireEvent.click(screen.getByLabelText('button-5'))

  expect(
    screen.getByLabelText('calculator-display'),
  ).toHaveTextContent('1.5')
    })

it('prevents duplicate decimals', () => {
  render(<Calculator />)

  fireEvent.click(screen.getByLabelText('button-1'))

  fireEvent.click(screen.getByLabelText('button-.'))

  fireEvent.click(screen.getByLabelText('button-.'))

  fireEvent.click(screen.getByLabelText('button-5'))

  expect(
    screen.getByLabelText('calculator-display'),
  ).toHaveTextContent('1.5')
    })

it('handles decimal division correctly', () => {
  render(<Calculator />)

  fireEvent.click(screen.getByLabelText('button-2'))

  fireEvent.click(screen.getByLabelText('button-2'))

  fireEvent.click(screen.getByLabelText('button-÷'))

  fireEvent.click(screen.getByLabelText('button-7'))

  fireEvent.click(screen.getByLabelText('button-='))

  expect(
    screen.getByLabelText('calculator-display'),
  ).not.toHaveTextContent('ERROR')
    })

it('performs modulo correctly', () => {
  render(<Calculator />)

  fireEvent.click(screen.getByLabelText('button-1'))

  fireEvent.click(screen.getByLabelText('button-0'))

  fireEvent.click(screen.getByLabelText('button-%'))

  fireEvent.click(screen.getByLabelText('button-3'))

  fireEvent.click(screen.getByLabelText('button-='))

  expect(
    screen.getByLabelText('calculator-display'),
  ).toHaveTextContent('1')
    })

it('toggles negative numbers', () => {
  render(<Calculator />)

  fireEvent.click(screen.getByLabelText('button-5'))

  fireEvent.click(screen.getByLabelText('button-+/-'))

  expect(
    screen.getByLabelText('calculator-display'),
  ).toHaveTextContent('-5')
})

it('toggles negative numbers back to positive', () => {
  render(<Calculator />)

  fireEvent.click(screen.getByLabelText('button-5'))

  fireEvent.click(screen.getByLabelText('button-+/-'))

  fireEvent.click(screen.getByLabelText('button-+/-'))

  expect(
    screen.getByLabelText('calculator-display'),
  ).toHaveTextContent('5')
    })

})