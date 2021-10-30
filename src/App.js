import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./App.css";

import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Fridge Overview
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
      <main>
      <Grid container >
        <Grid xs={1} md={3}>
        </Grid>
        <Grid item>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        </Grid>
        <Grid xs={1} md={3}>
        </Grid>
      </Grid>
      </main>
    </Router>
  );
}

export default App;