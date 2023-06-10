import { BrowserRouter } from "react-router-dom";

import './App.css';
import Navigation from "./Navigation";
import RoutesList from "./RoutesList";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
        <RoutesList/>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
