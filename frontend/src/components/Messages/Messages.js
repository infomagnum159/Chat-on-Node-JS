import React from "react";
import {Card, ListItem,Grid} from "@mui/material";

const Messages = (props) => (
    <Card variant="outlined" style={{ width: 600, borderRadius: '7px', marginBottom: '20px'}}>

        <Grid container >
            <Grid item xs={8}>
                <ListItem>Author: {props.author}</ListItem>
            </Grid>
            <Grid item xs={2}>
                <ListItem>{props.datetime}</ListItem>
            </Grid>
            <Grid item xs={8}>
                <ListItem>Message: {props.message}</ListItem>
            </Grid>
        </Grid>
    </Card>
);



export default Messages;