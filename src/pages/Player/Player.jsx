import React, { useEffect, useState } from "react";
import "./Player.css";
import { useNavigate, useParams } from "react-router-dom";
function Player() {
  const { id } = useParams();
  const [apiData, setApiData] = useState({
    name: "",
    published_at: "",
    key: "",
    type: "",
  });
  const navigate = useNavigate();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWRkZTlmNjJkZjljZTdlMDhlZmNmZjMyMjg5MzI4NSIsIm5iZiI6MTczNTM5NjEzNC45MTYsInN1YiI6IjY3NzAwYjI2Zjk0NTRlZWIxZDkyY2NiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A61a9qo2bWolbhRrzBe3uZRcabGN2aMerc_wn93umXE",
    },
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <i onClick={() => navigate(-2)} class="fa-solid fa-arrow-left"></i>
      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}`}
        frameborder="0"
        title="trailer"
        allowFullScreen
        width="90%"
        height="90%"
      ></iframe>
      <div className="playerInfo">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}

export default Player;
