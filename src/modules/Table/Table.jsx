import React from 'react'
import Row from './Row'
import HeaderRow from './HeaderRow'

const createRow = (records, setUpdate) => {
  const rows = records.map((record) => {
    return (<Row key={record._id} record={record} setUpdate={setUpdate}/>)
  })
  return rows
}

export default function Table({records, setUpdate}) {
  return (
    <table className='table'>
      <tbody>
        <HeaderRow state={records}/>
        {createRow(records, setUpdate)}
      </tbody>
    </table>
  )
}
