function fetchImages(name, currentPage) {
  const BASE_URL = 'https://pixabay.com/api';
  const API_KEY = '12475399-4c4a9fda188af0fb2a838d7fc';

  return fetch(
    `${BASE_URL}/?q=${name}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}

const api = {
  fetchImages,
};

export default api;
