import React from 'react'

export default function Input({fieldName, value, onChange, readOnly}) {
  return (
    <input name={fieldName} type="text" value={value} onChange={onChange} readOnly={readOnly}/>
  )
}
