import React, { useContext } from 'react'
import { CustomContext } from '../../context'

const Form = () => {

    const {createTasks} = useContext(CustomContext)


  return (
    <form className='conteiner' onSubmit={(e) => {
        e.preventDefault()
        createTasks(e.target[0].value)
        e.target[0].value = ''
    }}>
        <input required className='input_text' type="text" placeholder='название зададачи' />
        <button className='button_title'>Создать</button>
    </form>
  )
}

export default Form