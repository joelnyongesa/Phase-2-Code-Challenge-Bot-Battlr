import { Link, Outlet } from "react-router-dom";

const LandingPage = () => {
    return ( 
        <div>
            <div className="flex justify-between m-5">
                <h1 className="w-1/2 text-5xl font-bold">Bot Battlr</h1>
                <nav className="w-1/2">
                    <button className="bg-blue-500 py-2 px-4 rounded ml-3 mr-3 hover:bg-blue-700 text-white font-bold"><Link to='/home'>Home</Link></button>
                    <button className="bg-blue-500 py-2 px-4 rounded ml-3 mr-3 hover:bg-blue-700 text-white font-bold"><Link to='/bot-collection'>Bot Collection</Link></button>
                    <button className="bg-blue-500 py-2 px-4 rounded ml-3 mr-3 hover:bg-blue-700 text-white font-bold"><Link to='/your-bot-army'>Your Bot Army</Link></button>
                </nav>
            </div>
            <Outlet></Outlet>
        </div>
     );
}
 
export default LandingPage;