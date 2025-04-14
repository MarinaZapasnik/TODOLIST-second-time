import { Button } from "./Button"
import { Task } from "./Task"

type TaskProps = {
    id: number
    title: string
    isDone: boolean
}

type TodoListProps = {
    title: string
    tasks: TaskProps[]
    
}

export const Todolist = ({title, tasks}: TodoListProps) => {

  const mapedTasks = tasks.map((task) => {
              
    return (
      <Task key={task.id} id={task.id} title={task.title} isDone={task.isDone}/>
    )

    
  })

    return (
        <div>
          <h3>{title}</h3>
          <div>
            <input/>
            <button>+</button>
          </div>
          <ul>
            {mapedTasks}
          </ul>
          <div>
            <Button title={'All'}/>
            <Button title={'Active'}/>
            <Button title={'Completed'}/>
            
          </div>
        </div>

    )
}