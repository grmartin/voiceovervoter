import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import BooksIndexContainer from './BooksIndexContainer';
import BookShowPage from '../components/BookShowPage';

const App = ({ }) => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={BooksIndexContainer} />
          <Route exact path='/books' component={BooksIndexContainer} />
          <Route exact path='/books/:id' component={BookShowPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
