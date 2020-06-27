import styled from "styled-components";

export const SpecificInfo = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Card = styled.div`
  padding: 25px 60px;
  border-radius: 5px;
  box-shadow: 0.5px 0.5px 5px 0.5px #ddd;
  border-radius: 8px;
  color: #fff;
  font-weight: bold;
`;

export const InfectedCard = styled.div`
  background: #0072ce;
  border-radius: 8px;
`;

export const RecoveredCard = styled.div`
  background: #38a169;
  border-radius: 8px;
`;

export const DeathsCard = styled.div`
  background: #e53e3e;
  border-radius: 8px;
`;

export const CardTitle = styled.span`
  display: block;
  padding-bottom: 5px;
  font-size: 1.1rem;
`;

export const CardData = styled.span`
  font-size: 1.2rem;
`;
