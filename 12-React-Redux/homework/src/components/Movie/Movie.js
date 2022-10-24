import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {
  componentDidMount() {
    //prettier-ignore
    this.props.getMovieDetail(this.props.match.params.id);
  }

  render() {
    const { movie } = this.props;
    return (
      <>
        {movie.imdbID !== this.props.match.params.id ? (
          <span>Loading</span>
        ) : (
          <div className='movie-card'>
            <div className='container'>
              <div className='details'>
                <span className='title'>
                  {movie.Title}
                  <span>{movie.Rated}</span>
                </span>
                <p style={{ fontSize: '16px' }}>{movie.Year}</p>
              </div>
              <div className='column'>
                <p className=''>{movie.Plot}</p>
              </div>
              <div className='container2'>
                <div className='img'>
                  <img
                    src={movie.Poster}
                    alt='Poster'
                  />
                </div>
                <div className='description'>
                  <ul>
                    <li>{movie.Director}</li>
                    <li>{movie.BoxOffice}</li>
                    <li>{movie.imdbRating}</li>
                    <li>{movie.Genre}</li>
                    <li>{movie.Awards}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movieDetail,
});

const mapDispatchToProps = dispatch => ({
  getMovieDetail: id => dispatch(getMovieDetail(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
