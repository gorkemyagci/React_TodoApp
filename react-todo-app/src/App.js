import React, {useReducer} from "react";

function App() {
  function reducer(state,action){
    console.log(state,action);
    switch(action.type){
      case "SET_TODO":
        return{
          ...state,
          todo: action.value
        }
      case "ADD_TODO":
        return{
          ...state,
          todo:'',
          todos: [...state.todos,state.todo]
        }
    }
  }

  const [state,dispatch] = useReducer(reducer,{
    todos:[],
    todo:''
  })

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      value: state.todo
    })
  }

  const handleTodo = e => {
    dispatch({
      type:"SET_TODO",
      value: e.target.value
    })
  }

  return (
    <div className="App">
    <h1>Todo App</h1>
    <form onSubmit={handleSubmit}>
      <input
      name="text"
      value={state.todo}
      onChange={handleTodo}
      />
      <button disabled={!state.todo} type="submit">Ekle</button>
    </form>
    <ul>
      {state.todos.map((todo,index) => {
        return(
          <li key={index}>{todo}</li>
        )
      })}
    </ul>
    </div>
  );
}

export default App;
