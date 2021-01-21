import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import * as apis from "./apis/apis";
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
import "@fontsource/roboto";
import { getOutfitList, setOutfit, deleteOutfitFromList } from "./store/actions/outfits";

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
    overflow: "auto",
    height: "160px"
  }
});

const App = (props) => {
  const [showHideToggler, setShowHideToggler] = React.useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const outfits = useSelector((state) => state.clothing.outfits);

  const handleOutfits = (value) => {
    dispatch(setOutfit(value));
  };

  const deleteOutfit = (value) => {
    dispatch(deleteOutfitFromList(value));
  };

  window.addEventListener("message", (event) => {
    if (event.data.openOutfits) {
      setShowHideToggler(true);
      dispatch(getOutfitList(event.data.outfitList))
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setShowHideToggler(false);
      apis.closeOutfit();
    }
  });

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });


  if (outfits) {
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
                      onClick={() => handleOutfits(value)}
                    >
                      <ListItemText
                        id={labelId}
                        primary={`Outfit ${i + 1}`}
                      />
                      <ListItemSecondaryAction>
                        <IconButton onClick={() => deleteOutfit(value)} edge="end" aria-label="delete">
                          <DeleteOutlineIcon />
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
  } else {
    return <Fragment />
  }
}

export default App;
