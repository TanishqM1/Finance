import {React, useState} from "react"
import styled from "styled-components";
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { UseGlobalContext } from "../../context/globalcontext";

function Form(){
    console.log('Form component is rendering');
    const {addIncome} = UseGlobalContext()
    const [inputState, setInputState] = useState({
         title: '',
         amount: '',
         date: '',
         category: '',
         description: '',
    })

    const {title, amount, date, category, description} = inputState;
    
    const handleInput = name => e =>{
        setInputState({...inputState, [name]: e.target.value})
    }

    const handleSubmit = e =>{
        e.preventDefault()
        addIncome(inputState)
    }

    return (
        <FormStyled onSubmit={handleSubmit}>

            {/* handing title input */}
            <div className="input-control">
                <input 
                type="text" 
                value = {title}
                name = {'title'}
                placeholder ="Salary"
                onChange={handleInput('title')}
                />
            </div>
            {/* handing income amount */}
            <div className="input-control">
                <input 
                value = {amount}
                type="text" 
                name = {'amount'}
                id={'amount'}
                placeholder ="Salary amn"
                onChange={handleInput('amount')}
                />
            </div>
            {/* Handling Date */}
            <div className ="input-control">
                <DatePicker
                id = 'date'
                placeholderText ='Enter Date'
                selected={date}
                dateFormat="dd/MM/yyyy"
                onChange={(date)=>{
                    setInputState({...inputState, date: date})
                }}
                />
            </div>

            {/* Category Options for form */}
            <div className="selects input-control">
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value=""  disabled >Select Option</option>
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="investments">Investments</option>
                    <option value="stocks">Stocks</option>
                    <option value="bank">Bank Transfer</option>   
                    <option value="other">Other</option>  
                </select>
            </div>
            <div class="submit-btn">
                <button>Add Income</button>
            </div>


        </FormStyled>
    )
}

const FormStyled = styled.Form`



`;

export default Form

//name