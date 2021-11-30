import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Project1 from "./components/AllprojectsDetails/Project1";
import Project2 from "./components/AllprojectsDetails/Project2";
import Project3 from "./components/AllprojectsDetails/Project3";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/project1">
            <Project1></Project1>
          </Route>
          <Route path="/project2">
            <Project2></Project2>
          </Route>
          <Route path="/project3">
            <Project3></Project3>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
