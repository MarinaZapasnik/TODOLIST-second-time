
type ButtonProps = {
    title: string
    callBack?: () => void
}

export const Button = ({title, callBack}: ButtonProps) => {

    const callBackHandler = () => {
        callBack
    }

    return (
       <button onClick = {callBackHandler}>{title}</button> 
    )
    
}