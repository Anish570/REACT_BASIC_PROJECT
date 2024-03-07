import React from 'react'

function Background() {
  return (
   <>
    <div className='fixed z-[2] w-screen h-screen'>
    <div className='flex justify-center py-10 text-zinc-500 text-xl font-semibold'>Documents</div>
     <h1 className='text-zinc-500 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] font-semibold tracking-tighter leading-none'>
        Docs.
      </h1>
    </div>
      </>
  )
}

export default Background