import React from "react";
import { AppBar, Toolbar, makeStyles, IconButton } from "@material-ui/core";
import Logo from "../../assets/LOGO.svg";
import LoginIcon from "../../assets/LoginButton.svg";

const useStyles = makeStyles({
    appbar: {
        background: "#FFFFFF",
    },
    logo: {
        width: 210,
        height: 90,
    },
    loginicon: {
        width: 77,
        height: 77,
    },
});

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.appbar}>
            <Toolbar>
                <img className={classes.logo} src={Logo} alt='' />
                <IconButton>
                    <img className={classes.loginicon} src={LoginIcon} alt='' />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
