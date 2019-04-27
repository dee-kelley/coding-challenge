import React, {Component}from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import counter from "./components/counter";
import Referrals from "./components/referrals";
import Create from "./components/create";
import Edit from "./components/edit";


class App extends Component {
  render(){
  return (
    <Router>
    <div className="container">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    {/* <a className="navbar-brand" href="www.google.com" target="_blank">
      <p>HWAT</p>
    </a> */}
    <Link to="/" className="navbar-brand">Referral App</Link>
    {/* <div className="collapse nav-collapse"> */}
      <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
          <Link to="/" className="nav-link">Referrals</Link>
        </li>
        <li className="navbar-item">
          <Link to="/create" className="nav-link">Create</Link>
        </li>
        <li className="navbar-item">
          <Link to="/edit/:id" className="nav-link">Edit</Link>
        </li>
      </ul>
    {/* </div> */}
</nav>
    
    <Route path="/" exact component={Referrals} />
    <Route path="/edit/:id" component={Edit} />
    <Route path="/create" component={Create} />
    {/* <Route path="/delete" component={Delete} /> */}
    </div>
    
    </Router>
  );
}
}

export default App;
