import "./App.css";
import { NavbarComponent } from "./Components/Navbar";
import { Route, Switch, HashRouter } from "react-router-dom";
import { Home } from "./Components/Home";
import { Page1 } from "./Components/Page1";
import { Page2 } from "./Components/Page2";
import { Page3 } from "./Components/Page3";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/page1" component={Page1} />
          <Route exact path="/page2" component={Page2} />
          <Route exact path="/page3" component={Page3} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
