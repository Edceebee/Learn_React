
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'



function App() {
  const[tasks, setTasks] =useState(
    [
        {
            id : 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id : 2,
            text: 'Meeting at school',
            day: 'Feb 6th at 1:30pm',
            reminder: true,
        },
        {
            id : 3,
            text: 'Food shopping',
            day: 'Feb 5th at 2:30pm',
            reminder: false,
        }
    ]
)

//delete task
const deleteTask = (id) =>{
  setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    <div>

      <Header  className = "header"/> 
      <hr />
      <br /> 


      <div style={App_div}>
       
        <h1>Welcome to my React page</h1> 
        <p>Lorem ipsum dolor sit amet consectetur
   adipisicing elit. </p> 
   
        {tasks.length > 0 ? <Tasks tasks={tasks} style={tasksDesign} onDelete = {deleteTask}/> : 'No tasks to display' }
      </div>
      <hr />
      
         
    </div>
    
  )
}

const App_div = {
  paddingLeft: '10rem',
  width: '30%'
  

}

const tasksDesign = {
  backgroundColor: 'grey'
}
export default App;
