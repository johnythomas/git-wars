import React from "react";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import TopNav from "./components/navigation/TopNav";
import HomePage from "./components/pages/HomePage";
import TrendingPage from "./components/pages/TrendingPage";

const App = () => (
  <Container>
    <TopNav />
    <Route path="/" exact component={HomePage} />
    <Route path="/trending" component={TrendingPage} />
  </Container>
);

export default App;
