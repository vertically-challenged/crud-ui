import React from 'react'
import Cell from './Cell'

const Cells = ({record, row, setRow}) => {
  const createCell = (record, row, setRow) => {
    
    const inputOnChangeHandler = (event) => {
      const newRow = {...record, edit: true}
      newRow.data[event.target.name] = event.target.value
      setRow(newRow)
    } 
  
    const fieldNames = Object.keys(record.data)
  
    const cells = Object.values(record.data).map((cellValue, index) => {
      return (
        <Cell key={index} fieldName={fieldNames[index]} _id={record._id} value={cellValue} inputOnChangeHandler={inputOnChangeHandler} readOnly={!row.edit}/>
      )
    })

    return cells
  }

  return (
    <>
      {createCell(record, row, setRow)}
    </>
  )
}

export default Cells;
