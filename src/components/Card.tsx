import React, { FC } from 'react';
import styled from 'styled-components';

export interface CardProps {}

const StyledCard = styled.div``;

const Card: FC<CardProps> = (props: CardProps) => {
  return <StyledCard>Card</StyledCard>;
};

export default Card;
