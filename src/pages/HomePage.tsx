import { ToDo } from '../models/todo-item';
import { ListItem } from '../components/ListItem/ListItem';


interface ComponentProps {
    todos: ToDo[],
}

export const HomePage = (props: ComponentProps) => {
    return (
        <div className="container">
            {props.todos.map((todo: ToDo, index: number) => {
                return (
                    <ListItem todo={todo} key={index} />
                );
            })}
        </div>
    );
};