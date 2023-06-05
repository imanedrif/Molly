import { ADD_USER_INFOS, GET_USER_INFOS, DELETE_USER_INFOS } from "./Actions";

const initialState = {
    user: [],
};

export const Reducers = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_USER_INFOS:
            return {
                ...state,
                user: action.payload,
            };
        case GET_USER_INFOS:
            return {
                ...state,
            };
        case DELETE_USER_INFOS:
            return {
                ...state,
                user: [],
            };

        default:
            return state;
    }
};
