import React from 'react'
import Card from './components/Card'
import Skeleton from './components/Skeleton'

const App = () => {
  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <Skeleton />
      <Card />
    </div>
  )
}

export default App