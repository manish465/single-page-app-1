import React from "react";
import {
    AppBar,
    Toolbar,
    makeStyles,
    IconButton,
    Grid,
    Button,
    Typography,
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
        color: "#292929",
    },
    tabs: {
        color: "#414141",
        fontSize: "54px",
        fontFamily: "Letter Gothic Std",
    },
});

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.appbar} position='static'>
            <Toolbar>
                <Grid container justify='space-between'>
                    <Grid xs={2} item>
                        <img className={classes.logo} src={Logo} alt='' />
                    </Grid>
                    <Grid
                        xs={6}
                        alignContent='center'
                        justify='center'
                        spacing={10}
                        container>
                        <Grid item>
                            <Button>
                                <Typography className={classes.tabs}>
                                    HOME
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button>
                                <Typography className={classes.tabs}>
                                    SHOP
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button>
                                <Typography className={classes.tabs}>
                                    BLOG
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid xs={2} item>
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
