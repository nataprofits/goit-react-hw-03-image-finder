import axios from 'axios';

const API_KEY = '35827087-065bf158987f45118dc560d26';
const BASE_URL = 'https://pixabay.com/api/';
const perPage = 12;

export async function getImagesAPI(query, page, signal) {
  const response = await axios.get(BASE_URL, {
    signal,
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: perPage,
      page: page,
    },
  });

  return response.data;
}