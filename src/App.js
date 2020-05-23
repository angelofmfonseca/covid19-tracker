import React, { Component } from "react";

import { getData } from "./services";

class App extends Component {
  state = {
    data: {
      confirmed: null,
      recovered: null,
      deaths: null,
      lastUpdate: null,
    },
  };

  async componentDidMount() {
    const generalData = await getData();

    this.setState({
      data: {
        confirmed: generalData.confirmed.value,
        recovered: generalData.recovered.value,
        deaths: generalData.deaths.value,
        lastUpdate: generalData.lastUpdate,
      },
    });
  }

  render() {
    return (
      <div className="App">
        <span>{this.state.data.confirmed}</span>
      </div>
    );
  }
}

export default App;
