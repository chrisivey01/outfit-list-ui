import React from "react";
import { connect } from "react-redux";

// import "./App.scss";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import * as apis from "../apis/apis";
import { useDispatch } from "react-redux";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import CardContent from "@material-ui/core/CardContent";
import { setOutfitList, deleteOutfitFromList } from '../store/actions/index';

const useStyles = makeStyles({
  container: {
    position: "relative",
    width: "380px",
    height: "300px",
    top: "80px",
    margin: "auto",
  },

  hideContainer: {
    display: "none",
    position: "relative",
    width: "380px",
    height: "300px",
    top: "80px",
    margin: "auto",
  },

  listOverFlow: {
    overflow:"auto",
    height: "160px"
  }
});

const App = (props) => {
  const [showHideToggler, setShowHideToggler] = React.useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleOutfits = (value) => {
    apis.setOutfit(value);
  };

  const deleteOutfit = (value) => {
    apis.deleteOutfit(value);
    dispatch(deleteOutfitFromList(value))
  };

  window.addEventListener("message", (event) => {
    if (event.data.openOutfits) {
      setShowHideToggler(true);
      dispatch(setOutfitList(event.data.outfitList))
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.keyCode === 27) {
      setShowHideToggler(false);
      apis.closeOutfit();
    }
  });

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  const { outfits } = props.data;

  return (
    <div
      className={showHideToggler ? classes.container : classes.hideContainer}
    >
      <ThemeProvider theme={darkTheme}>
        <Card>
          <CardHeader title="Outfits" />
          <CardContent>
            <List className={classes.listOverFlow}>
              {outfits.map((value, i) => {
                const labelId = `checkbox-list-label-${value}`;
                return (
                  <ListItem
                    key={i}
                    dense
                    button
                    onClick={()=> handleOutfits(value)}
                  >
                    <ListItemText
                      id={labelId}
                      primary={`Outfit ${i + 1}`}
                    />
                    <ListItemSecondaryAction>
                      <IconButton onClick={()=> deleteOutfit(value)} edge="end" aria-label="delete">
                        <DeleteOutlineIcon/>
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                );
              })}
            </List>
          </CardContent>
        </Card>
      </ThemeProvider>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { data: state.outfitReducer };
};

export default connect(mapStateToProps)(App);
