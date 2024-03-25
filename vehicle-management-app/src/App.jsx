import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CarDetail from './CarDetail'
import Menu from './Menu'
import Container from 'react-bootstrap/Container';

function App() {

  return (
    <>
    <Container>
      <Menu></Menu>
      <CarDetail title="Toyota" description="Toyota is an awesome car!"></CarDetail>
      </Container>
    </>
  )
}

export default App
