import { useState } from "react"
import { FilterProps } from "../App"
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
    removeTask: (id: number) => void
    // filterTasks: (filter: FilterProps) => void
    
    
}

export const Todolist = ({title, tasks, removeTask}: TodoListProps) => {


  const [filterVal, setFilter] = useState('All') 

  

  const filterTasks = (filter: FilterProps) => {
    setFilter(filter)
  }

  const durshlagFunction = () => {
    let durshlag = tasks 
  
    if (filterVal === 'Active') {
      durshlag = tasks.filter(task => !task.isDone);
    } else if (filterVal === 'Completed') {
      durshlag = tasks.filter(task => task.isDone);
    }

    return durshlag
  }

  

  const mapedTasks = durshlagFunction().map((task) => {
              
    return (
      <div>
        
        <Task key={task.id} id={task.id} title={task.title} isDone={task.isDone} removeTask={removeTask}/>
        
      </div>
          )

    
  })


 

    return (
        <div>
          <h3>{title}</h3>
          <div>
            <input/>
            <Button title="+"/>
          </div> {
            tasks.length === 0 ?
            <p>Тасок нет</p> :
            <ul>
            {mapedTasks}
            </ul>
          }
          
          <div>
            <Button title={'All'} callBack={() => filterTasks('All')}/>
            <Button title={'Active'} callBack={() => filterTasks('Active')}/>
            <Button title={'Completed'} callBack={() => filterTasks('Completed')}/>
            
          </div>
        </div>

    )
}