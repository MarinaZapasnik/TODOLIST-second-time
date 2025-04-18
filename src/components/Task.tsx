import { Button } from "./Button"


export type TaskProps = {
    id:string
    title: string
    isDone: boolean
    removeTask: (id: string) => void
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