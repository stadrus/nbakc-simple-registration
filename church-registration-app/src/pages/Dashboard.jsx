/* user should see three buttons
    1. Guest Registry - navigates to guest registry
    2. Today's Guest - generates list of visitors
    3. Food Pantry List - generates list a food pantry guest
*/
const Dashboard = () =>{
    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Visitor</h2>
            <button>Guest Registry</button>
            <button>Food Pantry Registry</button>
            <button>Today's Visitors</button>
        </div>
    )
}
export default Dashboard