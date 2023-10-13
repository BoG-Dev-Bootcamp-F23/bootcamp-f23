import './App.css';
import { useState } from "react"; 


function App() {
  // const todos = ["flkasjdflaskdf", "dklfajsldfjk", "dksajflsfj"];
  const [todos, setTodos] = useState([]);

  const [newTodo, setNewTodo] = useState("");



  function removeTodo(todo) {
    const newList = todos.filter((currTodo) => {
      return currTodo !== todo;
    });
    setTodos(newList)
  }
  
  return (
    <div className="App">
      <h1>To-Do List</h1>

      <input value={newTodo} onChange={(event) => {
        console.log(event.target.value)
        setNewTodo(event.target.value);
      }}></input>

      <button style={{ marginLeft: 5 }} onClick={() => {
        const newTodoList = [...todos, "\n",newTodo]
        setTodos([newTodoList])
        setNewTodo("")
      }}>Add to do</button>
      {todos.map((todos) => {
        return <div onClick={() => {
          removeTodo(todos)
        }}>{todos}</div>
      })} 

    </div>
  );
}

export default App;
