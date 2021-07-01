import { Component } from "react";
import Desc from "./views/Desc";
import Tes from "./views/Tes";
import { Route, Router } from "react-router";
import { Link } from "react-router-dom";
class App extends Component<any, any> {
  render() {
    return (
      <>
        <h2>hello </h2>
        <Desc name="cyq" />
        <Tes />
        <ul>
          <li>
            <Link to="/desc">desc</Link>
          </li>
          <li>
            <Link to="/tes">tes</Link>
          </li>
        </ul>
        <ul>
          <li></li>
        </ul>
      </>
    );
  }
}
export default App;
