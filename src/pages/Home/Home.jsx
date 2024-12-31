import "./Home.css";
import NavBar from "../../components/Nav Bar/NavBar";
import BackGroundIMG from "../../assets/Bg.jpg";
import CardTitls from "../../components/CardsTitls/CardTitls";
import Footer from "../../components/Footer/Footer";

function Home({ setIsLoggedIn }) {
  return (
    <div className="home">
      <NavBar setIsLoggedIn={setIsLoggedIn} />
      <div className="panner">
        <img src={BackGroundIMG} alt="" className="pannerimg" />
        <div className="pannerContent">
          <h1>Unlimited movies, TV shows, and more</h1>
          <h3>Watch anywhere, anytime, with Netflix.</h3>
          <p>
            Ready to watch? Enter the movie world now and click the show movies
            button.
          </p>
          <div className="pannerBtn">
            <button className="Btn">
              <a href="#cardsOfMovies">Show Movies</a>
            </button>
          </div>
        </div>
      </div>
      <div id="cardsOfMovies" className="cardsOfMovies">
        <CardTitls />
        <CardTitls title={"Upcoming"} category={"upcoming"} />
        <CardTitls title={"Only on Netflix"} category={"top_rated"} />
        <CardTitls title={"Blockbuster Movies"} category={"popular"} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
