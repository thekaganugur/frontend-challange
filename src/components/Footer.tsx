import React, { FC } from 'react';
import styled from 'styled-components';

export interface FooterProps {}

const StyledFooter = styled.footer`
  background-color: #1f1f1f;
`;

const NavigationWraper = styled.div``;

const Copyright = styled.div``;

const LinksWraper = styled.div``;

const Footer: FC<FooterProps> = (props: FooterProps) => {
  return (
    <StyledFooter>
      FOOTER
      <NavigationWraper></NavigationWraper>
      <Copyright></Copyright>
      <LinksWraper></LinksWraper>
    </StyledFooter>
  );
};

export default Footer;
