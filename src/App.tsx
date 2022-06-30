import React from 'react'
import { MainPage } from './components/MainPage/MainPage'
import { Navbar } from './components/Navbar/Navbar'
import { Container } from './styledComponents/Container'

// type Props = {any}

export const App: React.FC = () => {
  return (
    <>
      <Navbar/>
      <Container>
        <MainPage/>
      </Container>
    </>
  )
}
