import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';

import Container from './components/Container';
import Header from './components/Header';

function App() {
  return (
    <Container p={[3, 4]}>
      <Router>
        <Header />
        <Routes />
      </Router>
    </Container>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
