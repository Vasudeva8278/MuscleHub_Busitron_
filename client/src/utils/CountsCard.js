import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: #f2f2f2;
  padding: 16px;
  border-radius: 10px;
  min-width: 180px;
  text-align: center;
`;

const Label = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const Value = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const CountsCard = ({ item, data }) => {
  const rawValue = data?.[item.key];
  const value =
    rawValue !== undefined && !isNaN(Number(rawValue))
      ? Number(rawValue).toFixed(2)
      : "0.00";

  return (
    <Card>
      <Label>{item.label}</Label>
      <Value>{value}</Value>
    </Card>
  );
};

export default CountsCard;
