import React from 'react';

class GoogleAuth extends React.Component {
  state = {isSignedIn: null};
  
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '458417327849-bkj3e1hfe5bmsjtkq6dj4ld1lfk89hj7.apps.googleusercontent.com',
        scope: 'email'        
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        
        this.setState({
          isSignedIn: this.auth.isSignedIn.get()
        });
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = () => {
    this.setState({isSignedIn: this.auth.isSignedIn.get()});
  };
  
  renderAuthButton() {
    console.log(`the status is ${this.state.isSignedIn}`)
    if (this.state.isSignedIn === null) {
      return (
        <div>
          <p>Not sure if signed in</p>
        </div>
      );
    } else if (this.state.isSignedIn) {
      return (
        <button className='ui red google button'>
          <i className='google icon' />
          <p>Sign Out</p>
        </button>
      );
    } else {
      return (
        <button className='ui red google button'>
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

export default GoogleAuth;


