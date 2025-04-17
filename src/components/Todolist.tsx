import { useRef, useState } from "react"
import { FilterProps } from "../App"
import { Button } from "./Button"
import { Task } from "./Task"

type TaskProps = {
    id: string
    title: string
    isDone: boolean
}

type TodoListProps = {
    title: string
    tasks: TaskProps[]
    removeTask: (id: string) => void
    addTask: (newTitle: string) => void
    // filterTasks: (filter: FilterProps) => void
    
    
}

export const Todolist = ({title, tasks, removeTask, addTask}: TodoListProps) => {


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

////  ТУТ ИСПОЛЬЗОВАЛИ ЮЗ РЕФ ДЛЯ ИНПУТА
  // // const inputRef = useRef<HTMLInputElement>(null)  //локальный стейт

  // // console.log(inputRef);
  

  // // return (
  // //     <div>
  // //       <h3>{title}</h3>
  // //       <div>
  // //         <input ref={inputRef}/>
  // //         <Button title="+" callBack ={() => 
  // //           { if (inputRef.current) {
  // //             addTask(inputRef.current.value)
  // //             inputRef.current.value = ''
  // //           }
              
  // //         }}/> 




    const [newTitle, setNewTitle] = useState('')


    return (
        <div>
          <h3>{title}</h3>
          <div>
            <input value={newTitle} 
              onChange={(e) => {  //в value прописываем значение newTitle для того чтобы при зачистке в него сеталось значение
              setNewTitle(e.currentTarget.value);
              }}
              onKeyDown={(e) => {

                  if (e.key === 'Enter') {
                    addTask(newTitle)
                    setNewTitle('')
                  }
                  
              } }
              
              />
            <Button title="+" callBack ={() => {
              addTask(newTitle)
              setNewTitle('')
            } }/>
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