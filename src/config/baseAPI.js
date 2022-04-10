import appSettings from "./index";

const get = async ({ endpoint, authRequired = true }) => {
  return fetch(`${appSettings.baseURL}${endpoint}`, {
    method: "GET",
    headers: {
      Authorization: authRequired ? `${appSettings.token}` : null,
    },
    redirect: "follow",
  });
};

const post = async ({ endpoint, authRequired = true, body }) => {
  return fetch(`${appSettings.baseURL}${endpoint}`, {
    method: "POST",
    headers: {
      Authorization: authRequired ? `${appSettings.token}` : null,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : null,
  });
};

export { get, post };
