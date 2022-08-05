import React from 'react'
import './Inputbox.css'
interface props {
    Todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}
const handleSubmit = (event:any) => {
    event.preventDefault();
  }
const InputBox: React.FC<props> = ({ Todo, setTodo }) => {
    return (
        <div className='InputBox_container'>
            <form action="" className='InputBox_form' onSubmit={handleSubmit}>
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