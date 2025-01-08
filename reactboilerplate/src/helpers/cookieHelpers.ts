import Cookies from '../../node_modules/@types/js-cookie';

// Function to set a cookie
export const setCookie = (name, value, options = {}) => {
  const defaultOptions = { expires: 7, ...options };
  Cookies.set(name, value, defaultOptions);
};

// Function to get a cookie by name
export const getCookie = (name) => {
  return Cookies.get(name);
};

// Function to remove a cookie by name
export const removeCookie = (name) => {
  Cookies.remove(name);
};
