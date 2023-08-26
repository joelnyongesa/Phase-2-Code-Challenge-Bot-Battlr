import './App.css';
import LandingPage from './LandingPage';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import NotFound from './NotFound';
import { useState } from 'react';

function App() {
  // State variables for my bots that have been clicked on.

  const [myBots, setMyBots] = useState([])
  // Handling adding of the bot.

  function handleAddBot(bot){
    // Bot can only be enlisted ONCE. Check if the bot is already in the myBots list
    const botExists = myBots.some((myBot) => myBot.id === bot.id);

    // If the bot is not in the list, add it
    if (!botExists) {
      setMyBots([...myBots, bot]);
      alert('Bot added to your collection!')
    } else{
      alert('Bot already exists in your collection!')
    }
  }

  // console.log(myBots)
  
  // To handle deleting/releasing a bot from the collection of bots, NON PERSISTENT..
  function handleBotRelease(bot){
    setMyBots(myBots.filter((myBot)=>bot.id !== myBot.id))
  }
  


  return (
    <div className="App">
      <Routes>
        <Route element={<LandingPage/>}>
          <Route path='/'element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/bot-collection' element={<BotCollection onAddBot={handleAddBot}/>}/>
          <Route path='/your-bot-army' element={<YourBotArmy yourBots={myBots} onDeleteBot={handleBotRelease}/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
