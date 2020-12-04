import React from "react";
import "./App.css";
import { Text, View } from "./components/blocks";

const App = () => {
  return (
    <>
      <View height="400px" display="flex" direction="column" justifyContent="center">
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
      </View>
    </>
  );
};

export default App;
