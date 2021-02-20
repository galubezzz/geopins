import React from "react";
import ReactMapGL from "react-map-gl"
import { withStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import DeleteIcon from "@material-ui/icons/DeleteTwoTone";
const MAP_TOKEN = "pk.eyJ1IjoiZ2FsdWJlenp6IiwiYSI6ImNrbGRiYTUwZzBzOHYydm1sbml1aDh0bXcifQ.Ee4INWmMI8XuUl6K9P0mJg"
const viewport = {
  latitude: 37.7577,
  longitude: -122.4376,
  zoom: 13
}
const Map = ({ classes }) => {
  return (
    <div className={classes.root}>
      <ReactMapGL
        width="100vw"
        height="calc(100vh - 64px)"
        mapStyle = "mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken = {MAP_TOKEN}
        {...viewport}
      >

      </ReactMapGL>
    </div>
  )
};

const styles = {
  root: {
    display: "flex"
  },
  rootMobile: {
    display: "flex",
    flexDirection: "column-reverse"
  },
  navigationControl: {
    position: "absolute",
    top: 0,
    left: 0,
    margin: "1em"
  },
  deleteIcon: {
    color: "red"
  },
  popupImage: {
    padding: "0.4em",
    height: 200,
    width: 200,
    objectFit: "cover"
  },
  popupTab: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  }
};

export default withStyles(styles)(Map);
