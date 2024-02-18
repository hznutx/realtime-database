import PropTypes from 'prop-types'
import { db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'
import { useState } from 'react'
import { Stack } from '@mui/material'
import TableData from './TableData'

const FormInputData = ({ keyword }) => {
  const [form, setForm] = useState({})

  const handleAddData = async () => {
    await addDoc(collection(db, 'item'), form)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err))
  }

  const handleOnChange = (e) => {
    console.log(e.target.value)
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <Stack>
      <input
        onChange={(e) => handleOnChange(e)}
        type='text'
        placeholder='name'
        name='name'
      />
      <input
        onChange={(e) => handleOnChange(e)}
        type='text'
        placeholder='detail'
        name='detail'
      />
      <input
        onChange={(e) => handleOnChange(e)}
        type='number'
        placeholder='price'
        name='price'
      />
      <button onClick={handleAddData}>Add {keyword}</button>
      <TableData />
    </Stack>
  )
}

FormInputData.propTypes = {
  keyword: PropTypes.string,
}

export default FormInputData
