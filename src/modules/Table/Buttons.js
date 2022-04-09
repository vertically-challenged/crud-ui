import React from 'react';
import Button from '../common/Button/Button'
import API from '../../API/api';

const Buttons = ({record, setUpdate, row, setRow}) => {

  const onClickDeleteHandler = (record, setUpdate) => {
    console.log('setUpdate', setUpdate)
    return () => {
      API.deleteRecord(record._id).then(() => {
        setUpdate(true)
      })
    }
  }

  const onClickSaveHandler = (record, setRow, row) => {
    return () => {
      API.saveRecord(record).then(() => {
        setRow({...record, edit: !row.edit})
      })
    }
  }

  const onClickEditHandler = (row) => {
    return () => {
      setRow({...row, edit: !row.edit})
    }
  }

  return (
    <>
      {
        [<Button onClick={onClickDeleteHandler(record, setUpdate)}>Delete record</Button>, 
          <Button onClick={onClickSaveHandler(record, setRow, row)}>Save record</Button>,
          <Button onClick={onClickEditHandler(row)}>Edit record</Button>
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
