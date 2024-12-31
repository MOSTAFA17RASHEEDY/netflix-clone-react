import "./CardTitls.css";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
function CardTitls({ title, category }) {
  const [apiData, setApiData] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const cardsRef = useRef();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWRkZTlmNjJkZjljZTdlMDhlZmNmZjMyMjg5MzI4NSIsIm5iZiI6MTczNTM5NjEzNC45MTYsInN1YiI6IjY3NzAwYjI2Zjk0NTRlZWIxZDkyY2NiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A61a9qo2bWolbhRrzBe3uZRcabGN2aMerc_wn93umXE",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => toast.error(err.message));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);
  return (
    <div className="titleCards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="cardList" ref={cardsRef}>
        {apiData ? (
          apiData.map((movie) => {
            return (
              <Link to={`/player/${movie.id}`} key={movie.id} className="card">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt=""
                />
                <p>{movie.original_title}</p>
              </Link>
            );
          })
        ) : (
          <div className="spanContainer">
            <span className="loader"></span>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardTitls;
