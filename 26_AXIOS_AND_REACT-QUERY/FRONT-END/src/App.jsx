import { useState } from "react"

const App = () => {
  const [products, setProducts] = useState([]);
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen'>
      <h1 className="text-4xl font-semibold">Axios & React Query Practise</h1>
      <span className="text-2xl font-medium mt-4">NO. of products available: {products.length}</span>
    </div>
  )
}

export default App