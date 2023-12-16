import React, { useRef } from "react";
const useDynamicScript = (url) => {
  const [ready, setReady] = React.useState(false);
  const [errorLoading, setErrorLoading] = React.useState(false);
  const oldUrl = useRef(url);
  let returnReady = ready;
  if (url !== oldUrl.current) {
    returnReady = false;
    oldUrl.current = url;
  }

  React.useEffect(() => {
    if (!url) return;

    setErrorLoading(false);

    const element = document.createElement("script");

    element.src = url;
    element.type = "text/javascript";
    element.async = true;

    element.onload = () => {
      setReady(true);
    };

    element.onerror = () => {
      setReady(false);
      setErrorLoading(true);
    };

    document.head.appendChild(element);

    return () => {
      document.head.removeChild(element);
      setReady(false);
    };
  }, [url]);

  return {
    errorLoading,
    ready: returnReady,
  };
};

export default useDynamicScript;
