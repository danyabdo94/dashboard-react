import axios from "axios";
export function getData(input_id) {
  return axios.get(
    "https://run.mocky.io/v3/03a30085-0b77-460e-a4ca-464d47b51c57",
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
