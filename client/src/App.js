import React from "react";
import "./App.css";
import SavedBooks from "./Pages/SavedBooks/index";
import Search from "./Pages/Search/index";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ButtonAppBar from "./components/ButtonAppBar/index"

const useStyles = makeStyles({});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <ButtonAppBar/>
      <Switch>
        <Route exact from="/" render = {props => <Search {...props}/>}/>
        <Route exact from="/savedbooks" render = {props => <SavedBooks {...props}/>}/>
      </Switch>
    </div>
  );
}


export default App;
