import type { Meta, StoryObj } from '@storybook/react-vite'

import Display from '../components/Display'

const meta: Meta<typeof Display> = {
  title: 'Components/Display',
  component: Display,
}

export default meta

type Story = StoryObj<typeof Display>

export const Empty: Story = {
  args: {
    value: '0',
  },
}

export const NumberDisplay: Story = {
  args: {
    value: '123456789',
  },
}

export const ErrorDisplay: Story = {
  args: {
    value: 'ERROR',
  },
}