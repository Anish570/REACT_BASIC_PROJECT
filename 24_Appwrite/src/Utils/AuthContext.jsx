import { createContext, useContext, useEffect, useState } from "react";
import { account } from '../appwriteConfig'
import { useNavigate } from "react-router-dom";
import { ID } from "appwrite";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    useEffect(() => {
        checkUserStatus()

    }, [])
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    const registerUser = async (userInfo) => {
        try {
            const response = await account.create(ID.unique(), userInfo.email, userInfo.password, userInfo.name)
            console.log(response)
            loginUser(userInfo)
        }
        catch (error) {
            console.log(error)
        }
    }
    const loginUser = async (userInfo) => {
        setLoading(true)
        try {
            const response = await account.createEmailPasswordSession(userInfo.email, userInfo.password)
            const accountDetails = await account.get()
            setUser(accountDetails)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }
    const logoutUser = async () => {
        await account.deleteSessions();
        setUser(null)
    }
    const checkUserStatus = async () => {
        try {
            const accountDetails = await account.get()
            setUser(accountDetails)
        } catch (error) {
            setUser(null)
            console.log("No user logged in ")
        }
        setLoading(false)
    }
    const contextdata = {
        user,
        registerUser,
        loginUser,
        logoutUser,
        checkUserStatus,

    }
    return (
        < AuthContext.Provider value={contextdata} >
            {loading ? <p>Loading</p> : children
            }
        </ AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
export default AuthContext