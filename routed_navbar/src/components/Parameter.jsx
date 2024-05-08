import React from 'react'
import { useParams } from 'react-router-dom'

function Parameter() {
    const {id} = useParams();
  return (
    <div className='absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-black text-[40px]'>
        Parameter received: {id}
    </div>
  )
}

export default Parameter