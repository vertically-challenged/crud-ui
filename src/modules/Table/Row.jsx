import React, { useState } from 'react'
import Buttons from './Buttons'
import Cells from './Cells'

export default function Row({record, setUpdate}) {
  const [row, setRow] = useState(record)
  return (
    <tr>
      <Buttons record={record} setUpdate={setUpdate} row={row} setRow={setRow}/>
      <Cells record={record} row={row} setRow={setRow} />
    </tr>
  )
}
