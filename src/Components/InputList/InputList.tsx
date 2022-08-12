import Reat from 'react'
import { Todo } from '../../Model';
import { Card } from '../Card/Card'
import { Droppable } from "react-beautiful-dnd"
import './InputList.css'
interface Props {
    Todos: Array<Todo>;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completed: Array<Todo>;
    setcompleted: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const InputList: React.FC<Props> = ({ Todos, setTodos, completed, setcompleted }) => {
    return (
        <div className='InputList_Container' >
            <Droppable droppableId='TodoList'>
                {
                    (provided) => (
                        <div
                            className="Active"
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {/* <span className="Active-header">Active</span> */}
                            {Todos.map((todo, index) => {
                                return <Card
                                    index={index}
                                    setTodos={setTodos}
                                    key={todo.id}
                                    Todo={todo}
                                    Todos={Todos}
                                />
                            })}
                        </div>
                    )
                }
            </Droppable>
            {/* <Droppable droppableId='TodoDone'>
                {
                    (provided) => (
                        <div
                            className="Completed"
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            <span className="Completed-header">
                                Completed
                            </span>
                            {completed.map((todo, index) => {
                                return <Card
                                    index={index}
                                    setTodos={setcompleted}
                                    key={todo.id}
                                    Todo={todo}
                                    Todos={Todos}
                                />
                            })}
                        </div>
                    )
                }
            </Droppable> */}
        </div>
    )
}