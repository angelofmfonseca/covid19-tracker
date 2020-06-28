import React, { Component } from "react";

import { getData } from "../Services/getData";
import { getCountry } from "../Services/getCountry";
import Cards from "../Cards";
import Select from "../Select";
import LastUpdate from "../LastUpdate";
import { Main, Title, SubTitle, DataWrapper, GeneralInfo } from "./styles";

class App extends Component {
  state = {
    data: {
      lastUpdate: null,
      countriesSelection: [],
    },
  };

  async componentDidMount() {
    const generalData = await getData();

    const countriesSelection = await getCountry();
    const countries = countriesSelection.countries.map(
      (country) => country.name
    );

    this.setState({
      data: {
        lastUpdate: generalData.lastUpdate,
        countriesSelection: countries,
      },
    });
  }

  render() {
    const { lastUpdate, countriesSelection } = this.state.data;

    return (
      <Main>
        <Title>
          COVID-19
          <SubTitle>Real Time Tracker</SubTitle>
        </Title>
        <DataWrapper>
          <GeneralInfo>
            <Select countriesSelection={countriesSelection} />
            <LastUpdate lastUpdate={lastUpdate} />
          </GeneralInfo>
          <Cards />
        </DataWrapper>
      </Main>
    );
  }
}

export default App;
