import React, { Component } from 'react';

// import * as ROLES from '../../constants/roles';
// import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';

class AdminPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      loading: false,
      users: []
    };
  }

  componentDidMount(){
    this.setState({ loading: true });

    this.props.firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val();

      const usersList = Object.keys(usersObject).map(key=>({
        ...usersObject[key],
        uid: key
      }))

      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }

  componentWillUnmount(){
    this.props.firebase.users().off();
  }

	render(){
    const { users, loading } = this.state;

    return(
      <div className="App">
        <div className="PageName">Admin Page</div>
        <div className="UserList">
          <div className="Registers">Registered users: </div>
          {loading && <ul>Loading ...</ul>}
          <UserList users={users} />
        </div>
      </div>
    );
  }
}

const UserList = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.uid}>
        {user.username}
      </li>
    ))}
  </ul>
);

// const condition = authUser =>
//  authUser;// && authUser.roles.includes(ROLES.ADMIN);

export default withFirebase(AdminPage); // withAuthorization(condition)(AdminPage);