import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { tokenIsValid } from '../utils/tokenIsValid'

export const LoginPage = () => {

  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const submit = (data) => {
    axios.post('/usuarios/login', data)
      .then(res => {
        let value = res["data"]["token"]
        localStorage.setItem('token', value)
        navigate('/inicio')
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    if(tokenIsValid()){
      navigate('/')
    }
  })

  return (
    <div className="container-fluid">
      <div className="row d-grid align-items-center vh-100">
        <div className="col-12 col-md-4 offset-md-4">
          <h2 className='text-center'>Login</h2>
          <form onSubmit={handleSubmit(submit)}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="email" name="email" {...register("email",{ required: true })} />
              {errors?.email && <span className="text-danger">Este campo es requerido</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="password" name="password" {...register("password",{ required: true , pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/})} />
              {errors?.password && <span className="text-danger">Este campo es requerido</span>}
              {errors?.password && errors.password.type === "pattern" && <span className="text-danger">La contraseña debe tener al menos 6 caracteres, una mayuscula y un numero</span>}
            </div>
            <div className="mb-3 w-100 d-flex flex-column gap-2 justify-content-center align-items-center">
              <button type="submit" className="btn btn-primary w-50">
                Login
              </button>
              <Link to={'/registro'}>No tengo cuenta</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
