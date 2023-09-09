import React from "react";
export const useDebounce = (callback, delay) => {
  const timerId  =  React.useRef(null)
  const debounceFn = React.useCallback(() => {
    clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      callback();
    }, delay);
  }, [callback, delay]);
  return debounceFn;
};
