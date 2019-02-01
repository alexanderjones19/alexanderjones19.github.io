import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <React.Fragment>
            <Nav />
            <Switch>
              <Route exact path="/" component={About} />
            </Switch>
            <Footer />
          </React.Fragment>
        </Router>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
