import { useEffect, useState } from "react";

// deal with when value is 0
export const isFalsy = (value: unknown) => (value === 0 ? false : !value);
// double "!": return boolean of a value

// clean up input object with unified key format
export const cleanObject = (object: object) => {
  // {Object.assign({}, object)}
  const result = {...object};
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

// load page content when webpage is loaded only once
// custome hook: must start with "use"
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

/* use generics. 
debounce is used for continuouse change from user input */
export const useDebounce = <V>(value: V, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    // set a timeout everytime value changes
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    // run after each time last timeout (useEffect) finished
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};
