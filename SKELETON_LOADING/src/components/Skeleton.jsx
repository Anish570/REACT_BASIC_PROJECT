import React from 'react'

const Skeleton = () => {
    return (
        <div className='border p-4 max-w-[500px] w-[80%] h-[80%] rounded-md shadow-2xl animate-pulse'>
            <div className='mb-4 py-2 px-8 h-[60%]'>
                <div className="w-full h-full object-contain bg-gray-400 animate-pulse" />
            </div>
            <div>
                <div className="font-semibold bg-slate-400 w-60 h-4 "> </div><br />
                <div className="font-semibold text-sm bg-slate-400 w-52  h-4"></div><br />
                <p className="font-thin w-full h-20 bg-slate-400">

                </p>

            </div>
        </div>
    )
}

export default Skeleton