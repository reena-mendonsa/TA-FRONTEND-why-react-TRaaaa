import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import React from "react";

function App(props) {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
