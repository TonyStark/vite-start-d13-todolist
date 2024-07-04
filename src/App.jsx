import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import TodolistLogic from './Components/TodolistLogic';

function App() {
  
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col sm={6}>
        <TodolistLogic />
        </Col>
      </Row>
    </Container>
  )
}

export default App