import './navbar';
import Navbar from './navbar';
import Home from './home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './create';
import BlogDetails from './blogDetails';
import NotFound from './notFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/create">
              <Create/>
            </Route>
            <Route exact path="/blog/:id">
              <BlogDetails/>
            </Route>
            <Route exact path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
