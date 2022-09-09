import axios from "axios";

export const addFacility = async (facility) => {
  try {
    return await axios.post(`${process.env.REACT_APP_API}/facility`, facility);
  } catch (error) {
    console.log(error);
  }
};
export const editFacility = async (facility, id) => {
  try {
    return await axios.post(
      `${process.env.REACT_APP_API}/facility/${id}`,
      facility
    );
  } catch (error) {
    console.log(error);
  }
};
export const deleteFacility = async (id) => {
  try {
    return await axios.delete(`${process.env.REACT_APP_API}/facility/${id}`);
  } catch (error) {
    console.log(error);
  }
};
export const getFacilities = async () => {
  try {
    return await axios.get(`${process.env.REACT_APP_API}/facility`);
  } catch (error) {
    console.log(error);
  }
};
