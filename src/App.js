import React, { useState, useEffect } from 'react'
import './App.scss'
import API from './API/api'
import Table from './modules/Table/Table'
import Button from './modules/common/Button/Button'
import mainConfig from './mainConfig'

function App() {
  const [records, setRecords] = useState([])
  const [firstStart, setFirstStart] = useState(true)
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    if (firstStart || update) {
      API.getData().then((records) => {
        setRecords(records)
      })
    }
    return () => {
      setUpdate(false)
      setFirstStart(false)
    }
  }, [update, firstStart])

  const addRecord = () => {
    const newRecord = {data:{}}
    for (let field of mainConfig.fields) {
      newRecord.data[field] = ''
    }
    API.addRecord(newRecord).then(()=> {
      API.getData().then(async (result) => {
        const newRecord = await Object.values(result)[Object.values(result).length - 1]
        setRecords([...records, newRecord])
      })
    })
  }

  return (
    <div className='container'>
      <Table records={records} setUpdate={setUpdate}/>
      <Button onClick={addRecord}>Add record</Button>
    </div>
  )
}

export default App
