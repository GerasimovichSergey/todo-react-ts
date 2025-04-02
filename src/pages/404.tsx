import { Link } from 'react-router-dom';


export const NotFound = () => {
    return (
        <div className="container">
            <h1>404 Not Found this page!</h1>
            <Link to="/">To Home Page</Link>
        </div>
    );
};