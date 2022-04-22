# ToDo-List-React-App
a small react app for practice with react hooks and tailwindcss ,
here is some steps how i started 

# watch the app [demo](https://todolistforreact.netlify.app) 
the app deplyed on free hosting , that is netlify  check the demo [here](https://todolistforreact.netlify.app) 




# How i started 
1- create an input & button
2- show the value of input (for a test)
3- useTemplate literals 
4- set the value of input inside a div , that div is a todo 
5- return a div very click on  the button 
6- you can just make 5 todo (role)
7- make a delete button 
8- show number of todos after adding each todo 
9- empty the input 
10- focus on the input after any creatation
11-check if the input is empty & set a condition
12- style the app


# problems i face

  ## 1- first problem : delete todo btn 
    > for the first time i thought to make a delete button working just put a loop and give
    to each button an Id and make a function if this button has an id than remove the parent elemen
    then i used useRef Hooks and i put inside each a todo (task) ref using ### template-string (template literals)
    
  ## 2- second problem : counting the number of todos
    i create a useState hook after creating a task it will be incresed , it was working good , but 
    when i delete a task i tried to dicrease the number of task (todos) but it working randomly -1 -3 ... 
    so for that i decide to set the number of children inside a SetState that called (setCountTodos) 

  ## 3- third problem : empty the container of tasks  
    after creating a clear all button for clear all tasks (todos) so i tried to remove them using remove()  
    and it did't work , then i tried with Array to put all task inside a Array than use map to cleare all buttons 
    but at the end , i used someting simple to cleare it , that is innerHTML .




