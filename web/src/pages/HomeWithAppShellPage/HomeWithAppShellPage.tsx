import { AppShell, AppShellMain, Title } from '@mantine/core'

import { Metadata } from '@redwoodjs/web'

const HomeWithAppShellPage = () => {
  return (
    <>
      <Metadata title="HomeWithAppShell" description="HomeWithAppShell page" />

      <AppShell>
        <AppShellMain>
          <Title>Hello World</Title>
        </AppShellMain>
      </AppShell>
    </>
  )
}

export default HomeWithAppShellPage
