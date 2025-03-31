import styles from './ListItem.module.scss';
import { ToDo } from '../../models/todo-item';


export const ListItem = (props: { todo: ToDo }) => {
    return (
        <a
            className={`${styles.link} ${props.todo.isDone ? styles.done : styles.notDone}`}
            href={`/list/${props.todo.id}`}
        >
            {props.todo.text}
        </a>
    );
};