const initialState = {
  moviesFavourites: [],
  moviesLoaded: [],
  movieDetail: {},
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_MOVIES":
      return {
        ...state,
        moviesLoaded: payload.Search,
      };
    case "GET_MOVIE_DETAIL":
      return {
        ...state,
        movieDetail: payload,
      };
    case "ADD_MOVIE_FAVORITE":
      if (
        !state.moviesFavourites.some(movie => movie.title === payload.title)
      ) {
        return {
          ...state,
          moviesFavourites: state.moviesFavourites.concat(payload),
        };
      } else {
        return state;
      }
    case "REMOVE_MOVIE_FAVORITE":
      return {
        ...state,
        moviesFavourites: state.moviesFavourites.filter(
          movie => movie.title !== payload
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
