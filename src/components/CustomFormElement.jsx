import { useState } from "react"

export default function ({mode,label,option,id,}){
    const [inputValue,setInputValue]=useState('')
    

   switch(mode){
        case 'input':
            return(
                <div key={id}>
                    <label htmlFor="">
                        {label}
                        <input 
                            type="text"
                            value= {inputValue}
                            onChange={(e)=>{setInputValue(e.target.value)
                            {onchange(inputValue)}}/* (e)=>setInputValue(e.target.value) */} />
                    </label>
                </div>
            )


        case 'sex':
            return(
                <div key={id}>
                    <label htmlFor="">
                        {label}
                        {option[0]}
                        <input type="radio" name='sex' value={option[0]} />
                        {option[1]}
                        <input type="radio" name='sex' value={option[1]} />
                    </label>
                </div>
            )
        case 'select':
            return(
                <div key={id}>
                    <label htmlFor="">
                        <select name="" id="">
                            <option value="" >{option[0]}</option>
                            <option value="" >{option[1]}</option>
                            <option value="" >{option[2]}</option>
                        </select>
                    </label>
                </div>
            )
            
   }}
