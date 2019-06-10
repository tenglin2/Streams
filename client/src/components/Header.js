import React from 'react';
import {Link} from 'react-router-dom';

// import Login from './Login';

const Header = function() {
  return (
    <div className='ui secondary pointing menu'>

      <Link to='/' className='item'>Streamer</Link>    
      <div className='right menu'>
        <Link to='/' className='item'>All Streams</Link>
        {/* <LoginButton /> */}
      </div>
    </div>
  );
};

export default Header;