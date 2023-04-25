import {
  Box,
  Divider,
  Flex,
  Heading,
  Menu,
  MenuButton,
  StackDivider,
  MenuItem,
  MenuList,
  MenuGroup,
  MenuDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Button, Stack } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { SettingsIcon } from '@chakra-ui/icons'

export const SideMenu = () => {
  const navigate = useNavigate();

  const closeSession = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

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
          <NavLink className={({isActive})=> isActive? "active" : ""} to="">
            <Text>Market Place</Text>
          </NavLink>
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            <NavLink className={({isActive})=> isActive? "active" : ""} to="">
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
            <NavLink className={({isActive})=> isActive? "active" : ""} to="productos">
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
            <NavLink className={({isActive})=> isActive? "active" : ""} to="ventas">
              Ventas
            </NavLink>
          </Heading>
          <Text pt="2" fontSize="sm">
            Tus ventas
          </Text>
        </Box>
        <Divider />
        <Box>
          <Menu>
            <MenuButton as={Button} className="border w-100" variant="outline">
            <div className="d-flex align-items-center w-100 gap-3"><SettingsIcon /> <span>Perfil</span> </div>
            </MenuButton>
            <MenuList>
              <MenuGroup title="Sesion">
                <MenuItem onClick={closeSession}>Cerrar Sesión</MenuItem>
                <MenuItem onClick={()=> navigate("config")}>Configuración</MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Soporte">
                <MenuItem onClick={()=> navigate("docs")}>Documentación</MenuItem>
                <MenuItem onClick={()=> navigate("comunidad")}>Comunidad</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Box>
      </Stack>
    </Flex>
  );
};
