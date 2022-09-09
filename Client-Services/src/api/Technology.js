import axios from "axios";
export const getTechnologies = async () => {
  try {
    return await axios.get(`${process.env.REACT_APP_API}/technology`);
  } catch (error) {
    console.log(error);
  }
};

export const getTechnologiesByPagination = async (sort, order, page) => {
  try {
    return await axios.post(
      `${process.env.REACT_APP_API}/technology/pagination`,
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

export const technologyCount = async () =>
  await axios.get(`${process.env.REACT_APP_API}/technology/total`);
