import styled from 'styled-components'
import { lazy, Suspense } from 'react'
import { Route } from 'wouter'
import { Navbar } from './components/Navbar'

const TopStories = lazy(() => import('./pages/TopStories'))
const Article = lazy(() => import('./pages/Article'))

const AppContainer = styled.main`
padding:10px 30px;
background: rgb(246, 246, 239)
`

export function App () {
  return (
    <>
      <Navbar />
      <AppContainer>
        <Suspense fallback={null}>
          <Route path='/' component={TopStories} />
          <Route path='/article/:id' component={Article} />
        </Suspense>
      </AppContainer>
    </>
  )
}
