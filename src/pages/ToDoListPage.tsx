import { Form } from '../components/Form/Form';
import { ToDoList } from '../components/ToDoList/ToDoList';
import { ToDo } from '../models/todo-item';
import { Flip, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { createAction, deleteAction, updateAction } from '../feature/todoList';


export const ToDoListPage = () => {
    const todoList = useSelector((state: RootState) => state.todoList.todos);
    const dispatch = useDispatch();

    const createNewTodo = (text: string) => {
        dispatch(createAction(text));
    };

    const updateTodo = (todoItem: ToDo) => {
        dispatch(updateAction(todoItem));
    };

    const deleteTodo = (todoItem: ToDo) => {
        dispatch(deleteAction(todoItem));
    };

    return (
        <>
            <Form createNewTodo={createNewTodo} />
            <ToDoList todos={todoList} updateTodo={updateTodo} deleteTodo={deleteTodo} />
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
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