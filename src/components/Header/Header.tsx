import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';


export const Header = () => {
    const getActiveClass = ({isActive}: { isActive: boolean }): string => {
        return isActive ? `${styles.active} ${styles.link}` : styles.link;
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <NavLink className={getActiveClass} to="/">Home</NavLink>
                <NavLink className={getActiveClass} to="/list">ToDo</NavLink>
            </div>
        </header>
    );
};