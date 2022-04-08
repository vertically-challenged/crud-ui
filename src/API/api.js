import axios from 'axios'
import mainConfig from '../mainConfig'

const api = axios.create({
  baseURL: 'http://178.128.196.163:3000/api/records/'
})

const dataPreparation = (data) => {
  const preparedData = []
  for (let record of data) {
    let isRelevant = true
    let numberOfFields = 0
    for (let key in record.data) {
      numberOfFields++
      if (!record._id || !mainConfig.fields.includes(`${key}`, 0)) isRelevant = false
    }
    if (isRelevant && (numberOfFields === mainConfig.fields.length)) preparedData.push(record)
  }
  return preparedData
}

export default class API {
  static getData = async () => {
    try {
      const data = await api.get()
      return dataPreparation(data.data)
    } catch (error) {
      console.error('Error getting data from API: ', error)
    }
  }
  
  static addRecord = async (record) => {
    try {
      await api.put('/', record)
    } catch (error) {
      console.error('Error adding data: ', error)
    }
  }

  static saveRecord = async (record) =>  {
    try {
      api.post(`${record._id}`, {data: {...record.data}})
    } catch (error) {
      console.error('Error saving data: ', error)
    }
  }

  static deleteRecord = async (_id) => {
    try {
      await api.delete(`${_id}`)
    } catch (error) {
      console.error('Error deleting data: ', error)
    }
  }
}