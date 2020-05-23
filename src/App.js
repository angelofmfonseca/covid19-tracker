import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  componentDidMount() {
    const url = "https://covid19.mathdro.id/api";
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("fatching data completed");
      });
  }

  render() {
    return <div className="App"></div>;
  }
}

export default App;
