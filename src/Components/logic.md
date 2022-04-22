==> ToDoList App 

  === First 
  -- create an input & button
  -- show the value of input (for a test)
  -- useTemplate literals 
  -- set the value of input inside a div , that div is a todo 
  -- return a div very click on  the button 
  -- you can just make 5 todo (role)
  -- make a delete button 
  -- show number of todos after adding each todo 
  -- empty the input 
  -- focus on the input after any creatation
  -- style the app



  // some problems i faced

  1- first problem : delete todo btn 
    ==> for the first time i thought to make a delete button working just put a loop and give
    to each button an Id and make a function if this button has an id than remove the parent elemen
    then i used useRef Hooks and i put inside each a todo (task) ref using template string (template literals)


  2- second problem : counting the number of todos
    ==> i create a useState hook after creating a task it will be incresed , it was working good , but 
    when i delete a task i tried to dicrease the number of task (todos) but it working randomly -1 -3 ... 
    so for that i decide to set the number of children inside a SetState that called (setCountTodos) 

  3- third problem : empty the container of tasks  


