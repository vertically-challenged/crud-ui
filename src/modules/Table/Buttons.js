import React from 'react';
import Button from '../common/Button/Button'
import API from '../../API/api';

const Buttons = ({record, setUpdate, row, setRow}) => {
  const onClickDelete = (record, setUpdate) => {
    API.deleteRecord(record._id).then(() => {
      setUpdate(true)
    })
  }

  const onClickSave = (record, setRow, row) => {
    API.saveRecord(record).then(() => {
      setRow({...record, edit: !row.edit})
    })
  }

  return (
    <>
      {
        [<Button onClick={() => {onClickDelete(record, setUpdate, row, setRow)}}>Delete record</Button>, 
          <Button onClick={() => {onClickSave(record, setRow, row)}}>Save record</Button>,
          <Button onClick={() => {setRow({...row, edit: !row.edit})}}>Edit record</Button>
        ].map((button, index) => {
          if (row.edit && index === 2) return null
          if (!row.edit && index === 1) return null
          return <td key={`button${index}`}>{button}</td>
        })
      }
    </>
  )
}

export default Buttons;
