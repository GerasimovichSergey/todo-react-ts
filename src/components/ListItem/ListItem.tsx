import { ToDo } from '../../models/todo-item';
import { ListItemLink } from './ListItem.styled';


export const ListItem = (props: { todo: ToDo }) => {
    return (
        <ListItemLink $isDone={props.todo.isDone} to={`/list/${props.todo.id}`} target="_blank" rel="noreferrer">
            {props.todo.text}
        </ListItemLink>
    );
};