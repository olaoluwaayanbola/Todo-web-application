import React, { useEffect, useRef, useState } from 'react';
import { Todo } from '../../Model';
import { Draggable } from 'react-beautiful-dnd'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md'
import './Card.css'
interface Props {
    index: number;
    Todo: Todo;
    Todos: Array<Todo>;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
export const Card = ({ index, Todo, Todos, setTodos }: Props) => {
    const [edit, setedith] = useState<boolean>(false)
    const [value, setValue] = useState<string>(Todo.todo)

    const handleDelete = (id: number) => {
        setTodos(Todos.filter((todo) => todo.id !== id))
    }

    const handleStrike = (id: number) => {
        setTodos(Todos.map((todo) => todo.id === id ? { ...todo, isdone: !todo.isdone } : todo))
    }

    const handleSubmit = (e: React.FormEvent, id: number) => {
        e.preventDefault()
        setTodos(Todos.map(todo => todo.id === id ? { ...todo, todo: value } : todo))
        setedith(false)
    }
    let reff = useRef<HTMLInputElement>(null)
    useEffect(() => {
        reff.current?.focus();
    }, [value])
    return (
        <Draggable draggableId={Todo.id.toString()} index={index}>
            {
                (provided) => (
                    <form action=""
                        className="card_form"
                        onSubmit={(e) => handleSubmit(e, Todo.id)}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        <span className="Todo_value">
                            {
                                edit ?
                                    (
                                        <input
                                            ref={reff}
                                            value={value}
                                            onChange={(e) => setValue(e.target.value)}
                                        >
                                        </input>
                                    )
                                    : Todo.isdone ?
                                        (
                                            <s>{Todo.todo}</s>
                                        ) :
                                        (
                                            <span>{Todo.todo}</span>
                                        )
                            }
                        </span>
                        <div className="Icons_box">
                            <span className="Icons" onClick={(e) => setedith(!edit)}>
                                <AiFillEdit onClick={(e) => handleSubmit(e, Todo.id)} />
                            </span>
                            <span className="Icons" >
                                <AiFillDelete onClick={() => handleDelete(Todo.id)} />
                            </span>
                            <span className="Icons">
                                <MdDone onClick={() => handleStrike(Todo.id)} />
                            </span>
                        </div>
                    </form>
                )
            }
        </Draggable>
    )
}