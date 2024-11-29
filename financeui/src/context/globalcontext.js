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

    const addExpense = async(expense) => {
        const response = await axios.post(`${BASEURL}add-expense`, expense)
        .catch((err) =>{
            setError(err.response.data.message)
        })
        getExpense()
    }

    const getExpense = async() => {
        const response = await axios.get(`${BASEURL}get-expense`)
        .catch((err) =>{
            setError(err.response.data.message)
        })
        setExpenses(response.data)
    }

    const deleteExpense = async (id) =>{
        const res = await axios.delete(`${BASEURL}delete-expense/${id}`)
        getExpense()
    }

    const TotalExpense = () => {
        let total = 0;
        expenses.forEach((expense) => {
            total += expense.amount 
        });
        return total
    }


    //following methods are used in the dashboard.
    const TotalBalance = () => {
        return TotalSalary() - TotalExpense();
    }


    const TransactionHistory = () => {
        const history = [
            ...incomes.map(item => ({ ...item, type: 'income' })),
            ...expenses.map(item => ({ ...item, type: 'expense' }))
        ];
        history.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        return history.slice(0,7);
    };
    
    
    



    return (
        <GlobalContext.Provider
          value={{
            addIncome,
            getIncome,
            incomes,
            deleteIncome,
            TotalSalary,
            addExpense,
            expenses,
            getExpense,
            deleteExpense,
            TotalExpense,
            TotalBalance,
            TransactionHistory
            
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