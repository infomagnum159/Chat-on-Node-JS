import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMessages, changeMessageAction, addNewMessage} from "../../store/actions/messageActions";
import Messages from "../../components/Messages/Messages";
import AddMessages from "../../components/AddMessages/AddMessages";



const Chat = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.messenger)
    const posts = useSelector(state => state.messenger.posts);
    // const datetime = useSelector(state => state.messenger.datetime);

    useEffect( () => {
        const timeOut = setTimeout( ()=> {

        }, 2000)
        return() => clearTimeout(timeOut)
    }, []);

    const changeMessage = e => {
        const {name, value} = e.target;
        dispatch(changeMessageAction({name, value}));
    };

    const addMessage = event => {
        event.preventDefault()
        const messageData = {
            message: state.message,
            author: state.author
        }
        dispatch(addNewMessage(messageData));
    };

    useEffect( () => {
        dispatch(getMessages())
    }, [dispatch]);
    return (
        <div style={{display: "flex", marginLeft: '50px'}}>
            <AddMessages
                onSubmit={(event) => addMessage(event)}
                onChange={changeMessage}
                author={state.author}
                message={state.message}
            />
            <div style={{overflowX: "hidden", overflowY: "scroll", height: '350px', marginLeft: '100px'
            }}>
                {posts.map((message, index) => (
                    <Messages
                        key={index}
                        message={message.message}
                        author={message.author}
                        datetime={message.datetime}
                    />

                ))}
            </div>


        </div>
    );
};

export default Chat;