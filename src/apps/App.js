import React, { useEffect } from "react";
import "./App.css";
import { Button, Image, Text, View } from "./components/blocks";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { connect } from "react-redux";
import { itemsFetchData } from "./actions/items";
import { colors } from "./util/constants";

const App = ({ fetchData, items }) => {
  const handleFetch = () => {
    fetchData("https://api.thecatapi.com/v1/images/search");
  };

  return (
    <>
      <View
        display="flex"
        direction="column"
        justifyContent="center"
      >
        <Text
          fontSize="40px"
          color="yellowgreen"
          fontWeight="bold"
          width="100%"
          textAlign="center
          "
        >
          TEMPLATE REACT + PARCEL
        </Text>

        <View display="flex" direction="column" alignItems="center">
          <Text fontSize="20px" fontWeight="bold" margin="10px 0">
            Some simple routes
          </Text>
          <Router>
            <View
              display="flex"
              justifyContent="space-around"
              width="500px"
              margin="20px 0"
            >
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/dashboard">Dashboard</Link>
            </View>
            <Switch>
              <Route exact path="/">
                <div>Insert home component here</div>
              </Route>
              <Route path="/about">
                <div>Insert home about here</div>
              </Route>
              <Route path="/dashboard">
                <div>Insert home dashboard here</div>
              </Route>
            </Switch>
          </Router>
          <Text marginTop="20px">Redux state & fetch actions premade</Text>
          <Button
            padding="10px"
            margin="10px"
            borderRadius="10px"
            themeColor={colors.enisaBlue}
            onClick={() => handleFetch()}
          >
            Click to mock fetch
          </Button>
          {items && items.length > 0 &&<View>
            <Text>Here's a cat from state</Text>
            <Image src={items[0].url}/>
             </View>}
        </View>
      </View>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
