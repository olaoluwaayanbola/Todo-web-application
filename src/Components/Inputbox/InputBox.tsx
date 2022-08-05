import React from 'react'
import './Inputbox.css'
interface props {
    Todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleTodo: (event: React.FormEvent) => void
}

const InputBox: React.FC<props> = ({ Todo, setTodo, handleTodo }) => {
    return (
        <div className='InputBox_container'>
            <form
                action=""
                className='InputBox_form'
                onSubmit={(event) => handleTodo(event)}
            >
                <input
                    type="text"
                    className='input_sec'
                    value={Todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button className='button'>Go</button>
            </form>
        </div>
    )
}

export default InputBox 