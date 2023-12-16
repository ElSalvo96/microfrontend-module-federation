import React from "react"; // Must be imported for webpack to work
import useFederatedComponent from "./useFederatedComponent";

function Microfrontend() {
  const [{ module, scope, url }, setSystem] = React.useState({});

  function setSection01() {
    setSystem({
      url: "http://localhost:3010/AppEntry.js",
      scope: "App",
      module: "./App",
    });
  }

  function setSection02() {
    setSystem({
      url: "http://localhost:3011/AppEntry.js",
      scope: "App",
      module: "./App",
    });
  }

  const { Component: FederatedComponent, errorLoading } = useFederatedComponent(
    url,
    scope,
    module
  );

  return (
    <div style={{ border: "5px solid yellow" }}>
      <h1>Dynamic System Host</h1>
      <p>
        The Dynamic System will take advantage Module Federation{" "}
        <strong>remotes</strong> and <strong>exposes</strong>. It will no load
        components that have been loaded already.
      </p>
      <button onClick={setSection01}>Load Section 01</button>
      <button onClick={setSection02}>Load Section 02</button>
      <div style={{ marginTop: "2rem", border: "5px solid green", padding: "1rem" }}>
        <React.Suspense fallback="Loading System">
          {errorLoading
            ? `Error loading module "${module}"`
            : FederatedComponent ? <FederatedComponent />: <p>No microfrontend selected, please click on one of the buttons</p>}
        </React.Suspense>
      </div>
    </div>
  );
}

export default Microfrontend;
