import { BrowserRouter } from "react-router-dom";

import './App.css';
import Navigation from "./Navigation";
import RoutesList from "./RoutesList";
import Homepage from "./Homepage"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
      <Homepage />
    </div>
  );
}

export default App;
