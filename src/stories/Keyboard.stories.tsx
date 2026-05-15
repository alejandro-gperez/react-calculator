import type { Meta, StoryObj } from '@storybook/react-vite'

import Keyboard from '../components/Keyboard'

const meta: Meta<typeof Keyboard> = {
  title: 'Components/Keyboard',
  component: Keyboard,
}

export default meta

type Story = StoryObj<typeof Keyboard>

export const Default: Story = {
  args: {
    onButtonPress: () => {},
  },
}