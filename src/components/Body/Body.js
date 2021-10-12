import React from "react";
import { Route } from "react-router-dom";
import Book from "./Book/Book";
import Menu from "./Menu/Menu";
import About from "./About/About";

const Body = () => {
  return (
    <div>
      <Route path="/" exact render={() => <Book />} />
      <Route path="/book" exact render={() => <Book />} />
      <Route path="/menu" exact component={Menu} />
      <Route path="/about" exact component={About} />
    </div>
  );
};

export default Body;
