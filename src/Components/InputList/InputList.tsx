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
                <span className="Active-header">Active</span>
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
                <span className="Completed-header">
                    Completed
                </span>
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