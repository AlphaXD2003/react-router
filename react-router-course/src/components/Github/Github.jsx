import React from 'react'
import { useLoaderData } from 'react-router-dom'
export const Github = () => {
    const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers : {data.followers}
    <img src={data.avatar_url} alt="" />
    </div>
  )
}

export const gitubInfo = async()=>{
   const response = await fetch('https://api.github.com/users/AlphaXd2003')
   return response.json()
}