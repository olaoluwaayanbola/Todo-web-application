import Reat from 'react'
import { Todo } from '../../Model';
import './InputList.css'
interface Props {
    setTodos: React.Dispatch<React.SetStateAction<string>>;
    Todos:Todo[];
}
export const InputList: React.FC<Props> = ({ setTodos,Todos }) => {
    return (
        <div className='InputList_Container' >
            {Todos.map(i => {
               return <li>{i.todo}</li>
            })}
        </div>
    )
}