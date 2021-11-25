import React, { Suspense } from "react";

import ReactDOM from "react-dom";
import "./i18n.js";

import App from "./App";

const loadingMarkup = (
  <div className="py-4 text-center" style={{position: "absolute", top: "50%", left: "50%", fontSize: "35px" }}>
    <h2>Loading..</h2>
  </div>
);

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,

  document.getElementById("root")
);
