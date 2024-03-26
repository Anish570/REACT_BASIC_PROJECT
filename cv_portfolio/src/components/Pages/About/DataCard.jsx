import React from 'react'

const DataCard = ({data}) => {
  return (
    <div className="w-[338px] h-[200px] border border-solid border-gray-800 rounded-lg text-gray-400 flex gap-[20px] grid-area-auto leading-[28px] mb-[30px] pb-[15px]" style={{ borderColor: '#353535', padding: '20px', margin: '0px 0px 30px' }}>
        <div>
            {data.icon}
        </div>
        <div>
           <div className="text-white text-lg font-medium  text-[33px] my-0 mb-[10px] capitalize">
           {data.title}
           </div>
            <div>
            {data.desc}
            </div>
        </div>
    </div>

  )
}

export default DataCard