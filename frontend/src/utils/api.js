const API_URL = "http://localhost:4000/api";

const getToken = () => localStorage.getItem("token");

export const api = {
  register: (email, password, role = "engineer") =>
    fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, role }),
    }).then((res) => res.json()),

  login: (email, password) =>
    fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    }).then((res) => res.json()),

  me: () =>
    fetch(`${API_URL}/users/me`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    }).then((res) => res.json()),

  getProjects: () =>
    fetch(`${API_URL}/projects`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    }).then((res) => res.json()),

  createProject: (data) =>
    fetch(`${API_URL}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify(data),
    }).then((res) => res.json()),

  getDefects: () =>
    fetch(`${API_URL}/defects`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    }).then((res) => res.json()),

  createDefect: (data) =>
    fetch(`${API_URL}/defects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify(data),
    }).then((res) => res.json()),

  getReports: () =>
    fetch(`${API_URL}/reports`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    }).then((res) => res.json()),
};
