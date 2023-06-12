import axios from 'axios';

const API_KEY = '35827087-065bf158987f45118dc560d26';
const BASE_URL = 'https://pixabay.com/api/';


export const getImages = async (listName, page, signal) => {
    const response = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${listName}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`, signal
    );
    return response.data
}