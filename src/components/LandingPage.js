import { Link, Outlet } from "react-router-dom";

const LandingPage = () => {
    return ( 
        <div>
            <nav>
                <button><Link to='/home'>Home</Link></button>
                <button><Link to='/bot-collection'>Bot Collection</Link></button>
                <button><Link to='/your-bot-army'>Your Bot Army</Link></button>
            </nav>
            <Outlet></Outlet>
        </div>
     );
}
 
export default LandingPage;