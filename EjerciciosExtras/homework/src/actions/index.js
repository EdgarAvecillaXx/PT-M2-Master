export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_ALL_USERS_POST = 'GET_ALL_USERS_POST';
export const GET_ALL_COMMENTS_POST = 'GET_ALL_COMMENTS_POST';

export const getAllUsers = () => async dispatch => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  dispatch({ type: GET_ALL_USERS, payload: data });
};

export const getAllPosts = () => async dispatch => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  dispatch({ type: GET_ALL_POSTS, payload: data });
};

export const getAllUserPosts = id => async dispatch => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/?userId=${id}`
  );
  const data = await res.json();
  dispatch({ type: GET_ALL_USERS_POST, payload: data });
};

export const getAllCommentsPost = id => async dispatch => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments/?postId=${id}`
  );
  const data = await res.json();
  dispatch({ type: GET_ALL_COMMENTS_POST, payload: data });
};
