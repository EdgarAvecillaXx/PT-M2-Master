import React from 'react';
import { connect } from 'react-redux';
import { getAllUserPosts } from '../../actions';
import './UserPosts.css';

// mostramos los posts de un usuario en particular
// Renderiza los comentarios

export class UserPosts extends React.Component {
  componentDidMount() {
    // prettier-ignore
    const { match: { params: {userid }}} = this.props;
    this.props.getAllUserPosts(userid);
  }

  render() {
    // prettier-ignore
    const { match: { params: {userid }}} = this.props;
    const [user] = this.props.users.filter(
      user => user.id === parseInt(userid)
    );

    console.log(user);
    return (
      <div className='details'>
        <h4 className='title'>Posts del usuario {user.username}</h4>
        <div className='container'>
          <span className='title'>Post</span>
          <p className='card'>contenido</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userPosts: state.userPosts,
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  getAllUserPosts: id => dispatch(getAllUserPosts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);
