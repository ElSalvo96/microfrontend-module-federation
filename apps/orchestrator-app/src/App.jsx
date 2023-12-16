import React, { lazy, Suspense } from "react"; // Must be imported for webpack to work
import "./App.css";
import Microfrontend from "./Microfrontend";

const BodyText = lazy(() => import("BodyApp/BodyText"));
const BodyButton = lazy(() => import("BodyApp/BodyButton"));

function App() {
  return (
    <div className="App">
      <h1>This is an orchestrator</h1>
      <Suspense fallback={<div>Loading BodyApp...</div>}>
        <div style={{ border: "solid 5px blue" }}>
          <h1>Slice from build</h1>
          <BodyText />
          <BodyButton />
        </div>

        <Microfrontend />
      </Suspense>
    </div>
  );
}

export default App;
