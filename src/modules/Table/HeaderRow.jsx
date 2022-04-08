import React from 'react'
import mainConfig from '../../mainConfig'

const createHeaderCells = (state) => {
  let Cells = null
  const plug = ''
  const headerNames = [plug, plug, ...mainConfig.fields]
  if (state.length > 0) {
    Cells = headerNames.map((field, index) => {
      return (<th key={index+2}>{field}</th>)
    })
  }
  return Cells
}

export default function HeaderRow({state}) {
  return (
    <tr key={'HeaderRow'}>
      {createHeaderCells(state)}
    </tr>
  )
}
