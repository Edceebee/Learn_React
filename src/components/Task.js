import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete}) => {
    return (
        <div style ={{backgroundColor: 'grey'}}>
            
            <h3 > {task.text}     </h3>
            <p>{task.day} &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;  
              <FaTimes style = {{color: 'red' }}  onClick= {() => onDelete(task.id)}/> </p> <br />
            </div>
            
        
    );
}

   


export default Task
