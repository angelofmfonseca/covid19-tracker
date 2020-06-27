import React, { Component } from "react";
import Moment from "react-moment";

import { TopTitle, LastUpdateTitle } from "./styles";

export default class LastUpdate extends Component {
  render() {
    const { lastUpdate } = this.props;
    return (
      <TopTitle>
        <LastUpdateTitle> Last Update:</LastUpdateTitle>
        <Moment data={lastUpdate} format="MM/DD/YYYY - HH:mm" />
      </TopTitle>
    );
  }
}
