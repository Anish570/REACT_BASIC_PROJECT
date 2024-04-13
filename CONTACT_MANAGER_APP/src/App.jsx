import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar, Search, ContactsP } from "./components"
import { useEffect, useState, } from "react";
import { collection, getDocs, onSnapshot} from "firebase/firestore";
import {db} from './config/firebase'
import AddandUpdate from "./components/AddandUpdate";
import useDisclose from "./components/Hooks/useDisclose";
import NotFound from './components/NotFound';

function App() {
  
  const filterContacts = async (value) => {
    try {
      const contactsRef = collection(db, "contact");
      onSnapshot(contactsRef, (snapshot) => {
        const contactList = snapshot.docs.map((items) => ({
          id: items.id,
          ...items.data()
        }));
        const filteredContacts = contactList.filter(contact =>
          contact.name.toLowerCase().includes(value.toLowerCase())
        );
        setContacts(filteredContacts);
      });
    } catch (error) {
      console.log(error);
    }
  };

const [contacts, setContacts] = useState([]);
const {isOpen,onClose,onOpen} = useDisclose(false)

useEffect(()=>{
  const getContacts = async()=>{
    try {
      const contactsRef = collection(db,"contact");
      // const contactsSnapshot =await getDocs(contactsRef);
      onSnapshot(contactsRef,(snapshot)=>{
        const contactList = snapshot.docs.map((items) => {
          return{
           id:items.id,
           ...items.data()
          }
      })  
      setContacts(contactList)
      return contactList;
    })
     
    } catch (error) {
      console.log(error);
      // console.error('error message is:',error);
    }
  }
  getContacts();
},[])


  return (
    <>
    <div className="w-full relative m-auto ">
  <div className=" px-4 m-auto max-w-[370px]">
  <Navbar/>
  <Search filter ={filterContacts} onOpen={onOpen}/>
  <div className="mt-2">
  { contacts.length <= 0 ? <NotFound className="mt-[20px] absolute left-[50%] -translate-x-[50%] flex gap-2 flex-col justify-center items-center font-medium"/> :
    contacts.map((item) => (
    <ContactsP key={item.id} data={item}/>
  ))
}
  </div>
  </div>
  <AddandUpdate  isOpen={isOpen} onClose={onClose}/>

</div>
<ToastContainer
position="bottom-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss={false}
draggable
pauseOnHover
theme="light"
/>
    </>
  )
}

export default App
