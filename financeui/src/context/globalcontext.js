import React, { Children } from "react"
import axios from 'axios'

//URL to our host
BASE_URL = "http://localhost:5000/api/v1/";



const globalcontext = React.createContext()


export const globalprovider = ({Children}) => {

    const [incomes, setIncomes]= useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    // async allows us to use await, for HTTP requests.
    const addIncome = async(income) => {

    }

    return (
        <globalcontext.Provider>
            {children}
        </globalcontext.Provider>
    )
}