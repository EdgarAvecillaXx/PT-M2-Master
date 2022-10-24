import axios from "axios";

export const getMovies = title => async dispatch => {
  try {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?&apikey=f1587779&s=${title}`
    );
    dispatch({ type: "GET_MOVIES", payload: data });
  } catch (err) {
    console.warn(err);
  }
};

export const getMovieDetail = Id => async dispatch => {
  try {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?&apikey=f1587779&i=${Id}`
    );
    dispatch({ type: "GET_MOVIE_DETAIL", payload: data });
  } catch (err) {
    console.warn(err);
  }
};

export const addMovieFavorite = payload => {
  return { type: "ADD_MOVIE_FAVORITE", payload };
};

export const removeMovieFavorite = payload => {
  return { type: "REMOVE_MOVIE_FAVORITE", payload };
};
