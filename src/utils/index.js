// deal with when value is 0
export const isFalse = (value) => (value === 0 ? false : !value);
// double "!": return boolean of a value

export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalse(value)) {
      delete result[key];
    }
  });
  return result;
};
