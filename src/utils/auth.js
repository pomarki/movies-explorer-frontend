export const BASE_URL = 'https://api.kino-domino.nomoredomains.rocks';

function checkRequestResult(response) {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(response);
}

export const register = (name, password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, password, email }),
  }).then((checkRequestResult));
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  })
    .then(checkRequestResult)
    .then((data) => {
      if (data.token) {
        localStorage.setItem("_id", data.token);
        return data.token;
      } else {
        return;
      }
    });
};

export const getUser = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(checkRequestResult);
};