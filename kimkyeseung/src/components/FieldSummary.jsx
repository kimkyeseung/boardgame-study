import React from 'react'

const FieldSummary = ({ active, field }) => {
  const { developments, token } = field
  return (
    <div>
      <div>
        <div>development</div>
        <div>white: {developments.white}</div>
        <div>red: {developments.red}</div>
        <div>blue: {developments.blue}</div>
        <div>green: {developments.green}</div>
        <div>black: {developments.black}</div>
      </div>
      <div>
        <div>token</div>
        <div>white: {token.white}</div>
        <div>red: {token.red}</div>
        <div>blue: {token.blue}</div>
        <div>green: {token.green}</div>
        <div>black: {token.black}</div>
      </div>
    </div>
  )
}

export default FieldSummary
