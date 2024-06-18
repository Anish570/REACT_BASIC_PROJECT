import { useState } from 'react'
import Card from './components/Card'
import Skeleton from './components/Skeleton'
import { useEffect } from 'react';

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <div className='flex items-center justify-center h-screen w-full'>
      {
        loading ? (<Skeleton />) : (<Card />)
      }

    </div>
  )
}

export default App