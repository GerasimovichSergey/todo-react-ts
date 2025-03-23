import { Header } from '../components/Header/Header';
import { Form } from '../components/Form/Form';
import { ToDoList } from '../components/ToDoList/ToDoList';
import { useState } from 'react';
import { ToDo } from '../models/todo-item';


export const ToDoListPage = () => {
    const [todos, setTodos] = useState<ToDo[]>([]);

    const createNewTodo = (text: string) => {
        const newTodo: ToDo = {
            id: todos.length,
            text: text,
            isDone: false,
        };

        setTodos([...todos, newTodo]);
    };

    const updateTodo = (todoItem: ToDo) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === todoItem.id) {
                todo.isDone = !todo.isDone;
            }

            return todo;
        });

        setTodos(newTodos);
    };

    const deleteTodo = (todoItem: ToDo) => {
        const newTodos = todos.filter((todo) => {
            return todo.id !== todoItem.id;
        });

        setTodos(newTodos);
    };

    return (
        <>
            <Header />
            <Form createNewTodo={createNewTodo} />
            <ToDoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        </>
    );
};