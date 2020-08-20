import { RECEIVE_API_DATA } from "../actions";

const initialState = {
  //  dueAssignemnts: [
  //     {
  //       id: "1",
  //       name: "unit 2 quiz",
  //       type: {
  //         key: "quiz",
  //         id: "1",
  //       },
  //       topic: "unit 2 motion and gfx",
  //       course: {
  //         name: "phyiscs",
  //         id: "1",
  //       },
  //       due_to: new Date().toString(),
  //     },
  //     {
  //       id: "2",
  //       name: "12-12 Assignemnt",
  //       type: {
  //         key: "assignment",
  //         id: "2",
  //       },
  //       topic: "Topic 2",
  //       course: {
  //         name: "Arabic",
  //         id: "2",
  //       },
  //       due_to: new Date(2020, 11, 4).toString(),
  //     },
  //   ],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_API_DATA:
      console.log(action);
      return {
        ...state,
        dueAssignemnts: action.data,
      };
    default:
      return state;
  }
}

export default rootReducer;
