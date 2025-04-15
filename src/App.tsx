import { useState } from 'react'
import './App.css'
import { Todolist } from './components/Todolist'

function App() {

const title1 = 'Title 1'


const initialTasks = [
  {id: 1, title: 'JS', isDone: true},
  {id: 2, title: 'CSS', isDone: false},
  {id: 3, title: 'React', isDone: false},
  {id: 12, title: 'TS', isDone: false},
  {id: 13, title: 'StyledComponents', isDone: false},
  {id: 14, title: 'HTML', isDone: false},
]


const [tasks, setTasks] = useState(initialTasks)



const removeTask = (id: number) => {
  const filteredTasks = tasks.filter(task => task.id !== id)
  setTasks(filteredTasks)
  
  
}

type FilterProps = 'All' | 'Active' | 'Completed'


const filterTasks = (filter: FilterProps) => {


  const filteredTasks = filter === 'All'? initialTasks :
                        filter === 'Active'? (tasks.filter(task => !task.isDone)) : 
                                              (tasks.filter(task => task.isDone))

  setTasks(filteredTasks)
}

// const allTasks = () => {
  
//   setTasks(initialTasks)
    
// }

// const activeTasks = () => {
//   setTasks(tasks.filter(task => !task.isDone))
// }

// const completedTasks = () => {
//   setTasks(tasks.filter(task => task.isDone))
// }

  return (
      <div className="app">
        <Todolist title = {title1} tasks = {tasks} removeTask={removeTask} filterTasks={filterTasks}/>
       
      </div>
  )
}

export default App
