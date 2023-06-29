export const BASE_URL = 'https://api.nomoreparties.co';

export function getAllMovies() {
  return fetch(`${BASE_URL}/beatfilm-movies`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then((res) => {
    if (res.ok)
      return res.json();
    return res.json().then((err) => Promise.reject(err.message));
  });
};
