import React, { useEffect, useState } from "react";
import Youtube from 'react-youtube'
import "./Rowpost.css";
import { API_KEY, imageUrl } from "../../Constants/constants";
import axios from '../../axios'

function Rowpost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then(response => {
      // console.log(response.data);
      setMovies(response.data.results);
    }).catch(err => {
      alert('network Error')
    })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0])
      } else {
        console.log('Array empty')
      }
    })
  }
  return (
    <div className="row">
      <h1> {props.title}</h1>
      <div className="posters">
        {movies.map((obj) =>


          <img
            onAuxClick={() => handleMovie(obj.id)}
            className={props.isSmall ? 'smallposter' : "poster"}
            src={`${imageUrl + obj.backdrop_path}`}
            alt=""
          />
        )}
      </div>
      {urlId && <Youtube opts={opts} videoId={urlId.key} />}
    </div>
  );
}

export default Rowpost;
