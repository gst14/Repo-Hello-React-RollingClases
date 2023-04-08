import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Balance } from "../Balance";

export const TransferenciasSection = () => {
  const [ingresos, setIngresos] = useState([]);
  const [totalIngresos, setTotalIngresos] = useState(0);
  const BASE_URL = "http://localhost:3000";
  const [trasnferenciaValores, setTrasnferenciaValores] = useState({monto: 0, detalle: ""})
  const [mostrarInputsTransferencias, setMostrarInputsTransferencias] =
    useState(false);

  const obtenerTotalIngresos = () => {
    let total = 0;
    ingresos.forEach((ingreso) => {
      total += ingreso.monto;
    });
    return total;
  };

  useEffect(() => {
    axios.get(`${BASE_URL}/ingresos`).then((response) => {
      setIngresos(response.data);
      setTotalIngresos(obtenerTotalIngresos());
    });
  }, []);

  return (
    <>
      <Flex>
        <Box width={"90%"}  height={100} p="4">
          <Balance money={totalIngresos} />
          <Button
            colorScheme="teal"
            size="md"
            onClick={() => {
              setMostrarInputsTransferencias(!mostrarInputsTransferencias);
            }}
          >
            {/* Operador ternario */}
            {!mostrarInputsTransferencias
              ? "Transferir dinero"
              : "Cancelar transferencia"}
          </Button>

          {mostrarInputsTransferencias && (
            <Stack marginTop={4}>
              <InputGroup>
                <InputLeftAddon children="Monto" />
                <Input type="number" value={trasnferenciaValores.monto} onChange={(e)=>{
                    setTrasnferenciaValores({...trasnferenciaValores, monto: Number(e.target.value)})
                }} placeholder="$2000" />
              </InputGroup>
              <InputGroup>
                <InputLeftAddon children="Detalle" />
                <Input type="text" value={trasnferenciaValores.detalle} onChange={(e)=>{
                        setTrasnferenciaValores({...trasnferenciaValores, detalle: e.target.value})
                    }
                } placeholder="Pago de remera" />
              </InputGroup>
              <Button colorScheme="teal" size="md" onClick={()=>{
                    axios.post(`${BASE_URL}/egresos`, trasnferenciaValores)
                    .then(()=>{
                        setMostrarInputsTransferencias(false)
                    })
              }}>
                Enviar
                </Button>
            </Stack>
          )}
        </Box>
      </Flex>
    </>
  );
};
