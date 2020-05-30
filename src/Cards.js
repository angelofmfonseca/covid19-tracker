import React, { Component } from "react";
import styled from "styled-components";
import CountUp from "react-countup";

import { getData } from "./services";

class Cards extends Component {
  state = {
    data: {
      confirmed: null,
      recovered: null,
      deaths: null,
    },
  };

  async componentDidMount() {
    const generalData = await getData();

    this.setState({
      data: {
        confirmed: generalData.confirmed.value,
        recovered: generalData.recovered.value,
        deaths: generalData.deaths.value,
      },
    });
  }

  render() {
    const { confirmed, recovered, deaths } = this.state.data;

    return (
      <SpecificInfo>
        <Card>
          <CardTitle>Infected:</CardTitle>
          <CardData>
            <CountUp start={0} end={confirmed} separator="." />
          </CardData>
        </Card>
        <Card>
          <CardTitle>Recovered:</CardTitle>
          <CardData>
            <CountUp start={0} end={recovered} separator="." />
          </CardData>
        </Card>
        <Card>
          <CardTitle>Deaths:</CardTitle>
          <CardData>
            <CountUp start={0} end={deaths} separator="." />
          </CardData>
        </Card>
      </SpecificInfo>
    );
  }
}

const SpecificInfo = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Card = styled.div`
  padding: 25px 60px;
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

export default Cards;
