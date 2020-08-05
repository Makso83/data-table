export const sortByField = (arr, field, order = false) => {
  const result = [...arr].sort((a, b) => {
    if (typeof a[field] === "string") {
      return a[field].toLowerCase() > b[field].toLowerCase() ? 1 : -1;
    }
    return a[field] > b[field] ? 1 : -1;
  });
  if (order) {
    return result.reverse();
  }
  return result;
};

export const searchInObject = (phrase, defaultList = []) => {
  const [...firstInARow] = defaultList;
  const keysArray = Object.keys(firstInARow);
  if (keysArray.length === 0) {
    return [];
  }
  if (typeof phrase !== 'string') {
    return [];
  }
  if (phrase === "") {
    return defaultList;
  }
  const result = defaultList.filter((row) => {
      const rowKeys = Object.keys(row);
      const resultArray = rowKeys.filter((key) => {
        if (typeof key === 'string' && typeof row[key] === 'string') {
          return row[key].toLowerCase().includes(phrase.toLowerCase())
        }
        return false;
      })
      return resultArray.length > 0;
  });
  return result;
};