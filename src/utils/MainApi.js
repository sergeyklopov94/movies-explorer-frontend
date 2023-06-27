export const BASE_URL = 'https://api.sergklo94-movies.nomoredomains.rocks';

export function register(name, password, email) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Origin': 'Access-Control-Allow-Origin'
    },
    credentials: 'include',
    body: JSON.stringify({name, password, email})
  })
  .then((res) => {
    if (res.ok)
      return res.json();
    return res.json().then((err) => Promise.reject(err.message));
  });
};

export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        email,
        password
      })
    })
    .then((res) => {
      if (res.ok)
        return res.json();
      return res.json().then((err) => Promise.reject(err.message));
    });
  };

  export function checkToken() {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
    .then((res) => {
      if (res.ok)
        return res.json();
      return res.json().then((err) => Promise.reject(err.message));
    });
  };

  export function logout() {
    return fetch(`${BASE_URL}/signout`, {
      method: "GET",
      credentials: 'include',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      })
      .then((res) => {
        if (res.ok)
          return res.json();
        return res.json().then((err) => Promise.reject(err.message));
    });
  };

  export function editUserInfo({ name, email }) {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email
      })
    })
    .then((res) => {
      if (res.ok)
        return res.json();
      return res.json().then((err) => Promise.reject(err.message));
    });
  }
