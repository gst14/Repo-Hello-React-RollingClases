import React from 'react'
import { Balance } from '../Balance'
import { Ingresos } from '../Ingresos'

export const ResumeSection = () => {
  return (
    <>
    <Balance money={1000} />
    <Ingresos />
    </>
  )
}
