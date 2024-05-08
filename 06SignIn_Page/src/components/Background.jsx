import React from 'react'
import Image from './Image'
import imgdata from './Imagedata'
const Background = () => {
    return (
        <>
        
            <div className='flex justify-between flex-wrap gap-y-5'>
                {
                    imgdata && imgdata.length > 0 ?
                        imgdata.map((item, index) => (
                            <Image key={index} data={item} />

                        )) : <h2>Data not found</h2>
                }
                 <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-80'></div>
            </div>
        
        </>
    )
}

export default Background