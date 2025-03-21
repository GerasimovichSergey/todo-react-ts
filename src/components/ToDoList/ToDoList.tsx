import { ToDoListItem } from "./ToDoListItem/ToDoListItem";
import './ToDoList.scss';
import { ToDo } from "../../models/todo-item";


export const ToDoList = (props: { todos: ToDo[] }) => {
    const unCheckedList = () => {
        return props.todos
            .filter((item) => {
                return !item.isDone;
            })
            .map((item, index) => {
                return (
                    <ToDoListItem toDoItem={item} key={index} />
                );
            });
    };

    const checkedList = () => {
        return props.todos
            .filter((item) => {
                return item.isDone;
            })
            .map((item, index) => {
                return (
                    <ToDoListItem toDoItem={item} key={index} />
                );
            });
    };

    return (
        <div className="todo-container">
            <ul className="todo-list failed">
                {unCheckedList()}
            </ul>
            <ul className="todo-list completed">
                {checkedList()}
            </ul>
        </div>
    );
};