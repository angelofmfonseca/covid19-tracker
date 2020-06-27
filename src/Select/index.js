import React, { Component } from "react";
import uuid from "react-uuid";

import { SelectWrapper, SelectCountry, TopTitle } from "./styles";

class Select extends Component {
  render() {
    const { countriesSelection } = this.props;
    return (
      <SelectWrapper>
        <SelectCountry>
          <option value="" disabled selected>
            Select a country
          </option>
          {countriesSelection.map((country) => (
            <option value={country} key={uuid()}>
              {country}
            </option>
          ))}
        </SelectCountry>
        <TopTitle>World</TopTitle>
      </SelectWrapper>
    );
  }
}

export default Select;
