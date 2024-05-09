import { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    useEffect(() => {
        setLoading(false)
    }, [])
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState()

    const registerUser = (userInfo) => { }
    const loginUser = (userInfo) => { }
    const logoutUser = () => { }
    const checkUserStatus = () => { }
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