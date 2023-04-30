import React, {useState} from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';


const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]); // how you create an array from an interface

  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();

    if(todo){
      setTodos([...todos, {id: Date.now(), todo, isDone:false}]);
      setTodo("");
    }
  };

  return ( 
    <div className='App'>
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/> 
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App;
