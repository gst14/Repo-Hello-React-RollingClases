// Functional component O Componente basado en funcion
// import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
// import style from "./App.module.css"
import { Balance } from "./Balance"
import { Egresos } from "./Egresos"
import { Ingresos } from "./Ingresos"
// PROPS => Properties
export function App() {
  return (
    <>
    <Container>
      <Row>
        <Col>
          <Balance/>
        </Col>
      </Row>
      <Row>
        <Col>
        <Ingresos/>
        </Col>
        <Col>
        <Egresos/>
        </Col>
      </Row>
    </Container>
    </>
  )  // jsx
}
