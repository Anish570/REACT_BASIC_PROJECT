import React from 'react'

const Image = ({data}) => {
  
  return (
                  <div className={`flex flex-row bg-cover bg-no-repeat w-[260px] h-[300px] ${data.className && data.className}`} >
                         <img src={data.src} 
                             alt="" className='w-full h-full '/>
                     </div>
  )
}

export default Image