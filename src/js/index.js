//import react into the bundle
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { Contador } from "./component/contador.jsx";
//render your react application


ReactDOM.render( <Contador />, document.querySelector("#app"));


