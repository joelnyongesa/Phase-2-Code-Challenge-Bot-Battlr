import { useEffect, useState } from "react";

const BotCollection = () => {
    // Display the profiles of all the bots
    // Name, health, damage, armor, bot class, catchphrase, avatar_url, created_at, updated_at
    const [bots, setBots] = useState([])

    // Fetching the data
    useEffect(()=>{
        fetch('http://localhost:8001/bots')
        .then(r=>r.json())
        .then(data=>setBots(data))
        .then(e=>console.log(e))
    }, [])


    // Looping through the bots to display them.
    const botsList = bots.map((bot)=>{
        return(
            <div key={bot.id}>
                <img src={bot.avatar_url} alt={bot.name}/>
                <h3>{bot.name}</h3>
                <p>Class: {bot.bot_class}</p>
                <p>Catch phrase: {bot.catchphrase}</p>
                <p>Created at: {bot.created_at}</p>
                <p>Updated at: {bot.updated_at}</p>
                Health: <progress value={bot.health} max='100'/>
                Damage: <progress value={bot.damage} max='100'/>
                Armor: <progress value={bot.armor} max='100'/>

            </div>
        )
    })

    return ( 
        <div>
            <h1>List of all the Available Bots.</h1>
            {botsList}
        </div>
     );
}
 
export default BotCollection;