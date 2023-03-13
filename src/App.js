// Functional component O Componente basado en funcion

import { useState } from "react"

// PROPS => Properties
export function App({tema, fecha}) {

  const COUNTER_DEFAULT = 10
  const [counter, setCounter] = useState(COUNTER_DEFAULT)
  return (
    <>
        <h1>Tema: {tema} - Fecha: {fecha}</h1>
        <h4>Counter APP</h4>
        <h2>Contador: {counter}</h2>
        <button onClick={()=> setCounter( counter + 1 ) }>+1</button>
        <button onClick={ ()=>setCounter( counter - 1 ) }>-1</button>
        <button onClick={ ()=> setCounter(COUNTER_DEFAULT) }>Reset</button>
    </>
  )  // jsx
}
