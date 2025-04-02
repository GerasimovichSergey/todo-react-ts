import styles from './ListItem.module.scss';
import { ToDo } from '../../models/todo-item';
import { Link } from 'react-router-dom';


export const ListItem = (props: { todo: ToDo }) => {
    return (
        <Link className={`${styles.link} ${props.todo.isDone ? styles.done : styles.notDone}`}
           to={`/list/${props.todo.id}`}
        >
            {props.todo.text}
        </Link>
    );
};