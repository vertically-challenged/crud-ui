import React from 'react'
import Input from '../common/Input/Input'

export default function Cell({fieldName, _id, value, inputOnChangeHandler, readOnly}) {
  return (
    <td className='table__cell'>
      <Input fieldName={fieldName} _id={_id} value={value} onChange={inputOnChangeHandler} readOnly={readOnly}/>
    </td>
  )
}