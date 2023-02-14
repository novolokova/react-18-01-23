import React, { useState, useEffect } from "react";

const WindowSizeHook = () => {
  const [dimensions, setDimensionss] = useState({
    h: window.innerHeight,
    w: window.innerWidth,
  });

  useEffect(() => {
    const handlerSize = () => {
      setDimensionss({
        h: window.innerHeight,
        w: window.innerWidth,
      });
    };
    window.addEventListener("resize", handlerSize);
    return () => {
      window.removeEventListener("resize", handlerSize);
    };
  }, []);

  return (
    <div>
      <p>
        height: {dimensions.h} <br /> width: {dimensions.w}
      </p>
    </div>
  );
};

export default WindowSizeHook;


