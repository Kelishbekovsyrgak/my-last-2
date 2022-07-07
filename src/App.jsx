import img1 from "./image1.svg";
import img2 from "./image2.svg";
import img3 from "./image3.svg";
import img4 from "./image4.svg";
import strelka from "./strelka.svg";
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
              <img src={img1} />
            </div>
            <div className="Left__info">
              <h3>Search Data</h3>
              <p>
                Don’t worry if your data is very large, the Data Warehoue
                provides a search engine, which is useful for making it easier
                to find data effectively saving time.
              </p>
              <div className="info__footer">
                <a href="#">Learn more</a>
                <img src={strelka} />
              </div>
            </div>
          </div>

          <div className="Card__block">
            <div className="Right__info">
              <img src={img2} />
            </div>
            <div className="Left__info">
              <h3>24 Hours Access</h3>
              <p>
                Access is given 24 hours a full morning to night and meet again
                in the morning, giving you comfort when you need data when
                urgent.
              </p>
              <div className="info__footer">
                <a href="#">Learn more</a>
                <img src={strelka} />
              </div>
            </div>
          </div>

          <div className="Card__block">
            <div className="Right__info">
              <img src={img3} />
            </div>
            <div className="Left__info">
              <h3>Print Out</h3>
              <p>
                Print out service gives you convenience if someday you need
                print data, just edit it all and just print it..
              </p>
              <div className="info__footer">
                <a href="#">Learn more</a>
                <img src={strelka} />
              </div>
            </div>
          </div>

          <div className="Card__block">
            <div className="Right__info">
              <img src={img4} />
            </div>
            <div className="Left__info">
              <h3>Security Code</h3>
              <p>
                Data Security is one of our best facilities. Allows for your
                files to be safer. The file can be secured with a code or
                password that you created, so only you can open the file.
              </p>
              <div className="info__footer">
                <a href="#">Learn more</a>
                <img src={strelka} />
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
