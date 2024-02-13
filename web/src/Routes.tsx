// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import AppShellLayout from './layouts/AppShellLayout/AppShellLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/home-with-app-shell" page={HomeWithAppShellPage} name="homeWithAppShell" prerender />
      <Set wrap={AppShellLayout}>
        <Route path="/home" page={HomePage} name="home" prerender />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
