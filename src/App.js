import React, { Component, useState, useEffect } from "react";
import Toolbar from "./components/toolbar/toolbar";
import Drawer from "./components/toolbar/drawer/drawer";
import Backdrop from "./components/toolbar/drawer/backdrop/backdrop";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Blog from "./components/blog/blog";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";
import Expertise from "./components/expertise/expertise";
import Contact from "./components/contact/contact";
import Helmet from "react-helmet";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import { useDarkMode } from "./components/useDarkMode";

const App = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [theme, handleThemeChange] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const drawerToggler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backdropHandler = () => {
    setSideDrawerOpen(false);
  };

  let backdrop;

  if (sideDrawerOpen === true) {
    backdrop = <Backdrop click={backdropHandler} />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div>
          <Router>
            <Helmet>
              <meta charset="utf-8" />
              <link rel="icon" href="/favicon.ico" />
              <meta
                name="viewport"
                content="width=device-width,initial-scale=1"
              />
              <meta name="theme-color" content="#000000" />
              <meta
                name="description"
                content="Professional and unprofessional content"
                data-react-helmet="true"
              />
              <link rel="apple-touch-icon" href="/logo192.png" />
              <link rel="manifest" href="/manifest.json" />
              <link
                href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
                rel="stylesheet"
              />
              <title>Henri Mäkelä</title>
              <link
                href="/static/css/main.91c5b94b.chunk.css"
                rel="stylesheet"
              />
            </Helmet>

            <div className="App">
              <div className="layout-container">
                <Toolbar
                  drawerClickHandler={drawerToggler}
                  theme={theme}
                  onChange={handleThemeChange}
                />
                <Drawer show={sideDrawerOpen} />
                {backdrop}

                <Switch>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/blog">
                    <Blog />
                  </Route>
                  <Route path="/portfolio">
                    <Portfolio />
                  </Route>
                  <Route path="/expertise">
                    <Expertise />
                  </Route>
                  <Route path="/contact">
                    <Contact />
                  </Route>
                  <Route path="/">
                    <About />
                  </Route>
                </Switch>
              </div>
            </div>
          </Router>
        </div>
      </>
    </ThemeProvider>
  );
};
export default App;
