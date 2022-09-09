import axios from "axios";

export const addTechnology = async (technology) => {
  try {
    return await axios.post(
      `${process.env.REACT_APP_API}/technology`,
      technology
    );
  } catch (error) {
    console.log(error);
  }
};
export const editTechnology = async (technology, id) => {
  try {
    return await axios.post(
      `${process.env.REACT_APP_API}/technology/${id}`,
      technology
    );
  } catch (error) {
    console.log(error);
  }
};
export const deleteTechnology = async (id) => {
  try {
    return await axios.delete(`${process.env.REACT_APP_API}/technology/${id}`);
  } catch (error) {
    console.log(error);
  }
};
export const getTechnologies = async () => {
  try {
    return await axios.get(`${process.env.REACT_APP_API}/technology`);
  } catch (error) {
    console.log(error);
  }
};
