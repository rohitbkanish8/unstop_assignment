import React from "react";

export const useOutsideClick = (ref, containerRef, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  React.useEffect(() => {
    containerRef.current &&
      containerRef.current.addEventListener("click", handleClick);
    containerRef.current &&
      containerRef.current.addEventListener("keypress", handleClick);

    return () => {
      containerRef.current &&
        containerRef.current.removeEventListener("click", handleClick);
    };
  });
};