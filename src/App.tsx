import React from 'react';
import InputBox from './Components/Inputbox/InputBox';
// import InputList from '../'
import { InputList } from './Components/InputList/InputList';
import { useState } from 'react';
import {Todo} from './Model'
import './App.css'

const App: React.FC = () => {
  const [Todo, setTodo] = useState<string>("");
  const [Todos, setTodos] = useState<Todo[]>([]);

  const handleTodo = (event:React.FormEvent) => {
    event.preventDefault();
    if(Todo){
      setTodos([...Todos,{id:Date.now(),todo:Todo,isdone:false}]);
      setTodo(' ')
    }
  }
  console.log(Todos)
  return (
    <div className="App">
      <div className="app-container">
        <div className="header">
          <h1>TASK.ORG</h1>
        </div>
        <InputBox Todo={Todo} setTodo={setTodo} handleTodo = {handleTodo}></InputBox>
        <InputList  Todos={Todos} setTodos={setTodos}/>
      </div>
    </div>
  );
}

export default App;
