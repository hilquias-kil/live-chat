import React from "react"
import { Route, Switch } from "react-router"
import CssBaseline from "@material-ui/core/CssBaseline"

import AppBar from "@material-ui/core/AppBar"
import Typography from "@material-ui/core/Typography"
import Toolbar from "@material-ui/core/Toolbar"
import Comment from "./pages/Comment"

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h4">Live chat</Typography>
        </Toolbar>
      </AppBar>
      <Switch>
        {/* <Route exact path="/">
          <Setup />
        </Route> */}
        <Route exact path="/">
          <Comment />
        </Route>
        <Route>
          <div />
        </Route>
      </Switch>
    </>
  )
}

export default App
