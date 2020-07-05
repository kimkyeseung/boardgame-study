import React from 'react'
import { Box } from './units/Box'

const Layout = ({ Developments, Nobles, Tokens, ...props }) => {
  return (
    <Box display="flex">
      <Box>
        {Developments}
      </Box>
      <Box>
        {Tokens}
      </Box>
      <Box>
        {Nobles}
      </Box>
    </Box>
  )
}

export default Layout
