import React, { useState }  from "react";
import TodoList from './todolist';
import TodoForm from './addtodoform';
import { TTodo, toggleTodo, addTodo } from './types'

const initialTodos: Array<TTodo> = [
    {text: 'walk the dog', complete:true},
    {text: 'learning typescript', complete: false}
]
const Todo:React.FC = () => {
    const [todos, setTodos] = useState(initialTodos);

    const toggleTodo:toggleTodo = selectedTodo => {
        const newTodos = todos.map((todo) => {
            if(todo === selectedTodo) {
               return {
                ...todo,
                complete: !todo.complete
               };
            }
            return todo;
        });
        setTodos(newTodos);
    }
    const addTodo: addTodo = newTodo => {
        newTodo.trim() !== ' ' && setTodos([...todos, {text: newTodo, complete: false}]);
        
    }
    return (
        <>
          <TodoList todos={todos} toggleTodo={toggleTodo} />
          <TodoForm  addTodo={addTodo}/>
        </>

    )
}

export default Todo;