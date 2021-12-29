import PropTypes from "prop-types";
import { Link, Outlet } from "react-router-dom";

function Movie({id, title, coverImage,genres, summary, detail, code}) {
    return (
    <div>
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
          </h2>
        <img src={coverImage} alt={title} />
        <h3>Genres</h3>
        <ul>
          {genres.map((genre, index) => <li key={index}>{genre}</li>)}
        </ul>
        {detail && code != ""?<div>
                <h3> Trailer </h3>
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${code}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>:null}
        <h3>{detail?'Description':'Summary'}</h3>
        <p>{summary}</p>
        </div> );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.string.isRequired,
    detail: PropTypes.bool.isRequired,
    code: PropTypes.string
}

export default Movie;