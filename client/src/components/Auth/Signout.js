import React, {useContext} from "react";
import {GoogleLogout} from "react-google-login";
import { withStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Typography from "@material-ui/core/Typography";
import Context from "../../context";
import {unstable_useMediaQuery as useMediaQuery} from "@material-ui/core/useMediaQuery";


const Signout = ({ classes }) => {
  const mobileSize = useMediaQuery("(max-width: 650px)")
  const {dispatch} = useContext(Context)
  function onSignout(){
    dispatch({type: "SIGNOUT_USER"})
    console.log("signed out user")
  }
  return (
    <GoogleLogout
    onLogoutSuccess={onSignout}
    render={({onClick})=>(
        <span className={classes.root} onClick={onClick}>
            <Typography
              style= {{ display: mobileSize ? "none" : "block" }}
              variant="body1"
              className={classes.buttonText}
            >
              Logout
            </Typography>
            <ExitToAppIcon className={classes.buttonIcon}/>
        </span>
      )}
    />
  )
};

const styles = {
  root: {
    cursor: "pointer",
    display: "flex"
  },
  buttonText: {
    color: "orange"
  },
  buttonIcon: {
    marginLeft: "5px",
    color: "orange"
  }
};

export default withStyles(styles)(Signout);
