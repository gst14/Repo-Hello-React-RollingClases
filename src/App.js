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
    {
      clasesGrabadas.map( clase => {
        return <ClaseGrabacion key={clase.nro} nro={clase.nro} tema={clase.tema} fecha={clase.fecha}/>
      })
    }  
    </>
  )  // jsx
}
