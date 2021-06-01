import Task from './Task'

const Tasks = ({ tasks, onDelete }) => {
            
    return (
        <div>
             <div> 
                 {tasks.map((task) => 
                (<Task task={task} onDelete = {onDelete}/> ))}

        </div>
        </div>
       
    );
}


export default Tasks
