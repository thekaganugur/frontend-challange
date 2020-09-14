import React, { FC } from 'react';
import styled from 'styled-components';
import { device } from '../styled/breakpoints';

const cardWidth = '10rem';

export interface CardProps {
  bigText?: string;
  title: string;
  image?: string;
}

const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${cardWidth};

  @media ${device.xsDown} {
    width: 100%;
  }
`;

const StyledCard = styled.div`
  min-height: 14rem;
  width: ${cardWidth};
  background: #1e1e1e;
  margin-bottom: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${device.xsDown} {
    width: 100%;
  }
`;

const Title = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

// export const CardImage = styled.image``;
export const CardText = styled.div`
  font-size: 2em;
  color: #fff;
`;

const Card: FC<CardProps> = (props: CardProps) => {
  const { title, bigText, image } = props;

  return (
    <Wraper>
      <StyledCard>
        {bigText && <CardText>{bigText}</CardText>}
        {image && <img src={props.image} alt={`${title}`} />}
      </StyledCard>
      <Title>{title}</Title>
    </Wraper>
  );
};

export default Card;
