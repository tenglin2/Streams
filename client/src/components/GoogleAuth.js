import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions/actions';


class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '458417327849-bkj3e1hfe5bmsjtkq6dj4ld1lfk89hj7.apps.googleusercontent.com',
        scope: 'email'        
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        
        // Since we use mapStateToProp is this.props.isSignedIn valid replacement?
        this.onAuthChange(this.auth.isSignedIn.get());
        
        // Look up listen method because it's weird. Automatically gets a parameter?
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = (event) => {
    console.log(event.target);
    this.auth.signIn();
  };

  onSignOutClick = (event) => {
    console.log(event.target);
    this.auth.signOut();
  };
  
  renderAuthButton() {
    console.log(`the status is ${this.props.isSignedIn}`)
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className='ui red google button'>
          <i className='google icon' />
          <p>Sign Out</p>
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className='ui red google button'>
          <i className='google icon' />
          <p>Sign In with Google</p>
        </button>
      );
    }
  }
  
  render() {
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    isSignedIn: state.auth.isSignedIn
  });
};


export default connect(mapStateToProps, { signIn: signIn, signOut: signOut })(GoogleAuth);
