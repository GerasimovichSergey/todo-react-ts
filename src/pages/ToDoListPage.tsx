import { Header } from "../components/Header/Header";
import { Form } from "../components/Form/Form";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { ToDo } from "../models/todo-item";


export const ToDoListPage = () => {
    const todos: ToDo[] = [
        {
            id: 0,
            text: 'Первая задача',
            isDone: false,
        },
        {
            id: 1,
            text: 'Second задача',
            isDone: true,
        },
        {
            id: 2,
            text: 'a задача',
            isDone: true,
        },
    ];

    return (
        <>
            <Header />
            <Form />
            <ToDoList todos={todos} />
        </>
    );
};