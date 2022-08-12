import React from 'react';
import InputBox from './Components/Inputbox/InputBox';
import { InputList } from './Components/InputList/InputList';
import { useState } from 'react';
import {DragDropContext} from "react-beautiful-dnd"
import { Todo } from './Model'
import './App.css'

const App: React.FC = () => {
  const [Todo, setTodo] = useState<string>("");
  const [Todos, setTodos] = useState<Todo[]>([]);
  const [completed, setcompleted] = useState<Todo[]>([])
  const handleTodo = (event: React.FormEvent) => {
    event.preventDefault();
    if (Todo) {
      setTodos([...Todos, { id: Date.now(), todo: Todo, isdone: false }]);
      setTodo(' ')
    }
  }
  return (
    <DragDropContext onDragEnd={()=>{}}>
      <div className="App">
        <div className="app-container">
          <div className="header">
            <h1>TASK.ORG</h1>
          </div>
          <InputBox Todo={Todo} setTodo={setTodo} handleTodo={handleTodo}></InputBox>
          <InputList
            Todos={Todos}
            setTodos={setTodos}
            completed={completed}
            setcompleted={setcompleted}
          />
        </div>
      </div>
    </DragDropContext>
  );
}

export default App;
