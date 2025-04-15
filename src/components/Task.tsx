import { Button } from "./Button"


type TaskProps = {
    id:number
    title: string
    isDone: boolean
    removeTask: (id: number) => void
}


export const Task = ({title, isDone, id, removeTask}:TaskProps) => {
    return (
        <li>
            <Button title={'X'} callBack={() => removeTask(id)} />
            <input key={id} type="checkbox" checked={isDone}/>
            <span>{title}</span>
        </li>
    )
}