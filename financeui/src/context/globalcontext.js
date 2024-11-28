import React, { children, useContext, useState } from "react"
import axios from 'axios'
import { createGlobalStyle } from "styled-components"

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
            getIncome()
    }
    
    // this function is used to pull our live data from mongodb, and is used upon adding, removing, and refreshings
    const getIncome = async () => {
        const response = await axios.get(`${BASEURL}get-income`)
        .catch((err) =>{
            setError(err.response.data.message)
        })
        setIncomes(response.data)
    }

    //this function is used to "delete" incomes from our income page.
    const deleteIncome = async (id) =>{
        const res = await axios.delete(`${BASEURL}delete-income/${id}`)
        getIncome()
    }

    //this function is used to calculate/update our total income(s) on our income page when an income is added/deleted. 
    const TotalSalary = () => {
        let total = 0;
        incomes.forEach((income) => {
            total += income.amount 
        });
        return total
    };

    console.log(TotalSalary());
    


    return (
        <GlobalContext.Provider
          value={{
            addIncome,
            getIncome,
            incomes,
            deleteIncome,
            TotalSalary
          }}
        >
          {console.log('GlobalProvider Values:', { addIncome, getIncome, incomes, deleteIncome })}
          {children}
        </GlobalContext.Provider>
      );
      
}

export const UseGlobalContext=() =>{
    return useContext(GlobalContext)
}