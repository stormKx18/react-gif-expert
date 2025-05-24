import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) =>{
        setInputValue(target.value)
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        const cleanInput = inputValue.trim()
        if(cleanInput.length<=1) return;
        //setCategories((categories)=>[inputValue,...categories]);
        onNewCategory(cleanInput)
        setInputValue('')
    }

  return (
    <form onSubmit={onSubmit} aria-label='form'>
        <input 
        type="text" 
        placeholder="Search gifs..."
        value={inputValue}
        onChange={onInputChange}
        />
    </form>
  )
}

