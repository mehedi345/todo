import React from 'react';
import './todolist.css';
import { TTodo, toggleTodo} from './types';

interface ITodoListItemProps {
    todo: TTodo;
    toggleTodo: toggleTodo;
}

const TodoListItem:React.FC<ITodoListItemProps>= ({ todo, toggleTodo }) => {
    return(
        <div>
            <li>
                <label className={todo.complete ? 'complete' : undefined}>
                    <input 
                        type="checkbox" 
                        checked={todo.complete}
                        onChange={()=> toggleTodo(todo)}
                    />
                    {todo.text}
                </label>
            </li>
        </div>
    )
}
export default TodoListItem;