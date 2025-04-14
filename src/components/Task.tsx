

type TaskProps = {
    id:number
    title: string
    isDone: boolean
}


export const Task = ({title, isDone, id}:TaskProps) => {
    return (
        <li>
            <input key={id} type="checkbox" checked={isDone}/> <span>{title}</span>
        </li>
    )
}