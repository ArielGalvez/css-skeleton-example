import axios from 'axios';

export const getImages = async (page = 1) => {
  const UNSPLASH_CLIENT_ID = process.env.REACT_APP_UNSPLASH_CLIENT_ID;
  const { data } = await axios.get(`https://api.unsplash.com/photos/?client_id=${UNSPLASH_CLIENT_ID}&page=${page}`);
  return data;
}
