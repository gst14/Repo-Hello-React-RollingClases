import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Balance } from '../Balance'
import { Ingresos } from '../Ingresos'
import { SideMenu } from '../SideMenu'

export const HomePage = () => {
  return (
    <>
      <Flex>
        <Box p="4">
          <SideMenu/>
        </Box>
        <Box p="4">
          <Outlet />
        </Box>
      </Flex>
    </>
  )
}
