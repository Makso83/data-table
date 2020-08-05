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

export const searchInObject = (phrase, defaultList = {}) => {
  const keysArray = Object.keys(defaultList);
  if (keysArray.length === 0) {
    return [];
  }

  if (phrase === "") {
    return sortByField(defaultList, "id");
  }
  const result = defaultList.filter((row) => {
    if (row.firstName.toLowerCase().includes(phrase.toLowerCase())) return true;
    if (row.lastName.toLowerCase().includes(phrase.toLowerCase())) return true;
    if (row.email.toLowerCase().includes(phrase.toLowerCase())) return true;
    if (row.phone.toLowerCase().includes(phrase.toLowerCase())) return true;
    return false;
  });
  return result;
};