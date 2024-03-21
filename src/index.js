import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Shubham from "./Shubham";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./GlobleContext/AuthContext";

import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <BrowserRouter>
  //   <AuthContextProvider>
  //     <App />
  //   </AuthContextProvider>
  // </BrowserRouter>
  <Shubham videoId={"M7lc1UVf-VE"} />
);
