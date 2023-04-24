import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export const RegisterPage = () => {

  const { register, handleSubmit,formState: { errors } } = useForm()

  const onSubmit = (data) => {
    if (errors) {
      console.log(errors)
      return
    }
    console.log(data)
  }

  return (
    <div className="container-fluid">
      <div className="row d-grid align-items-center vh-100">
        <div className="col-12 col-md-4 offset-md-4">
          <h2 className='text-center'>Registrate</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <input type="text" className="form-control" id="nombre" name="nombre" {...register("nombre",{ required: true })} />
              {errors?.nombre && <span className="text-danger">Este campo es requerido</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="email" name="email" {...register("email",{ required: true , pattern: /^\S+@\S+$/i})} />
              {errors?.email && <span className="text-danger">Este campo es requerido</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              {/* contrasena con  */}
              <input type="password" className="form-control" id="password" name="password" {...register("password",{ required: true , pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/})} />
              {errors?.password && errors.password.type === "required" && <span className="text-danger">Este campo es requerido</span>}
              {errors?.password && errors.password.type === "pattern" && <span className="text-danger">La contraseña debe tener al menos 6 caracteres, una mayuscula y un numero</span>}
            </div>
            <div className="mb-3 w-100 d-flex flex-column gap-2 justify-content-center align-items-center">
              <button type="submit" className="btn btn-primary w-50">
                Registrarme
              </button>
              <Link to={'/login'}>Ya tengo cuenta</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
