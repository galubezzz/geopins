import React from "react";
import {GoogleLogin} from "react-google-login"
import { withStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
const Login = ({ classes }) => {
  const onSuccess = googleUser => {
    console.log(googleUser)
    const id_token = googleUser.getAuthResponse().id_token
    console.log(id_token)
  }
  return <GoogleLogin 
  clientId = "47506495137-hmpi0g2l9kavin8p29oqtajuqa0vg00o.apps.googleusercontent.com" 
  onSuccess={onSuccess}
  isSignedIn={true}/>;
};

const styles = {
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  }
};

export default withStyles(styles)(Login);
