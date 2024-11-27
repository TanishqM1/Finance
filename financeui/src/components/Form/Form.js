import {React, useState} from "react"
import styled from "styled-components";
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { UseGlobalContext } from "../../context/globalcontext";
import Button from "../Button/Button";
import { addicon } from "../../utils/icons";

function Form(){
    console.log('Form component is rendering');
    const {addIncome, getIncome} = UseGlobalContext()
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
        getIncome()
    }

    return (
        <FormStyled onSubmit={handleSubmit}>

            {/* handing title input */}
            <div className="input-control">
                <input 
                type="text" 
                value = {title}
                name = {'title'}
                placeholder ="Title"
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
                placeholder ="Amount"
                onChange={handleInput('amount')}
                />
            </div>
            {/* Handling Date */}
            <div className ="input-control">
                <DatePicker
                id = 'date'
                placeholderText ='Date'
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
                    <option value=""  disabled >Select Category</option>
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="investments">Investments</option>
                    <option value="social">Social Benefits</option>
                    <option value="bank">Bank Transfer</option>   
                    <option value="other">Other</option>  
                </select>
            </div>

            <div className="input-control">
                <textarea
                value = {description}
                type="text" 
                name = {'description'}
                id={'description'}
                placeholder = "Description "
                onChange={handleInput('description')}
                cols='30'
                rows='4'
                ></textarea> 
            </div>

            
            <div class="submit-btn">
                <Button
                name={'Add Income'}
                icon={addicon}
                bPad={'.8rem 1.6rem'}
                bRadius={'30px'}
                color={'#1b9680'}
                bg={'var(--color-accent'}

                />
            </div>


        </FormStyled>
    )
}

const FormStyled = styled.form`

display: flex;
flex-direction: column;
gap: 1.5rem;
margin-top: 20px;
width: 120%;

// input is all of the entry fields, select is the Category control, and "textarea" refers to the description textbox.
.input-control .react-datepicker-wrapper {
    width: 100%; /* Match the width of other input fields */
    display: block; /* Ensure it behaves like other inputs */
}

.input-control textarea{
    width: 100%;
}

input, select, textarea{
    
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: .5rem 1rem;
    border-radius: 5px;
    // border color for text boxes
    border: 2px solid #c2c0c0;
    background: transparent;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    // Color for 'Category'
    color: #0ddeb8;
    font-weight: bold;

    &::placeholder{
        color: #1b9680;
        font-weight: bold;
    }


}
.input-control{
    input{
        width: 100%;

    }

}
input:focus::placeholder,
textarea:focus::placeholder {
    color: transparent;
}

/* selects is styling for our dropdown menu */
.selects{
    display: flex;
    justify-content: flex-end;
    select{
        //color when nothing is slected (start)
        color: #1b9680;
        //color after first item has been selected
        &:active, &:focus{
        color: #0ddeb8;
        background-color: #28282A;
    }
}
}



.submit-btn{

    button{
        box-shadow: 0px 1px 15px rgba(0,0,0, 0.0.6) ;
        font-weight: bold;
        &:hover{
            background: #0ddeb8 !important;
            color: black !important;
            font-size: larger !important;
            border-radius: 30px !important;
        }
    }
}


`;

export default Form

//name