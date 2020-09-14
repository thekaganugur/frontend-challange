import React, { FC } from 'react';
import styled from 'styled-components';
import { device } from '../styled/breakpoints';
import { Box, Flex, StyledLink } from '../styled/styledUtils';
import Card, { CardProps } from './Card';

interface RenderCardsProps {
  cards?: Array<{ to?: string } & CardProps>;
  spaceBetween?: boolean;
}

const Wraper = styled(Flex)`
  @media ${device.mdDown} {
    justify-content: center;
  }
  @media ${device.xsDown} {
    .card-parent {
      width: 100%;
    }
  }
`;

const RenderCards: FC<RenderCardsProps> = (props: RenderCardsProps): any => {
  const { cards, spaceBetween } = props;

  const getCards = () =>
    cards?.map(({ to, ...cardProps }, i) => {
      const card = <Card {...cardProps}></Card>;

      if (to) {
        return (
          <Box key={i} padding="10px" className="card-parent">
            <StyledLink to={to}>{card}</StyledLink>
          </Box>
        );
      } else {
        return (
          <Box key={i} padding="10px" className="card-parent">
            {card}
          </Box>
        );
      }
    });

  return (
    <Wraper
      flexWrap="wrap"
      justifyContent={spaceBetween ? 'space-between' : null}>
      {getCards()}
    </Wraper>
  );
};

export default RenderCards;
