import axios from 'axios';
axios.defaults.baseURL = 'https://api.unsplash.com';

export const fetchArticles = async (query, page) => {
  const response = await axios.get('/search/photos', {
    params: {
      client_id: '0zZLPuE0vkvpT6eDFrj12ezhL4GmM_vcJGIyTNSWdbQ',
      page,
      query,
      orientation: 'landscape',
    },
  });

  return response.data;
};
