import type { Meta, StoryObj } from '@storybook/react-vite'

import '../../src/styles/calculator.css'

import Display from '../components/Display'
import Keyboard from '../components/Keyboard'

const meta = {
  title: 'Components/Calculator',
} satisfies Meta

export default meta

type Story = StoryObj

function CalculatorPreview(value: string) {
  return (
    <div className="calculator">
      <Display value={value} />

      <Keyboard
        onButtonPress={() => {}}
      />
    </div>
  )
}

export const Default: Story = {
  render: () => CalculatorPreview('123'),
}

export const ZeroState: Story = {
  render: () => CalculatorPreview('0'),
}

export const ErrorState: Story = {
  render: () => CalculatorPreview('ERROR'),
}

export const OverflowPreview: Story = {
  render: () => CalculatorPreview('999999999'),
}