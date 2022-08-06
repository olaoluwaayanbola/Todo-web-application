import Reat from 'react'
import { Todo } from '../../Model';
import { Card } from '../Card/Card'
import './InputList.css'
interface Props {
    Todo: String;
    Todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
export const InputList: React.FC<Props> = ({ Todo, Todos, setTodos }) => {
    return (
        <div className='InputList_Container' >
            {Todos.map(i => {
                return <Card
                    setTodos={setTodos}
                    key={i.id}
                    Todo={Todo}
                    Todos={Todos}
                />
            })}
        </div>
    )
}