import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
   /*
   React Router DOM is an npm package that enables you to implement dynamic routing in a web app. It allows you to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React. React Router Dom is used to build single-page applications
   
  The major advantage of react-router is that the page does not have to be refreshed when a link to another page is clicked
  
  Router(usually imported as BrowserRouter):  It is the parent component that is used to store all of the other components. Everything within this will be part of the routing functionality
  
  Switch: Switch component is used to render only the first route that matches the location rather than rendering all matching routes.
  
  Route: This component checks the current URL and displays the component associated with that exact path. All routes are placed within the switch components.
  
  Link: Link component is used to create links to different routes.
  */
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/detail/:id">
            {/* to get the id of the movie from the url and pass it to the Detail component to get the details of the movie and display it  */}
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;