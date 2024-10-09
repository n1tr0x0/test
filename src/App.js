import React from 'react'
import Form from './components/Form/Form'
import List from './components/List/List'
import End from './components/End/End'
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Status from "./components/Status/Status";

const App = () => {
  return (
    <div className='App'>
      <div className='todo'>
        <h1 className='todo_title'>Todo List</h1>
        <Form/>
            <Status/>
        <List/>
        <End/>
      </div>
      <ToastContainer theme={"dark"} />

    </div>
  )
}

export default App