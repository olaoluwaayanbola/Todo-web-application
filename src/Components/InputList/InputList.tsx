import Reat from 'react'
import { Todo } from '../../Model';
import { Card } from '../Card/Card'
import './InputList.css'
interface Props {
    Todos: Array<Todo>;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const InputList: React.FC<Props> = ({ Todos, setTodos }) => {
    return (
        <div className='InputList_Container' >
            <div className="Active">
                {Todos.map((todo) => {
                    return <Card
                        setTodos={setTodos}
                        key={todo.id}
                        Todo={todo}
                        Todos={Todos}
                    />

                })}
            </div>
            <div className="Completed">
                {Todos.map((todo) => {
                    return <Card
                        setTodos={setTodos}
                        key={todo.id}
                        Todo={todo}
                        Todos={Todos}
                    />
                })}
            </div>
        </div>
    )
}