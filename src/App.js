import React, { Component } from "react";
import styled from "styled-components";

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
      <Main className="App">
        <Title>
          COVID-19
          <SubTitle>Real Time Tracker</SubTitle>
        </Title>
        <DataWrapper>
          <GeneralInfo>
            <SelectCountry>World</SelectCountry>
            <LastUpdate>{this.state.data.lastUpdate}</LastUpdate>
          </GeneralInfo>
          <SpecificInfo>
            <span>{this.state.data.confirmed}</span>
            <span>{this.state.data.recovered}</span>
            <span>{this.state.data.deaths}</span>
          </SpecificInfo>
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
  border: #ccc solid 1px;
`;

const GeneralInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 0 auto;
`;

const SelectCountry = styled.span`
  font-size: 1rem;
`;

const LastUpdate = styled.span`
  font-size: 1rem;
`;

const SpecificInfo = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default App;
