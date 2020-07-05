import React from 'react'
import { Box } from './units'

const Layout = ({ Header, LeftPanel, RightPanel, Main, Footer, ...props }) => {
  return (
    <Box>
      <Box>{Header}</Box>
      <Box display="flex">
        <Box width={256}>
          {LeftPanel}
        </Box>
        <Box flex='1 1 auto'>
          {Main}
        </Box>
        <Box width={256}>
          {RightPanel}
        </Box>
      </Box>
      <Box>{Footer}</Box>
    </Box>
  )
}

export default Layout
