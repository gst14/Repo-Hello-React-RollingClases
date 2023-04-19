import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { SideMenu } from '../components/SideMenu'

export const HomePage = () => {
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
