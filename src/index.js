import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "styles/css/main.css";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faSquare,
  faCheckSquare,
  faBars,
  faSlidersH,
  faTimes,
  faSearch
} from "@fortawesome/free-solid-svg-icons";

library.add(faSquare, faCheckSquare, faBars, faSlidersH, faTimes, faSearch);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
