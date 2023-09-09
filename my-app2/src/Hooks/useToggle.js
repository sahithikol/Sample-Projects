import { useCallback, useState } from "react";

export const useToggle = (arr, startIndex) => {
  const [index, setIndex] = useState(startIndex);
  const toggle =useCallback( () => {
    if (index === arr.length-1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }, [arr]);
  return  [toggle, arr[index] ]
};
