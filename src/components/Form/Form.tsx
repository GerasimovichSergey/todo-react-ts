import styles from './Form.module.scss';
import { useState } from 'react';


export const Form = (props: { createNewTodo: Function }) => {
    const [taskText, setTaskText] = useState<string>('');

    const formSubmit = () => {
        if (taskText) {
            props.createNewTodo(taskText);
            setTaskText('');
        }
    };

    return (
        <div className={styles.wrapper}>
            <form action="#" onSubmit={formSubmit}>
                <label>
                    <input value={taskText} className={styles.input} type="text"
                           onChange={(event) => setTaskText((event.target.value))}
                    />
                    <button className={styles.button}></button>
                </label>
            </form>
        </div>
    );
};