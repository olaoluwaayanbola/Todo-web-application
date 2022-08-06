import Reat from 'react'
import { Todo } from '../../Model';
import './Card.css' 
interface Props{
    Todo:String;
    Todos:Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
export const Card = ({Todo,Todos,setTodos}:Props) => {
    return(
        <div className = 'Card-Container' >

        </div>
    )
}