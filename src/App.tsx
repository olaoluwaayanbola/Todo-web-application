import React from 'react';
import InputBox from './Components/Inputbox/InputBox';
import { useState } from 'react';
import './App.css'

const App: React.FC = () => {
  const [Todo, setTodo] = useState<string>("");
  console.log(Todo)
  return (
    <div className="App">
      <div className="app-container">
        <div className="header">
          <h1>TASK.ORG</h1>
        </div>
        <InputBox Todo={Todo} setTodo={setTodo}></InputBox>
      </div>
    </div>
  );
}

export default App;
