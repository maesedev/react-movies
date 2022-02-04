"use strict"
import React from "react";
import Routes from "./routes";
import Header from "./header";
import { BrowserRouter as Router } from "react-router-dom";

export function App() {
  return (
    <Router>
        <Header />
        <Routes />
    </Router>
  );
}
