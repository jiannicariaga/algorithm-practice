import React from 'react';
import { fetchUserData, cancelFetch } from './dataFetcher';
import { Userlist } from './Userlist';

export class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null
    };
    this.loadUserData = this.loadUserData.bind(this);
  }

  loadUserData() {
    const { username } = this.props;
    this.fetchId = fetchUserData(username, userData => {
      this.setState({ userData });
    });
  }

  componentDidMount() {
    this.loadUserData();
  }

  componentDidUpdate(prevProps) {
    const { username } = this.props;
    if (username !== prevProps.username) {
      cancelFetch(this.fetchID);
      this.loadUserData();
    }
  }

  componentWillUnmount() {
    cancelFetch(this.fetchId);
  }

  render() {
    const { userData } = this.state;
    const isLoading = userData === null;
    const className = isLoading ? 'Profile loading' : 'Profile';
    const name = isLoading ? 'Loading...' : userData.name;
    const bio = isLoading ? 'Loading...' : userData.bio;
    const friends = isLoading ? [] : userData.friends;
    const picture = isLoading ? '' : userData.profilePictureUrl;
    return (
      <div className={className}>
        <div className='profile-picture'>
          <img
            src={picture}
            alt='' />
        </div>
        <div className='profile-body'>
          <h2>{name}</h2>
          <h3>&#64;{this.props.username}</h3>
          <p>{bio}</p>
          <h3>My friends</h3>
          <Userlist
            usernames={friends}
            onChoose={this.props.onChoose} />
        </div>
      </div>
    );
  }
}
