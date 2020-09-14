import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  typography,
  space,
  color,
  TypographyProps,
  SpaceProps,
  ColorProps,
  LayoutProps,
  layout,
  FlexboxProps,
  flexbox,
} from 'styled-system';

type BoxProps = TypographyProps & SpaceProps & ColorProps & LayoutProps;
type FlexProps = BoxProps & FlexboxProps;

export const Box = styled.div<BoxProps>(typography, space, color, layout);

export const Flex = styled(Box)<FlexProps>`
  display: flex;
  ${flexbox}
`;

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: inherit;
  /* cursor: inherit; */
`;
