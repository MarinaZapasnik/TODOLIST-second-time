import './App.css'
import { Todolist } from './components/Todolist'

function App() {

const title1 = 'Title 1'
const title2 = 'Title 2'
const title3 = 'Title 3'

const tasks1 = [
  {id: 1, title: 'JS', isDone: true},
  {id: 2, title: 'CSS', isDone: false},
  {id: 3, title: 'React', isDone: false},
]

const tasks2 = [
  {id: 4, title: 'JS 2', isDone: true},
  {id: 5, title: 'CSS 2', isDone: false},
  {id: 6, title: 'React 2', isDone: false},
]

const tasks3 = [
  {id: 7, title: 'JS 3', isDone: true},
  {id: 8, title: 'CSS 3', isDone: false},
  {id: 9, title: 'React 3', isDone: false},
  {id: 10, title: 'React 3', isDone: true},
  {id: 11, title: 'React 3', isDone: false},
]

  return (
      <div className="app">
        <Todolist title = {title1} tasks = {tasks1}/>
        <Todolist title = {title2} tasks = {tasks2}/>
        <Todolist title = {title3} tasks = {tasks3}/>
      </div>
  )
}

export default App
