/*Guest Registry allows vistors to register during service or the food pantry
1. create a if...else statement that toggles between visitor froms and food pantry forms
2. link subscription to webtsite for quarterly newsletters
3. submit button -thank you message- to also navigates to dashboard page  */
const GuestRegistry = ()  =>{
    return (
        <div>
            <h1>Welcome to New Beginning Apostolic Church!</h1>
            <h2>Are you here for service or the food pantry?</h2>
            <button>Service</button>
            <button>Food Pantry</button>
        </div>
    );
};

export default GuestRegistry