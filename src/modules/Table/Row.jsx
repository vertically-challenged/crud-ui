import React, { useState } from 'react'
import Button from '../common/Button/Button'
import Cell from './Cell'
import API from '../../API/api'

export default function Row({record, setUpdate}) {
  const [row, setRow] = useState(record)

  const inputOnChangeHandler = (event) => {
    // const newRow = record
    const newRow = {...record, edit: true}
    newRow.data[event.target.name] = event.target.value
    setRow(newRow)
  } 

  const onClickDelete = () => {
    API.deleteRecord(record._id).then(() => {
      setUpdate(true)
    })
  }

  const onClickSave = () => {
    API.saveRecord(record).then(() => {
      setRow({...record, edit: !row.edit})
    })
  }

  const createButtons = () => {
    const buttons = [ 
      <Button onClick={onClickDelete}>Delete record</Button>, 
      <Button onClick={onClickSave}>Save record</Button>,
      <Button onClick={() => {setRow({...row, edit: !row.edit})}}>Edit record</Button>
    ].map((button, index) => {
      if (row.edit && index === 2) return null
      if (!row.edit && index === 1) return null
      return <td key={`button${index}`}>{button}</td>
    })
  
    return buttons
  }

  const createCell = () => {
    const fieldNames = Object.keys(record.data)
  
    const cells = Object.values(record.data).map((cellValue, index) => {
      return (
        <Cell key={index} fieldName={fieldNames[index]} _id={record._id} value={cellValue} inputOnChangeHandler={inputOnChangeHandler} readOnly={!row.edit}/>
      )
    })
    return cells
  }

  return (
    <tr>
      {createButtons()}
      {createCell()}
    </tr>
  )
}
