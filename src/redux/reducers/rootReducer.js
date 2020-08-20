const initialState = {
    objectToSend: {
        "token": "chShWaXXPA9XaGveMHyvxg",
        "data":
            [
                {
                    "id": "1",
                    "name": "unit 2 quiz",
                    "type": {
                        "key": "quiz",
                        "id": "1"
                    },
                    "topic": "unit 2 motion and gfx",
                    "course": {
                        "name": "phyiscs",
                        "id": "1"
                    },
                    "due_to": new Date().toString()
                },
                {
                    "id": "2",
                    "name": "12-12 Assignemnt",
                    "type": {
                        "key": "assignment",
                        "id": "2"
                    },
                    "topic": "Topic 2",
                    "course": {
                        "name": "Arabic",
                        "id": "2"
                    },
                    "due_to": new Date(2020, 11, 4).toString()
                },
            ]
    },
    dueAssignemnts: [
        {

            "id": "1",
            "name": "unit 2 quiz",
            "type": {
                "key": "quiz",
                "id": "1"
            },
            "topic": "unit 2 motion and gfx",
            "course": {
                "name": "phyiscs",
                "id": "1"
            },
            "due_to": new Date().toString()
        },
        {
            "id": "2",
            "name": "12-12 Assignemnt",
            "type": {
                "key": "assignment",
                "id": "2"
            },
            "topic": "Topic 2",
            "course": {
                "name": "Arabic",
                "id": "2"
            },
            "due_to": new Date(2020, 11, 4).toString()
        },
    ]
};

const GET_DUE_ASSIGNEMNTS = "GET_DUE_ASSIGNEMNTS";

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DUE_ASSIGNEMNTS:
            return {
                ...state,
                dueAssignemnts: action.data
            };
        default:
            return state;
    }
}

export default rootReducer;
