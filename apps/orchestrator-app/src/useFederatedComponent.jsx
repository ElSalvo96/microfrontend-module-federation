import React from "react";
import useDynamicScript from "./useDynamicScript";

function loadComponent(scope, module) {
  return async () => {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    // eslint-disable-next-line no-undef
    await __webpack_init_sharing__("default");
    const container = window[scope]; // or get the container somewhere else
    // Initialize the container, it may provide shared modules
    // eslint-disable-next-line no-undef
    await container.init(__webpack_share_scopes__.default);
    const factory = await window[scope].get(module);
    const Module = factory();
    return Module;
  };
}

export const useFederatedComponent = (remoteUrl, scope, module) => {
  const [Component, setComponent] = React.useState(null);
  const { ready, errorLoading } = useDynamicScript(remoteUrl);

  React.useEffect(() => {
    if (ready) {
      const Comp = React.lazy(loadComponent(scope, module));
      setComponent(Comp);
    }

    return () => {
      setComponent(null);
    };
  }, [ready, scope, module]);

  return { errorLoading, Component };
};

export default useFederatedComponent;
