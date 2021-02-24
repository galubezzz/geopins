import React, {useContext} from "react";
import {GraphQLClient} from "graphql-request"
import {GoogleLogin} from "react-google-login"
import { withStyles } from "@material-ui/core/styles";
import Context from "../../context";
import Typography from "@material-ui/core/Typography";
import {ME_QUERY} from "../../graphql/queries";
import {BASE_URL} from "../../client"
const Login = ({ classes }) => {
  const {dispatch} = useContext(Context)
  const onSuccess = async googleUser => {
    try{
      console.log(googleUser)
      const idToken = googleUser.getAuthResponse().id_token;
      const client = new GraphQLClient(BASE_URL, {
      headers: {authorization : idToken}
    })
      const {me} = await client.request(ME_QUERY)
      dispatch({type: "LOGIN_USER", payload: me})
      dispatch({type: "IS_LOGGED_IN", payload: googleUser.isSignedIn()})
      //console.log({data})
    }catch (err){
        onFailure(err)
    }
  }
  const onFailure = err =>{
    console.error("Error logging in", err)
  }
  return (
    <div className={classes.root}>
      <Typography
        component="h1"
        variant="h3"
        gutterBottom
        noWrap
        style={{color: "rgb(66,133,244)"}}
      >
        Welcome
      </Typography>
      <GoogleLogin 
      clientId = "47506495137-hmpi0g2l9kavin8p29oqtajuqa0vg00o.apps.googleusercontent.com" 
      onSuccess={onSuccess}
      onFailure={onFailure}
      theme="dark"
      isSignedIn={true}
      buttonText="Login with Google"/>
    </div>
    )
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
