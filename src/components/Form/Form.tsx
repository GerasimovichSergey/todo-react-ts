import styles from './Form.module.scss';


export const Form = () => {
    return (
        <div className={styles.wrapper}>
            <form action="#">
                <label>
                    <input className={styles.input} type="text" />
                    <button className={styles.button}></button>
                </label>
            </form>
        </div>
    );
};