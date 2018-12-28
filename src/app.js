import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home"
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.scss";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);

ReactDOM.render(<Home />, document.getElementById("app")); 