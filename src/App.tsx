import { BrowserRouter } from "react-router-dom";

import './App.css';
import Navigation from "./Navigation";
import RoutesList from "./RoutesList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </div>
  );
}

export default App;
