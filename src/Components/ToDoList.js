import React , {useState , useRef } from 'react'

export default function ToDoList() {


  const [todo, setTodo] = useState('');
  const [countTodos, setCountTodos] = useState(0)
  const inputRef = useRef();
  const deleteBtnRef = useRef()
  const containerToDos = useRef();
  const ClearAllRefBtn = useRef();


  // increase the count of todos
  function CoutingTodos() {
    setCountTodos(containerToDos.current.children.length)
  };



  const handlingToDo = () => {

      if (inputRef.current.value == '') {
        alert('your input is empty')
      } else {
        //  create a div
        const todoTask = document.createElement('div');

        // styling the div ! not the final result
        todoTask.classList.add('bg-gray-50', 'text-black', 'py-4', 'sm:w-[28rem]', 'w-[18rem]', 'h-[3.6rem]', 'rounded-xl', 'flex', 'justify-between', 'items-center', 'pr-3', 'pl-4', 'mt-2', 'hover:bg-gray-50/50');

        // add the div Todo to Todos contaier
        containerToDos.current.appendChild(todoTask);

        CoutingTodos();

        // set the value of input on the Todo
        todoTask.textContent = todo;

        // make a delete btn
        const deleteButton = document.createElement('button');

        // style delete btn
        deleteButton.classList.add('py-2', 'flex', 'justify-between', 'items-center', 'px-4', 'text-indigo-500', 'hover:bg-gray-500/5', 'rounded-xl');


        // pass a ref to the delete btn
        deleteButton.innerHTML = `<span ref=${deleteBtnRef}>  delete <span> `;


        // add the delete btn to the task div
        todoTask.appendChild(deleteButton);


        // make an event for deleting
        deleteButton.addEventListener('click', () => {
          console.log('delete btn still working')

          todoTask.remove();
          CoutingTodos();
        })

      }

      inputRef.current.value = '';
      inputRef.current.focus();

      }

  
    const handlingClearAllButton = () => {
      // let childrenTodos = containerToDos.current.children ;

      containerToDos.current.innerHTML = '';
      CoutingTodos();
    }


  return (
    <div>
      <article className='mt-32  sm:w-[40rem] w-[22rem] m-auto shadow-xl p-6 font-body '>
       <div className='my-2 mb-10 '> 
         <h2 className='sm:text-3xl text-2xl font-bold text-gray-900'> ToDo List App </h2>
       </div>
      
         <div className='flex justify-center items-center align-middle'>
            <input 
            ref={inputRef}
            className=' rounded-full px-2 sm:py-3 py-2 mx-3 bg-white border-2 border-indigo-600/90 outline-none indent-5 text-gray-500  w-[15rem] sm:w-[18rem] ' type='text' placeholder='write your todo'
            onChange={(e)=> { setTodo(e.target.value)}}
            /> 

            <button 
            onClick={handlingToDo}
            className='btn-1 rounded-full w-[1.5rem] bg-indigo-500 shadow-lg shadow-indigo-500/50 '> 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </button>
         </div>
         

        <div className='mt-8 h-auto m-auto sm:w-[30rem]  w-[10rem]  flex flex-col align-middle  items-center  justify-center py-4' ref={containerToDos} >

        </div>


           <div className='flex sm:justify-evenly justify-between align-middle items-center mt-8 '>
               <button className='btn-2  capitalize bg-indigo-500 shadow-lg shadow-indigo-500/50 '
               onClick={handlingClearAllButton} ref={ClearAllRefBtn} > clear all</button>
               <h3> <span className='text-indigo-500 text-lg'>{countTodos}</span> Todos </h3>
           </div>
      </article>

    </div>
  )
}

