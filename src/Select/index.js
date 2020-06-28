import React, { Component } from "react";
import uuid from "react-uuid";

import { SelectWrapper, SelectCountry, CountryTitle } from "./styles";

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountry: "World",
    };
  }

  handleChange = (e) => {
    this.setState({
      selectedCountry: e.target.value,
    });
  };

  render() {
    const { countriesSelection } = this.props;
    const { selectedCountry } = this.state;
    console.log(selectedCountry);
    return (
      <SelectWrapper>
        <SelectCountry onChange={this.handleChange}>
          <option selected>Select a country</option>
          {countriesSelection.map((country) => {
            return (
              <option value={country} key={uuid()}>
                {country}
              </option>
            );
          })}
        </SelectCountry>
        <CountryTitle>{selectedCountry}</CountryTitle>
      </SelectWrapper>
    );
  }
}

export default Select;
