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
import { NavLink } from "react-router-dom";

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
          <NavLink ativeclassname="active" to="/">
            <Text>Market Place</Text>
          </NavLink>
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            <NavLink ativeclassname="active" to="/">
              <Text>Inicio</Text>
            </NavLink>
          </Heading>
          <Text pt="2" fontSize="sm">
            Resumen
          </Text>
        </Box>
        <Divider />
        <Box>
          <Heading size="xs" textTransform="uppercase">
            <NavLink ativeclassname="active" to="/productos">
              Productos
            </NavLink>
          </Heading>
          <Text pt="2" fontSize="sm">
            Tus productos
          </Text>
        </Box>
        <Divider />
        <Box>
          <Heading size="xs" textTransform="uppercase">
            <NavLink ativeclassname="active" to="/ventas">
              Ventas
            </NavLink>
          </Heading>
          <Text pt="2" fontSize="sm">
            Tus ventas
          </Text>
        </Box>
      </Stack>
    </Flex>
  );
};
