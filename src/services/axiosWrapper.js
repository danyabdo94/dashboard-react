import axios from 'axios';

const axiosWrapper = {
  get(url, headers) {
    return axios.get(url, { headers });
  },
  post(data, url, headers) {
    return axios.post(url, data, { headers });
  },
};

export default axiosWrapper;
