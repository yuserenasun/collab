import { useEffect, useState } from "react";

// deal with when value is 0
export const isFalse = (value: unknown) => (value === 0 ? false : !value);
// double "!": return boolean of a value

export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    if (isFalse(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = (value: unknown, delay?: number): any => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    // set a timeout everytime value changes
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    // run after each time last timeout finished
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};
