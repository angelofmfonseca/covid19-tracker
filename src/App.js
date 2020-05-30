import React, { Component } from "react";
import styled from "styled-components";
import Moment from "react-moment";
import uuid from "react-uuid";

import { getData, getCountry } from "./services";
import Cards from "./Cards";

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
        confirmed: generalData.confirmed.value,
        recovered: generalData.recovered.value,
        deaths: generalData.deaths.value,
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
            <TopTitle>
              <LastUpdateTitle> Last Update:</LastUpdateTitle>
              <Moment data={lastUpdate} format="MM/DD/YYYY - HH:mm" />
            </TopTitle>
          </GeneralInfo>
          <Cards />
        </DataWrapper>
      </Main>
    );
  }
}

const Main = styled.main`
  text-align: center;
  margin: 20px;
`;

const Title = styled.span`
  font-size: 3rem;
`;

const SubTitle = styled.span`
  font-size: 1.5rem;
  display: block;
`;

const DataWrapper = styled.div`
  width: 70%;
  margin: 50px auto;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0.5px 0.5px 5px 0.5px #ddd;
`;

const GeneralInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  padding-bottom: 30px;
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  width: 18%;
`;

const SelectCountry = styled.select`
  padding: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
  font-size: 1.2rem;
`;

const TopTitle = styled.span`
  font-size: 1.3rem;
`;

const LastUpdateTitle = styled.span`
  display: block;
  text-align: end;
`;

export default App;
