import {
    ADD_MESSAGE_FAILURE,
    ADD_MESSAGE_REQUEST,
    ADD_MESSAGE_SUCCESS, CHANGE_TEXT, GET_MESSAGES_FAILURE,
    GET_MESSAGES_REQUEST, GET_MESSAGES_SUCCESS
} from "../actions/messageActions";

const initialState = {
    author: '',
    message: '',
    posts: [],
    loading: false,
    error: null,
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE_REQUEST:
            return {...state, loading: true };
        case ADD_MESSAGE_SUCCESS:
            const author = 'author'
            const message = 'message'
            return {...state,loading: false,[author]: '',
                [message]: ''};
        case ADD_MESSAGE_FAILURE:
            return {...state, loading: false};
        case GET_MESSAGES_REQUEST:
            return {...state, loading: true,};
        case GET_MESSAGES_SUCCESS:
            return {...state, posts: action.payload, loading: false};

        case GET_MESSAGES_FAILURE:
            return {...state, loading: false};
        case CHANGE_TEXT:
            return {...state, [action.payload.name]: action.payload.value}
        default:
            return state;
    }
}

export default messageReducer;