import React, { Component } from "react";
import { removeMovieFavorite } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {movies.map(movie => (
            <div
              key={movie.id}
              className='movie-container'>
              <div className='movie-item-container'>
                <span className='listItem'>
                  <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                </span>
              </div>
              <div className='movie-button-container'>
                <button
                  className='favButton'
                  onClick={() => {
                    this.props.removeMovieFavorite(movie.title);
                  }}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.moviesFavourites,
});

const mapDispatchToProps = dispatch => ({
  removeMovieFavorite: movie => {
    dispatch(removeMovieFavorite(movie));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
