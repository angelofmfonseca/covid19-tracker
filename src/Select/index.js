import React, { Component } from "react";
import uuid from "react-uuid";

import { SelectWrapper, SelectCountry } from "./styles";

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

    return (
      <SelectWrapper>
        <SelectCountry onChange={this.handleChange}>
          <option value={selectedCountry} disabled selected>
            {selectedCountry}
          </option>
          {countriesSelection.map((country) => {
            return (
              <option value={country} key={uuid()}>
                {country}
              </option>
            );
          })}
        </SelectCountry>
      </SelectWrapper>
    );
  }
}

export default Select;
