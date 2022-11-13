import React from "react";
import Header from "./Header";
import Main from "./Main";
import {ThemeProvider,ThemeConsumer} from "./ThemeContex"

class App extends React.Component {
  
  render() {
    return (
      <>
      <ThemeProvider>
        <Header  />
        <Main />
        </ThemeProvider>
      </>
    );
  }
}

export default App;
