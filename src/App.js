// Functional component O Componente basado en funcion

import { ClaseGrabacion } from "./ClaseGrabacion";
const clasesGrabadas = [
  {nro: 1, tema: "HTML",fecha:"01/10/22"},
  {nro: 2, tema: "Flexbox",fecha:"06/11/22"},
  {nro: 3, tema: "Array method",fecha:"03/02/23"},
  {nro: 4, tema: "Promesas",fecha:"20/02/23"},
]
// PROPS => Properties
export function App(props) {
  return (
    <>
    <h1>Hola {props.nombre}</h1>
    <p>Hoy es {props.fecha}</p>
    <ClaseGrabacion nro={2} fecha="14/03/23" tema="React Hooks" />
    </>
  )  // jsx
}
