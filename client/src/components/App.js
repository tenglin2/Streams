import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';


const PageOne = () => {
  return (
    <div>PageOne</div>
  );
};
const PageTwo = () => {
  return (
    <div>page two material</div>
  );
};

const App = function() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route exact path='/' component={PageOne} />
          <Route path='/pagetwo' component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

// We need to nest the App inside of a BrowserRouter which we usually nest in a BrowserRouter tag.
// React native also has a react-router-native which basically does the exact same thing.
// Also ther is react-router-redux which is not really necessary. Similar to the other package of react-redux. Not recommended by anyone.

// The react router dom package does not show up in the package.json file for some reason, but it does auto complete on import.

// It looks like the problem was the directory that I was in. The root folder does not have npm intialized but the client folder already comes with create-react-app.