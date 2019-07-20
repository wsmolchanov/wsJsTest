import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Register from './weather/Register';
import Login from './weather/Login';
// import WeatherPage from './weather/WeatherPage';
// import RequestsHistoryList from './weather/RequestsHistoryList';
// import RequestsHistoryDetails from './weather/RequestsHistoryDetails';
// import Edit from './Edit';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
         <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Register} />
            <Route path="/login" exact component={Login} />
            {/* <Route path="/weather" exact component={WeatherPage} />
            <Route path="/list" exact component={RequestsHistoryList} />
            <Route path="/details" exact component={RequestsHistoryDetails} />
            <Route path="/edit" exact component={Edit} /> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
};  

export default App;
