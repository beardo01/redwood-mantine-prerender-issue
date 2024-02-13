import { AppShell, AppShellMain } from '@mantine/core'

type AppShellLayoutProps = {
  children?: React.ReactNode
}

const AppShellLayout = ({ children }: AppShellLayoutProps) => {
  return (
    <AppShell>
      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  )
}

export default AppShellLayout
