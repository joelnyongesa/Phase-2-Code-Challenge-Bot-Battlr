import './App.css';
import LandingPage from './LandingPage';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<LandingPage/>}>
          <Route path='/'element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/bot-collection' element={<BotCollection/>}/>
          <Route path='/your-bot-army' element={<YourBotArmy/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
