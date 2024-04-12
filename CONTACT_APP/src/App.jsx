import {Search,Navbar,Contacts} from "./components"
import { useEffect,useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import {db} from './config/firebase'


function App() {
const [contacts, setContacts] = useState([]);
useEffect(()=>{
  const getContacts = async()=>{
    try {
      const contactsRef = collection(db,"contact");
      const contactsSnapshot =await getDocs(contactsRef);
      const contactList = contactsSnapshot.docs.map((items) => {
       return{
        id:items.id,
        ...items.data()
       }
    })
      setContacts(contactList)
    } catch (error) {
      console.log(error);
      // console.error('error message is:',error);
    }
  }
  getContacts();
},[])


  return (
    <>
  <div className="px-4 m-auto max-w-[370px]">
  <Navbar/>
  <Search/>
  <div>
  {
  contacts.map((item, index) => (
    <Contacts key={index} data={item} />
  ))
}
  </div>
  </div>
    </>
  )
}

export default App
