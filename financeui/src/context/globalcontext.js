import React, { children, useContext, useState } from "react"
import axios from 'axios'

const BASEURL = "http://localhost:5000/api/v1/"

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) =>{

    // "incomes" will hold all our incomes we need to display, "setIncomes" will update the "incomes" state, based on our "getIncome" GET request.
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
    
    // Function is working, testing with console.log(response.data)
    const getIncome = async () => {
        const response = await axios.get(`${BASEURL}get-income`)
        .catch((err) =>{
            setError(err.response.data.message)
        })
        setIncomes(response.data)
    }


    return (
        <GlobalContext.Provider value={{
            // This is called when onClick() of the "add-income" button. 
            addIncome,
            getIncome,
            incomes 
        }} >
            {children}
        </GlobalContext.Provider>
    )
}

export const UseGlobalContext=() =>{
    return useContext(GlobalContext)
}