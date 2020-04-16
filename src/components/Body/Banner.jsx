import React from "react";
import { makeStyles } from "@material-ui/core";
import BannerImg from "../../assets/Banner.png";

const useStyles = makeStyles({
    banner: {
        background: "#f0f0f0",
        margin: "35px 35px",
    },
});

const Banner = () => {
    const classes = useStyles();

    return <img className={classes.banner} src={BannerImg} alt='' />;
};

export default Banner;
