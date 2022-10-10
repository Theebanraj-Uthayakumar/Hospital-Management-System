import axios from "axios";
export const getFacilities = async () => {
  try {
    return await axios.get(`${process.env.REACT_APP_API}/facility`);
  } catch (error) {
    console.log(error);
  }
};

export const getFacilitiesByPagination = async (sort, order, page) => {
  try {
    return await axios.post(
      `${process.env.REACT_APP_API}/facility/pagination`,
      {
        sort,
        order,
        page,
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const facilityCount = async () =>
  await axios.get(`${process.env.REACT_APP_API}/facility/total`);
