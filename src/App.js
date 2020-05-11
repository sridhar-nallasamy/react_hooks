import React from "react";
import "./App.css";
import ComponentC from "./components/useContext/ComponentC";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <ChannelContext.Provider value={"VGS"}>
        <UserContext.Provider value={"Sridhar"}>
          <ComponentC />
        </UserContext.Provider>
      </ChannelContext.Provider>
    </div>
  );
}

export default App;
