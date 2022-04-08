import React from 'react'
import Row from './Row'
import HeaderRow from './HeaderRow'

export default function Table({records, setUpdate}) {

  const createRow = () => {
    const rows = records.map((record) => {
      return (<Row key={record._id} record={record} setUpdate={setUpdate}/>)
    })
    return rows
  }

  return (
    <table className='table'>
      <tbody>
        <HeaderRow state={records}/>
        {createRow()}
      </tbody>
    </table>
  )
}
