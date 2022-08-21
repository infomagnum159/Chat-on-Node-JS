import React from 'react';
import {AppBar, Toolbar, Typography} from "@mui/material";
import {makeStyles} from "tss-react/mui";


const useStyles = makeStyles()(theme => ({
    staticToolbar: {
        marginBottom: theme.spacing(5)
    }
}));

const AppToolbar = () => {
    const { classes } = useStyles();

    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6">
                            Mega Messenger
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar className={classes.staticToolbar}/>
        </>
    );
};

export default AppToolbar;