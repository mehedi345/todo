import React from 'react';
import TodoListItem from './todolistitem';
import { TTodo, toggleTodo} from './types'

interface ITodoProps {
    todos: Array<TTodo>;
    toggleTodo: toggleTodo;
}

const TodoList:React.FC<ITodoProps> = ( {todos, toggleTodo} ) => {
    return (
        <ul>
            {
                todos.map((todo) => {
                    return <TodoListItem key={Math.floor(Math.random())} todo={todo} toggleTodo={toggleTodo} />
                })
            }
        </ul>
    )
}

export default TodoList;