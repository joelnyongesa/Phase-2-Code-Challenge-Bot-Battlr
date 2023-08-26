const YourBotArmy = ({yourBots, onDeleteBot}) => {
    /*
        Add an individual bot to my army by clicking on it. The selected bot should render in this component, and the bot can only be enlisted ONCE. The bot does not disappear from the BotsCollection.

        Create a state variable.
        Add using the spread operator.

    */
    //Loop over the bots to return the bots in YourBotArmy.
    const yourBotsList = yourBots.map((yourBot)=>{
        return(
            <div>
                <div key={yourBot.id} className="max-w-sm rounded overflow-hidden shadow-lg p-5 m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    <img src={yourBot.avatar_url} alt={yourBot.name} className="w-ful"/>
                    <h3 className="font-bold text-xl mb-2">{yourBot.name}</h3>
                    <p className="text-gray-700 text-base">Class: {yourBot.bot_class}</p>
                    <p>Catch phrase: {yourBot.catchphrase}</p>
                    <p>Created at: {yourBot.created_at}</p>
                    <p>Updated at: {yourBot.updated_at}</p>
                    <div className="flex flex-col justify-center items-center">
                        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-200 m-2">
                        <div className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: `${yourBot.health}%` }}>Health</div>
                        </div>

                        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-200 m-2">
                        <div className="bg-red-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: `${yourBot.damage}%` }}>Damage</div>
                        </div>

                        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-200 m-2">
                        <div className="bg-green-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: `${yourBot.armor}%` }}>Armor</div>
                        </div>
                    </div>
                    
                    <button className="text-white font-semibold bg-blue-500 rounded px-2 py-2 m-2 hover:bg-blue-700" onClick={()=>onDeleteBot(yourBot)}>Remove Bot From Collection</button>
                </div>
            </div>
        )
    })

   

    return ( 
        <>
            <h1 className="text-xl font-bold mt-5 mb-5">This is Your Bots List</h1>
            <div className="flex flex-wrap justify-center">
                {yourBotsList}
            </div>
            
        </>
     );
}
 
export default YourBotArmy;