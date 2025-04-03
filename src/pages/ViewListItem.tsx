import { ToDo } from '../models/todo-item';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


interface ComponentProps {
    todos: ToDo[],
}

export const ViewListItem = (props: ComponentProps) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [todo, setTodo] = useState<ToDo>();

    useEffect(() => {
        const searchTodo = props.todos.find((todo) => {
            return todo.id === Number(id);
        });

        if (searchTodo) {
            setTodo(searchTodo);
        } else {
            navigate('/404');
        }
    }, [props.todos, id, navigate]);

    return (
        <div className="container">
            <h1>{todo?.text}</h1>
        </div>
    );
};