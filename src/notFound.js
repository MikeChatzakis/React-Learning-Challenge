import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>Page not found!</p>
            <button><Link to="/"> Home </Link></button>
        </div>
       
    );
}
 
export default NotFound;