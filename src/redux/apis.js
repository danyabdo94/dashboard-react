import axios from 'axios';

export default function getData() {
  return axios.get(
    `${process.env.REACT_APP_API_BASEURL}/03a30085-0b77-460e-a4ca-464d47b51c57`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
}
