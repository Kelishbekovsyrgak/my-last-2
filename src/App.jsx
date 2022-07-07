import img from "./image1.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App__container">
        <div className="App__title">
          <h2>Features</h2>
          <p>
            Some of the features and advantages that we provide for those of you
            who store data in this Data Warehouse.
          </p>
        </div>
        <div className="App__card">
          <div className="Card__block">
            <div className="Right__info">
              <img src={img} />
            </div>
            <div className="Left__info">
              <h3>Search Data</h3>
              <p>
                Don’t worry if your data is very large, the Data Warehoue
                provides a search engine, which is useful for making it easier
                to find data effectively saving time.
              </p>
              <a>Learn more</a>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
