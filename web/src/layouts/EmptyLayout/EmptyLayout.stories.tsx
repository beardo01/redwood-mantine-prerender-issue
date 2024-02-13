import type { Meta, StoryObj } from '@storybook/react'

import EmptyLayout from './EmptyLayout'

const meta: Meta<typeof EmptyLayout> = {
  component: EmptyLayout,
}

export default meta

type Story = StoryObj<typeof EmptyLayout>

export const Primary: Story = {}
