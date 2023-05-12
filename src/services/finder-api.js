import axios from 'axios';

const API_KEY = '34413243-16ff60e2bc0f88c81c09e023b';

axios.defaults.baseURL = `https://pixabay.com/api/`;

export const getImages = async (searchParam, page) => {
  const response = await axios.get(
    `?q=${searchParam}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`
  );

  return response.data;
};
