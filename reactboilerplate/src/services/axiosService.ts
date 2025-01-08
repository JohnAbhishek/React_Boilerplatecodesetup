// axiosInstance.js

import axios from 'axios';
import { getCookie,removeCookie, setCookie } from '../helpers/cookiehelpers';


let navigateFunction; 
// let  enqueueSnackbarFunction;


export const setNavigateFunction = (navigate) => {
  navigateFunction = navigate; 
};
// export const setEnqueueSnackbarFunction = (enqueueSnackbar) => {
//   enqueueSnackbarFunction = enqueueSnackbar;
// };

const instance = axios.create({
  timeout: 20000, // Set your preferred timeout
  baseURL:'https://lmsdemo.mwtconsultancy.com',
  headers: {
    'Content-Type': 'application/json',
  },
});



instance.interceptors.request.use(
  (config) => {
    const authToken = getCookie("token")

    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    console.log(response,"responses");
    
    if (response.data.status === 538) {
      setCookie("warn",true)
      navigateFunction('/profile');
    }else if(response.data.status === 200){
      setCookie("warn",undefined)
      return response;
    }else{
      return response;

    }

  },
  (error) => {
    if (!error.response) {
      setCookie("warn",undefined)
      console.error('Network error:', error);
    //   if (enqueueSnackbarFunction) {
    //     enqueueSnackbarFunction("Network error", {
    //       variant: "error",
    //       content: (key, message) => (
    //         <ErrorSnackbar id={key} message={message} allowDownload={true} />
    //       ),
    //     });      }
     
    }else if(error.response.status === 500){
      setCookie("warn",undefined)
    //   enqueueSnackbarFunction("500 server error", {
    //     variant: "error",
    //     content: (key, message) => (
    //       <ErrorSnackbar id={key} message={message} allowDownload={true} />
    //     ),
    //   }); 
    }
    else if (error.response && error.response.status === 401) {
      setCookie("warn",undefined)
      removeCookie('token');
      removeCookie('user');
      navigateFunction('/signin');
        }else if(error.response && error.response.status === 538){
          setCookie("warn",undefined)
          navigateFunction('/profile');
        }
    return Promise.reject(error);
  }
);

export default instance;
