import { ToDoListItem } from './ToDoListItem/ToDoListItem';
import { ToDo } from '../../models/todo-item';
import { ToDoListCompleted, ToDoListContainer, ToDoListFailed } from './ToDoList.styled';


export const ToDoList = (props: { todos: ToDo[], updateTodo: Function, deleteTodo: Function }) => {
    const unCheckedList = () => {
        return props.todos
            .filter((item) => {
                return !item.isDone;
            })
            .map((item) => {
                return (
                    <ToDoListItem toDoItem={item} key={item.id}
                                  updateTodo={props.updateTodo}
                                  deleteTodo={props.deleteTodo}
                    />
                );
            });
    };

    const checkedList = () => {
        return props.todos
            .filter((item) => {
                return item.isDone;
            })
            .map((item) => {
                return (
                    <ToDoListItem toDoItem={item} key={item.id}
                                  updateTodo={props.updateTodo}
                                  deleteTodo={props.deleteTodo}
                    />
                );
            });
    };

    return (
        <ToDoListContainer>
            <ToDoListFailed>
                {unCheckedList()}
            </ToDoListFailed>
            <ToDoListCompleted>
                {checkedList()}
            </ToDoListCompleted>
        </ToDoListContainer>
    );
};