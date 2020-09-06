import React from 'react';
import Header from './component/Header';
import Home from './component/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'
import About from './component/About';
import PostDetails from './component/PostDetails';
import NotFound from './component/NotFound';

const useStyles = makeStyles({});


function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/"><Home/></Route>
          {/* Really sorry for poor about page, i really didn,t have time...*/}
          <Route path="/about"><About></About></Route>
          <Route path="/post/:postId"><PostDetails></PostDetails></Route>
          <Route path="*"><NotFound></NotFound></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
