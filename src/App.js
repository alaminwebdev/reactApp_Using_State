import React from "react";
import Header from "./components/Navigation/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Body/>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
