import axiosApi from "../../axiosApi";

export const GET_MESSAGES_REQUEST = "GET_MESSAGES_REQUEST";
export const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS';
export const GET_MESSAGES_FAILURE = 'GET_MESSAGES_FAILURE';

export const ADD_MESSAGE_REQUEST = "ADD_MESSAGE_REQUEST";
export const ADD_MESSAGE_SUCCESS = "ADD_MESSAGE_SUCCESS";
export const ADD_MESSAGE_FAILURE = "ADD_MESSAGE_FAILURE";
export const CHANGE_TEXT = "CHANGE_TEXT";
export const GET_LAST_MESSAGES_REQUEST = "GET_LAST_MESSAGES";
export const GET_LAST_MESSAGES_SUCCESS = "GET_LAST_SUCCESS";
export const GET_LAST_MESSAGES_FAILURE = "GET_LAST_FAILURE";

const getMessagesRequest =  () => ({type: GET_MESSAGES_REQUEST});
const getMessagesSuccess =  (data) => ({type: GET_MESSAGES_SUCCESS, payload: data});
const getMessagesFailure =  () => ({type: GET_MESSAGES_FAILURE});


const addMessageRequest =  () => ({type: ADD_MESSAGE_REQUEST});
const addMessageSuccess =  (data) => ({type: ADD_MESSAGE_SUCCESS, payload: data});
const addMessageFailure =  () => ({type: ADD_MESSAGE_FAILURE});

// const getLastMessagesRequest =  () => ({type: GET_LAST_MESSAGES_REQUEST});
// const getLastMessagesSuccess =  (data, datetime) => ({type: GET_LAST_MESSAGES_SUCCESS, data, datetime});
// const getLastMessagesFailure =  () => ({type: GET_LAST_MESSAGES_FAILURE});

export const changeMessageAction =  (event) => ({type: CHANGE_TEXT, payload: event});


export const getMessages = () => {
    return async dispatch => {
        try {
            dispatch(getMessagesRequest());
            const response = await axiosApi.get("/messages");
            // const datetime = response.data[response.data.length-1].datetime;
            dispatch(getMessagesSuccess(response.data.reverse()));
        } catch (error) {
            dispatch(getMessagesFailure(error));
            console.log(error)

        }
    };
};


// export const getLastMessages = (datetime, data) => {
//     return async (dispatch) => {
//         try {
//             const response = await axiosApi.get(`/messages?datetime=${datetime}`);
//             response.data.length !== 0 && (datetime = `?datetime=${response.data[response.data.length-1].datetime}`);
//             if (data.length === 0) {
//                 data = response.data;
//             } else {
//                 response.data.map(message => data.push(message));
//             }
//             dispatch(getLastMessagesSuccess(datetime, data));
//         } catch (e) {
//             console.log(e.request.responseText);
//         }
//     };
// };


export const addNewMessage = (messageData) => {
    return async dispatch => {
        try {
            dispatch(addMessageRequest());
           const response =  await axiosApi.post('/messages', messageData);
            console.log(messageData);
            await dispatch(addMessageSuccess(response.data));

        } catch (e) {
            dispatch(addMessageFailure(e));
        }

    };
};


