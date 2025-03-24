import { Header } from '../components/Header/Header';
import { Form } from '../components/Form/Form';
import { ToDoList } from '../components/ToDoList/ToDoList';
import { useState } from 'react';
import { ToDo } from '../models/todo-item';
import { Flip, toast, ToastContainer } from 'react-toastify';


export const ToDoListPage = () => {
    const [todos, setTodos] = useState<ToDo[]>([]);

    const createNewTodo = (text: string) => {
        const newTodo: ToDo = {
            id: todos.length,
            text: text,
            isDone: false,
        };

        setTodos([...todos, newTodo]);

        const notify = () => {
            return toast(`Добавил новую задачу: "${text}"`);
        };

        notify();
    };

    const updateTodo = (todoItem: ToDo) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === todoItem.id) {
                todo.isDone = !todo.isDone;

                const notify = () => {
                    return toast(`Изменил статус задачи: "${todoItem.text}" на "${todo.isDone ? 'Выполнена' : 'Не выполнена'}"`);
                }

                notify();
            }

            return todo;
        });

        setTodos(newTodos);
    };

    const deleteTodo = (todoItem: ToDo) => {
        const newTodos = todos.filter((todo) => {
            if (todoItem.id === todo.id) {
                const notify = () => {
                    return toast(`Удалил задачу: "${todoItem.text}"`);
                }

                notify();
            }

            return todo.id !== todoItem.id;
        });

        setTodos(newTodos);
    };

    return (
        <>
            <Header />
            <Form createNewTodo={createNewTodo} />
            <ToDoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
            <ToastContainer
                position="bottom-right"
                autoClose={8000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Flip}
            />
        </>
    );
};