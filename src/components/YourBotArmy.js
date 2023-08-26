const YourBotArmy = ({yourBots, onDeleteBot}) => {
    /*
        Add an individual bot to my army by clicking on it. The selected bot should render in this component, and the bot can only be enlisted ONCE. The bot does not disappear from the BotsCollection.

        Create a state variable.
        Add using the spread operator.

    */
    //Loop over the bots to return the bots in YourBotArmy.
    const yourBotsList = yourBots.map((yourBot)=>{
        return(
            <div key={yourBot.id} onClick={()=>onDeleteBot(yourBot)}>
                <img src={yourBot.avatar_url} alt={yourBot.name}/>
                <h3>{yourBot.name}</h3>
                <p>Class: {yourBot.bot_class}</p>
                <p>Catch phrase: {yourBot.catchphrase}</p>
                <p>Created at: {yourBot.created_at}</p>
                <p>Updated at: {yourBot.updated_at}</p>
                Health: <progress value={yourBot.health} max='100'/>
                Damage: <progress value={yourBot.damage} max='100'/>
                Armor: <progress value={yourBot.armor} max='100'/>
            </div>
        )
    })

   

    return ( 
        <div>
            <h1>This is Your Bots List</h1>
            {yourBotsList}
        </div>
     );
}
 
export default YourBotArmy;