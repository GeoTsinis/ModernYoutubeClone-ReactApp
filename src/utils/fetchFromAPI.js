import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/youtube/v3';

const options = {
  url: BASE_URL,
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
