/* eslint-disable react/jsx-sort-props */
const { REACT_APP_BASE_URL } = process.env;

const endPoints = {
  login: "userlogin",
};

const API_URLS = {
  LOGIN: `${REACT_APP_BASE_URL}/${endPoints.login}`,
};

export default API_URLS;
