import React, { FC } from 'react';
import { Box, Flex, StyledLink } from '../styled/styledUtils';
import Card, { CardProps } from './Card';

interface RenderCardsProps {
  cards?: Array<{ to?: string } & CardProps>;
}

const RenderCards: FC<RenderCardsProps> = (props: RenderCardsProps): any => {
  const { cards } = props;

  const getCards = () =>
    cards?.map(({ to, ...cardProps }) => {
      const card = <Card {...cardProps}></Card>;

      if (to) {
        return (
          <Box mr={4}>
            <StyledLink to={to}>{card}</StyledLink>
          </Box>
        );
      } else {
        return <Box mr={4}>{card}</Box>;
      }
    });

  return <Flex flexWrap="wrap">{getCards()}</Flex>;
};

export default RenderCards;
