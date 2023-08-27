import { useEffect, useState } from "react";

const BotCollection = ({onAddBot}) => {
    // Display the profiles of all the bots
    // Name, health, damage, armor, bot class, catchphrase, avatar_url, created_at, updated_at
    const [bots, setBots] = useState([])

    // Fetching the data
    useEffect(()=>{
        fetch('https://bot-battlr-api-a7ji.onrender.com/bots')
        .then(r=>r.json())
        .then(data=>setBots(data))
        .then(e=>console.log(e))
    }, [])


    // Looping through the bots to display them.
    const botsList = bots.map((bot)=>{
        return(
            <div key={bot.id} className="max-w-sm rounded overflow-hidden shadow-lg p-5 m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <img src={bot.avatar_url} alt={bot.name} className="w-ful"/>
                <h3 className="font-bold text-xl mb-2">{bot.name}</h3>
                <p className="text-gray-700 text-base">Class: {bot.bot_class}</p>
                <p>Catch phrase: {bot.catchphrase}</p>
                <p>Created at: {bot.created_at}</p>
                <p>Updated at: {bot.updated_at}</p>
                <div className="flex flex-col justify-center items-center">
                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-200 m-2">
                    <div className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: `${bot.health}%` }}>Health</div>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-200 m-2">
                    <div className="bg-red-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: `${bot.damage}%` }}>Damage</div>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-200 m-2">
                    <div className="bg-green-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: `${bot.armor}%` }}>Armor</div>
                    </div>
                </div>
                
                <button className="text-white font-semibold bg-blue-500 rounded px-2 py-2 m-2 hover:bg-blue-700" onClick={()=>{onAddBot(bot)}}>Add Bot to Collection</button>
                <button className="text-white font-semibold bg-blue-500 rounded px-2 py-2 m-2 hover:bg-blue-700" onClick={() => { handlePersistentDelete(bot.id); updateBotsList(); }}>Delete Bot</button>
            </div>
        )
    })

    // Persistently deleting the bots from the collection to the database.
    function handlePersistentDelete(botId){
        fetch(`https://bot-battlr-api-a7ji.onrender.com/bots/${botId}`, {
            method: 'DELETE'
        })
        .then(r=>r.json())
        .then(data => console.log(data))
        .catch(e=>console.log(e))
    }

    // function to update the state of the bots.
    function updateBotsList(botId){
        setBots(bots.filter((bot)=>bot.id !== botId ))
    }

    return ( 
        <>
            <h2 className="text-xl font-bold mt-5 mb-5">List of all the available Bots</h2>
            <div className="flex flex-wrap justify-center">
            {botsList}
            </div>
        </>
        
     );
}
 
export default BotCollection;