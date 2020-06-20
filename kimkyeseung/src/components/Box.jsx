import styled from 'styled-components'
import { space, color, layout, flexbox } from 'styled-system'

const Box = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 0,
    border: '1px solid',
    padding: '0.1rem'
  },
  space,
  color,
  layout,
  flexbox
)

export default Box