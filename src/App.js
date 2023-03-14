// Functional component O Componente basado en funcion
import { useState } from "react"
import style from "./App.module.css"
// PROPS => Properties
export function App({tema, fecha}) {
  const [taskList, setTaskList] = useState([])
  const [taskPreview, setTaskPreview] = useState("")
  return (
    <>
        <h1 className={style.title}>Tema: {tema} - Fecha: {fecha}</h1>
        <h2>TODO list (Listado de tarea)</h2>
        <input placeholder="Ingresa tarea" onKeyUp={(e)=>{
          const userInput = e.target.value
          setTaskPreview(userInput) // la entrada de texto del usuario
          if(e.code === "Enter"){
            setTaskList([ ...taskList, userInput])
            setTaskPreview("")
            e.target.value = ""
          }

        }}/>
        <p>Tarea a ingresar: {taskPreview}</p>
        <ul>
          {
            taskList.map( (task,i) =>{
              return <li key={i} className={style.listItem}>{task}</li>
            })
          } 
        </ul>
    </>
  )  // jsx
}
