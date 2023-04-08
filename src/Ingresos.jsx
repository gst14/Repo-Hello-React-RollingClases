import React, { useState } from "react";
import { Card, CardBody, Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import axios from "axios";

export const Ingresos = () => {
  const [ingresos, setIngresos] = useState([]);
  const BASE_URL = "http://localhost:3000";
  const obtenerTotalIngresos = () => {
    let total = 0
    ingresos.forEach(ingreso => {
      total += ingreso.monto
    })
    return total
  }

  useEffect(() => {
    axios.get(`${BASE_URL}/ingresos`)
      .then((response) => {
        setIngresos(response.data)
      }
      )
  }, [])

    return (
    <>
      <Heading>Ingresos - ${obtenerTotalIngresos()}</Heading>
    {
      ingresos.map( (ingreso) => {
        return (  
          <Card key={ingreso.id} marginBottom={3}>
            <CardBody>
              <Text>${ingreso.monto} - {ingreso.detalle}</Text>
            </CardBody>
          </Card>
        )
      })
    }
    </>
  );
};
