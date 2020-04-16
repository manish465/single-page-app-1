import React from "react";
import {
    AppBar,
    Toolbar,
    makeStyles,
    IconButton,
    Grid,
} from "@material-ui/core";
import Logo from "../../assets/LOGO.svg";
import LoginIcon from "../../assets/LoginButton.svg";

const useStyles = makeStyles({
    appbar: {
        background: "#FFFFFF",
        flexGrow: 1,
    },
    logo: {
        width: 210,
        height: 90,
    },
    loginicon: {
        width: 77,
        height: 77,
        flexGrow: 1,
    },
});

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.appbar}>
            <Toolbar>
                <Grid container justify='space-between'>
                    <Grid item>
                        <img className={classes.logo} src={Logo} alt='' />
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <img
                                className={classes.loginicon}
                                src={LoginIcon}
                                alt=''
                            />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
