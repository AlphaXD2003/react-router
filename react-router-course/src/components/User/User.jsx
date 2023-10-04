import React from 'react'
import { useParams } from 'react-router-dom'

export const User = () => {
    const {id} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl py-4 text-center'>User : {id} </div>
  )
}
