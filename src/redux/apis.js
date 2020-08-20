import axios from "axios";
const payload = {
  token: "chShWaXXPA9XaGveMHyvxg",
  data: [
    {
      id: "1",
      name: "unit 2 quiz",
      type: {
        key: "quiz",
        id: "1",
      },
      topic: "unit 2 motion and gfx",
      course: {
        name: "phyiscs",
        id: "1",
      },
      due_to:
        "Thu Aug 20 2020 19:47:52 GMT+0200 (Eastern European Standard Time)",
    },
    {
      id: "2",
      name: "12-12 Assignemnt",
      type: {
        key: "assignment",
        id: "2",
      },
      topic: "Topic 2",
      course: {
        name: "Arabic",
        id: "2",
      },
      due_to:
        "Fri Dec 04 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
    },
  ],
};

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
