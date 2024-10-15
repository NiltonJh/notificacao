import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotificationProvider from './NotificationContext';
import NotificationIcon from './components/NotificationIcon';
import NotificationList from './components/NotificationList';

function App() {
  return (
    <NotificationProvider>
      <Router>
        <div className="app">
          <NotificationIcon />
          <Switch>
            <Route path="/notifications" component={NotificationList} />
            {/* Outras rotas */}
          </Switch>
        </div>
      </Router>
    </NotificationProvider>
  );
}

export default App;
