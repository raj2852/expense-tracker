import "./App.css";
import images from "./images";
import { Credit, Statement, InputArea } from "./components";
import { GlobalProvider } from "./context/globalState";
function App() {
 
  return (
    <GlobalProvider>
    <div className="App">
      <h1>My Expense Tracker</h1>
          <text>
            My expense tracker is a free money tracking tool where you can jot
            down all your cash inflows and outflows, that would help you run
            your business or personal life without the tension of over expenses.
          </text>
      <div className="main">
        <img src={images.body} alt="money" style={{width:"50%",}}/>
        
        
        <div className="tracker">
        <div className="tabhead">
        <Credit/>   
          </div>
          <Statement/>
          <text style={{marginTop:"10px"}}>Add a new statement:</text>
          <InputArea/>     
        </div>
        
      </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
