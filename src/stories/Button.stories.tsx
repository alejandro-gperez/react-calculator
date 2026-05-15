import type { Meta, StoryObj } from '@storybook/react-vite'

import Button from '../components/Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    label: '7',
    onClick: () => {},
  },
}

export const Operator: Story = {
  args: {
    label: '+',
    variant: 'operator',
    onClick: () => {},
  },
}

export const Equals: Story = {
  args: {
    label: '=',
    variant: 'equals',
    onClick: () => {},
  },
}

export const Clear: Story = {
  args: {
    label: 'C',
    variant: 'clear',
    onClick: () => {},
  },
}