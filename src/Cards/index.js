import React, { Component } from "react";
import CountUp from "react-countup";

import { getData } from "../Services/getData";
import {
  SpecificInfo,
  Card,
  CardTitle,
  CardData,
  InfectedCard,
  RecoveredCard,
  DeathsCard,
} from "./styles";

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
        <InfectedCard>
          <Card>
            <CardTitle>Infected:</CardTitle>
            <CardData>
              <CountUp start={0} end={confirmed} separator="." />
            </CardData>
          </Card>
        </InfectedCard>
        <RecoveredCard>
          <Card>
            <CardTitle>Recovered:</CardTitle>
            <CardData>
              <CountUp start={0} end={recovered} separator="." />
            </CardData>
          </Card>
        </RecoveredCard>
        <DeathsCard>
          <Card>
            <CardTitle>Deaths:</CardTitle>
            <CardData>
              <CountUp start={0} end={deaths} separator="." />
            </CardData>
          </Card>
        </DeathsCard>
      </SpecificInfo>
    );
  }
}

export default Cards;
