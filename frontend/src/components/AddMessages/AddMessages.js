import React from 'react';
import {TextField, Button} from "@mui/material";


const AddMessages = (props) => (
    <form onSubmit={props.onSubmit} style={{marginBottom: "50px", textAlign: "center" }}>
        <div className="form-group">
            <div className="column-1" style={{marginBottom: "15px"}}>
                <TextField style={{width: '500px'}}
                    name="author"
                    type="text"
                    value={props.author}
                    onChange={props.onChange}
                    placeholder="Автор" id="author"/>
            </div>
            <div className="column-2" style={{marginBottom: "15px"}}>
                <TextField style={{width: '500px'}} multiline={true} rows={6}
                    name="message"
                    placeholder="Текст сообщения"
                    value={props.message}
                    onChange={props.onChange}
                    id="message-form"/>
            </div>
        </div>
        <Button size="large" style={{width: '150px', fontSize: '20px'}}
                variant="contained"
                type="submit"
                id="button">Send</Button>
    </form>
)

;

export default AddMessages;