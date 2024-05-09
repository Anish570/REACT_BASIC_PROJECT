import { createContext, useContext, useEffect, useState } from "react";
import { account } from '../appwriteConfig'
import { Navigate, useNavigate } from "react-router-dom";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    useEffect(() => {
        checkUserStatus()

    }, [])
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const registerUser = (userInfo) => { }
    const loginUser = async (userInfo) => {
        // const navigate = useNavigate()
        setLoading(true)
        try {
            const response = await account.createEmailPasswordSession(userInfo.email, userInfo.password)
            const accountDetails = await account.get()
            console.log("Account Created: ", accountDetails)
            setUser(accountDetails)

        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }
    const logoutUser = () => { }
    const checkUserStatus = async () => {
        try {
            const accountDetails = await account.get()
            setUser(accountDetails)
        } catch (error) {
            console.log(error)
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