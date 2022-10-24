import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getMovies, addMovieFavorite } from "../../actions";
import "./Buscador.css";

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
    this.setState({ title: "" });
  }

  render() {
    const { title } = this.state;
    const { movies } = this.props;
    const { moviesFav } = this.props;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={e => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">
              Película:{" "}
            </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={e => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {movies &&
            movies.map(movie => (
              <div key={movie.imdbID} className="movie-container">
                <div className="movie-item-container">
                  <span className="listItem">
                    <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
                  </span>
                </div>
                <div className="movie-button-container">
                  {!moviesFav.some(fav => fav.id === movie.imdbID) ? (
                    <button
                      className="favButton"
                      onClick={() => {
                        this.props.addMovieFavorite({
                          title: movie.Title,
                          id: movie.imdbID,
                        });
                      }}>
                      Fav
                    </button>
                  ) : (
                    <button className="favButton" disabled={true}>
                      Added
                    </button>
                  )}
                </div>
              </div>
            ))}
        </ul>
      </div>
    );
  }
}

const mapState = state => ({
  movies: state.moviesLoaded,
  moviesFav: state.moviesFavourites,
});

const mapDispatch = dispatch => ({
  addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
  getMovies: title => dispatch(getMovies(title)),
});

export default connect(mapState, mapDispatch)(Buscador);
