import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CustomFormElement from './components/CustomFormElement'


function App(mode) {

  const [formData,setFormData]=useState(
    [
      {
          label:'username',
          id:'username',
          value:'',
          mode:'input',
  
      },
      {
          label:'sex',
          id:'sex',
          value:'',
          mode:'sex',
          option:['  m','   f']
  
      },
      {
          label:'select',
          id:'select',
          value:'',
          mode:'select',
          option:['giallo','verde','sabbia del Gobi in settembre']
  
      },
     ]
     )
  return (
    <>
      {formData.map(({label ,mode ,option, id, value},i)=>{
       return (
        <div key={`${i}`}>
          <CustomFormElement
           form={formData}
           key={i}
           label={label}
           mode={mode}
           option={option}
           id={id}
           onchange={value=>{const newForm=structuredClone(formData)
                              newForm.splice(i, 1 ,newForm[i].value=[value])
                              setFormData(newForm)}
          }
           /* value={setFormData()} */
          />
        <div>
          <p>{label} : {value}</p>
        </div>

        </div>
        )
        })}
    </>
  )
}

export default App
