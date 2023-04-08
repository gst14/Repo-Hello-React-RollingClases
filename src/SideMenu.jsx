import {
  Box,
  Divider,
  Flex,
  Heading,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Stack } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export const SideMenu = () => {
  return (
    <Flex
      flexDirection={"column"}
      p={5}
      rounded="md"
      boxShadow="xs"
      width={"100%"}
      height={"100%"}
    >
      <Stack divider={<StackDivider />} spacing="4">
        <Box>
          <Text>letsbalance.com</Text>
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            <NavLink activeClassName="active" to="/">
              <Text>Inicio</Text>
            </NavLink>
          </Heading>
          <Text pt="2" fontSize="sm">
            Detalle breve de tu cuenta
          </Text>
        </Box>
        <Divider />
        <Box>
          <Heading size="xs" textTransform="uppercase">
            <NavLink activeClassName="active" to="/transferencias">
              Transferencias
            </NavLink>
          </Heading>
          <Text pt="2" fontSize="sm">
            Realizar / Revisar transferencias
          </Text>
        </Box>
        <Divider />
        <Box>
          <Heading size="xs" textTransform="uppercase">
            <NavLink activeClassName="active" to="/analitics">
              Analitics
            </NavLink>
          </Heading>
          <Text pt="2" fontSize="sm">
            Graficas de tus movimientos
          </Text>
        </Box>
      </Stack>
    </Flex>
  );
};
