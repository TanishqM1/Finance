import React, { children, useContext, useState } from "react"
import axios from 'axios'

const BASEURL = "http://localhost:5000/api/v1/"

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) =>{

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)
    
    //This method passes the income data "income" onto axios, which creates a mongooseschema and uploads the data to the database.
    const addIncome = async (income) => {
        const response = await axios.post(`${BASEURL}add-income`, income)
            .catch((err) =>{
                setError(err.response.data.message)
            })
    }


    return (
        <GlobalContext.Provider value={{
            // This is called when onClick() of the "add-income" button. 
            addIncome
        }} >
            {children}
        </GlobalContext.Provider>
    )
}

export const UseGlobalContext=() =>{
    return useContext(GlobalContext)
}