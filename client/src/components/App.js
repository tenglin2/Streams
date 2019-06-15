import React from 'react';
import { Router, Route } from 'react-router-dom';

import Header from './Header';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';

import history from '../history';

const App = function() {
  return (
    <div className='ui container'>
      <h2>Somethign show up</h2>
      <Router history={history}>
        <h1>HEADER VISIBLE IN EVERY ROUTE</h1>
        <div>
          <Header />
          <Route exact={true} path='/' component={StreamList} />
          <Route exact={true} path='/streams/new' component={StreamCreate} />
          <Route exact={true} path='/streams/edit/:id' component={StreamEdit} />
          <Route exact={true} path='/streams/delete' component={StreamDelete} />
          <Route exact={true} path='/streams/show' component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;

// We need to nest the App https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.cssinside of a BrowserRouter which we usually nest in a BrowserRouter tag.
// React native also has a react-router-native which basically does the exact same thing.
// Also ther is react-router-redux which is not really necessary. Similar to the other package of react-redux. Not recommended by anyone.

// The react router dom package does not show up in the package.json file for some reason, but it does auto complete on import.

// It looks like the problem was the directory that I was in. The root folder does not have npm intialized but the client folder already comes with create-react-app.


// 458417327849-bkj3e1hfe5bmsjtkq6dj4ld1lfk89hj7.apps.googleusercontent.com
