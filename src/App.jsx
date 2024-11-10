import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTask from './components/AddTask'
import DeleteTask from './components/DeleteTask'
import EditTask from './components/EditTask'



function App() {

  return (
    <>
      <AddTask />
      <DeleteTask />
      <EditTask />


    </>
  )
}

export default App
