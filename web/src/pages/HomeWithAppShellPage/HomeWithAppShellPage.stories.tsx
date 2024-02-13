import type { Meta, StoryObj } from '@storybook/react'

import HomeWithAppShellPage from './HomeWithAppShellPage'

const meta: Meta<typeof HomeWithAppShellPage> = {
  component: HomeWithAppShellPage,
}

export default meta

type Story = StoryObj<typeof HomeWithAppShellPage>

export const Primary: Story = {}
