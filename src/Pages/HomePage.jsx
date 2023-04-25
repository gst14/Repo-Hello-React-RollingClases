import { Box, Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { SideMenu } from '../components/SideMenu'
import { tokenIsValid } from '../utils/tokenIsValid'

export const HomePage = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (!tokenIsValid()) {
      navigate("/login");
    }
  },[navigate]);
  return (
    <>
      <Flex>
        <Box p="4" width={300} border={1} borderColor="gray.200">
          <SideMenu />
        </Box>
        <Box p="4" flex="1" border={1} borderColor="gray.200" width={300}>
          <Outlet />
        </Box>
      </Flex>
    </>
  )
}
