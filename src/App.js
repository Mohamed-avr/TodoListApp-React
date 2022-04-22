import './App.css';
import React  from 'react';
import { Squash as Hamburger } from 'hamburger-react'
import ToDoList from './Components/ToDoList';



 

function App() {
    return ( 
       <div className='App'>
            <div className='h-14 text-center bg-gradient-to-r from-sky-500 to-indigo-500 py-4 '> 
              <h2 className='text-white font-medium'> built with react & tailwindCss 💎</h2>
            </div>
             <ToDoList/>
       </div>
    )
}


export default App;             


