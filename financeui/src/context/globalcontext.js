import React, { children, useContext, useState } from "react"
import axios from 'axios'

const BASEURL = "http://localhost:5000/api/v1/"

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) =>{

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)
    
    const addIncome = async (income) =>{
        const response = await axios.post(`${BASEURL}add-income`)
            .catch((error) =>{
                setError(error.response.data.message)
            })
    }


    return (
        <GlobalContext.Provider value={{
            addIncome
        }} >
            {children}
        </GlobalContext.Provider>
    )
}

export const UseGlobalContext=() =>{
    return useContext(GlobalContext)
}