import { useEffect, useState } from 'react'

const App = () => {
  const [lists, setLists] = useState([])
  const [value, setValue] = useState("");
  const [query, setQuery] = useState("");
  const filteredList = lists.filter((list) => list.toLowerCase().includes(query.toLocaleLowerCase()));
  const additem = (e) => {
    e.preventDefault()
    if (value === "") return
    setLists(prev => [...prev, value])
    setValue("");
  }
  useEffect(() => {
    console.log("list lenght: ", lists.length)
  }, [lists])
  return (
    <form className='space-y-4 flex flex-col items-center mt-10 w-full h-full'>
      <div>
        <label htmlFor="search">Search</label>
        <input type="text"
          onChange={(e) => { setQuery(e.target.value) }}
          className='border' />
      </div>
      <div>
        <label htmlFor="add">Add new</label>
        <input type="text"
          value={value}
          onChange={(e) => { setValue(e.target.value) }}
          className='border' />
        <button type='submit' onClick={(e) => { additem(e) }}>Add</button>
      </div>
      <div>
        <h3>List:</h3>
        {
          filteredList?.map((item, index) => {
            return <div key={index}>{item}</div>
          })
        }
      </div>
    </form>
  )
}

export default App