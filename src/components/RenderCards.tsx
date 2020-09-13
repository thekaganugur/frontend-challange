import React, { FC } from 'react';
import { Box, Flex, StyledLink } from '../styled/styledUtils';
import Card, { CardProps } from './Card';

interface RenderCardsProps {
  cards?: Array<{ to?: string } & CardProps>;
  spaceBetween?: boolean;
}

const RenderCards: FC<RenderCardsProps> = (props: RenderCardsProps): any => {
  const { cards, spaceBetween } = props;

  const getCards = () =>
    cards?.map(({ to, ...cardProps }, i) => {
      const card = <Card {...cardProps}></Card>;

      if (to) {
        return (
          <Box key={i} padding="10px">
            <StyledLink to={to}>{card}</StyledLink>
          </Box>
        );
      } else {
        return (
          <Box key={i} padding="10px">
            {card}
          </Box>
        );
      }
    });

  return (
    <Flex
      flexWrap="wrap"
      justifyContent={spaceBetween ? 'space-between' : null}
    >
      {getCards()}
    </Flex>
  );
};

export default RenderCards;
