import { useState } from 'react'
import './App.css'
import { Todolist } from './components/Todolist'
import { v1 } from 'uuid'


export type FilterProps = 'All' | 'Active' | 'Completed'

function App() {

const title1 = 'Title 1'


const initialTasks = [
  {id: v1(), title: 'JS', isDone: true},
  {id: v1(), title: 'CSS', isDone: false},
  {id: v1(), title: 'React', isDone: false},
  {id: v1(), title: 'TS', isDone: false},
  {id: v1(), title: 'StyledComponents', isDone: false},
  {id: v1(), title: 'HTML', isDone: false},
]


const [tasks, setTasks] = useState(initialTasks)



const removeTask = (id: string) => {
  const filteredTasks = tasks.filter(task => task.id !== id)
  setTasks(filteredTasks)
  
  
}

// const [filterVal, setFilter] = useState('All') 

// let durshlag = tasks 
 
// if (filterVal === 'Active') {
//   durshlag = tasks.filter(task => !task.isDone);
// } else if (filterVal === 'Completed') {
//   durshlag = tasks.filter(task => task.isDone);
// }

// const filterTasks = (filter: FilterProps) => {
//   setFilter(filter)
// }




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
        <Todolist title = {title1} tasks={tasks} removeTask={removeTask} />
       
      </div>
  )
}

export default App
