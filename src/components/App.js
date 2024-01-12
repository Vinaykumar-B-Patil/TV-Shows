// src/components/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import ShowList from './ShowList';
import ShowDetails from './ShowDetails';

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => {
        setShows(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Router>
      <div>
        <h1>TV Shows</h1>
        <Switch>
          <Route path="/" exact render={() => <ShowList shows={shows} />} />
          <Route path="/show/:id" render={(props) => <ShowDetails {...props} shows={shows} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
