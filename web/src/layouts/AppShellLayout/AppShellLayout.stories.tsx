import type { Meta, StoryObj } from '@storybook/react'

import AppShellLayout from './AppShellLayout'

const meta: Meta<typeof AppShellLayout> = {
  component: AppShellLayout,
}

export default meta

type Story = StoryObj<typeof AppShellLayout>

export const Primary: Story = {}
