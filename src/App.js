import React, { Component } from "react";
import styled from "styled-components";
import Moment from "react-moment";
import CountUp from "react-countup";

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
    const { confirmed, recovered, deaths, lastUpdate } = this.state.data;
    return (
      <Main>
        <Title>
          COVID-19
          <SubTitle>Real Time Tracker</SubTitle>
        </Title>
        <DataWrapper>
          <GeneralInfo>
            <TopTitle>World</TopTitle>
            <TopTitle>
              <LastUpdateTitle> Last Update:</LastUpdateTitle>
              <Moment data={lastUpdate} format="MM/DD/YYYY - HH:mm" />
            </TopTitle>
          </GeneralInfo>
          <SpecificInfo>
            <DataCard>
              <CardTitle>Confirmed:</CardTitle>
              <CardData>
                <CountUp start={0} end={confirmed} separator="." />
              </CardData>
            </DataCard>
            <DataCard>
              <CardTitle>Recovered:</CardTitle>
              <CardData>
                <CountUp start={0} end={recovered} separator="." />
              </CardData>
            </DataCard>
            <DataCard>
              <CardTitle>Deaths:</CardTitle>
              <CardData>
                <CountUp start={0} end={deaths} separator="." />
              </CardData>
            </DataCard>
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
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0.5px 0.5px 5px 0.5px #ddd;
`;

const GeneralInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 0 auto;
  padding-bottom: 30px;
`;

const TopTitle = styled.span`
  font-size: 1.3rem;
`;

const LastUpdateTitle = styled.span`
  display: block;
  text-align: end;
`;

const SpecificInfo = styled.div`
  display: flex;
  justify-content: space-around;
`;

const DataCard = styled.div`
  padding: 20px 50px;
  border-radius: 5px;
  box-shadow: 0.5px 0.5px 5px 0.5px #ddd;
`;

const CardTitle = styled.span`
  display: block;
  padding-bottom: 5px;
  font-size: 1.3rem;
`;

const CardData = styled.span`
  font-size: 1.2rem;
`;

export default App;
