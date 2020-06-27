import React, { Component } from "react";
import styled from "styled-components";
import Moment from "react-moment";

import { getData, getCountry } from "../services";
import Cards from "../Cards";
import Select from "../Select";

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
            <Select countriesSelection={countriesSelection} />
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
  background-color: #fff;
`;

const GeneralInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  padding-bottom: 30px;
`;

const TopTitle = styled.span`
  font-size: 1.1rem;
`;

const LastUpdateTitle = styled.span`
  display: block;
  text-align: end;
`;

export default App;
