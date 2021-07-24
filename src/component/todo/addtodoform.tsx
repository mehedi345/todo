import React, {useState} from 'react';
import { ChangeEvent, FormEvent } from 'react';
import { addTodo } from './types';

interface ITodoFormProps {
    addTodo: addTodo;
}

const TodoForm: React.FC<ITodoFormProps> = ({addTodo}) => {
    const [newTodo, setNewTodo] = useState('');

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo('');
    }
    return (
        <form>
            <input 
                type="text" 
                value={newTodo}
                onChange = {handleChange}
            />
            <button type='submit' onClick={handleSubmit}>ADD TODO</button>
        </form>
    )
}

export default TodoForm;