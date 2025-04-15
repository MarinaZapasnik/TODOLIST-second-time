
type ButtonProps = {
    title: string
    callBack?: () => void
}

export const Button = ({title, callBack}: ButtonProps) => {

    return (
       <button onClick = {callBack}>{title}</button> 
    )
    
}