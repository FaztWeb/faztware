import axios from "axios";

const API = process.env.REACT_APP_API + "/auth";

export const register = async (user) =>
  await axios.post(`${API}/register`, user);

export const login = async (user) => await axios.post(`${API}/login`, user);

export const profile = async (token) =>
  await axios.get(`${API}/profile`, {
    headers: {
      Authorization: token,
    },
  });
