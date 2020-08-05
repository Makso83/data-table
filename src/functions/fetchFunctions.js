const { SMALL_SET, urlAPI } = require("../config");

export const fetchData = async (set = SMALL_SET) => {
  try {
    const responce = await fetch(urlAPI[set]);
    if (!responce.ok) {
      throw new Error('Something went wrong');
    } 
    const data = await responce.json();
    return data;
  }  catch (err) {
    console.warn(err.message);
  }

}