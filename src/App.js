import "./App.css";
import images from "./images";

function App() {
  return (
    <div className="App">
      <div className="banner">
        <div className="bannerText">
          <h1>My Expense Tracker</h1>
          <text>
            My expense tracker is a free money tracking tool where you can jot
            down all your cash inflows and outflows, that would help you run
            your business or personal life without the tension of over expenses.
          </text>
        </div>
        <div className="bannerImg">
          <img src={images.dashboard} alt=""/>
          <h2>Keep Track On Your Finances</h2>
        </div>
      </div>
      <div className="main">
        <img src={images.body} alt=""/>
        <div className="tracker">
          
        </div>
      </div>
    </div>
  );
}

export default App;
