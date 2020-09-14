import React, { FC, Fragment } from 'react';
import styled from 'styled-components';
import { ReactComponent as Facebook } from '../assets/social/facebook-white.svg';
import { ReactComponent as Twitter } from '../assets/social/twitter-white.svg';
import { ReactComponent as Instagram } from '../assets/social/instagram-white.svg';

import { ReactComponent as AppStore } from '../assets/store/app-store.svg';
import { ReactComponent as PlayStore } from '../assets/store/play-store.svg';
import { Flex } from '../styled/styledUtils';
import { device } from '../styled/breakpoints';

export interface FooterProps {}

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 4rem 7rem;

  color: white;
  font-size: 0.85em;
  background-color: #1e1e1e;

  @media ${device.mdDown} {
    padding: 1rem 2rem;
    align-items: center;
  }
`;

const NavigationWraper = styled.div`
  display: flex;
  margin-bottom: 1rem;
  span {
    margin-right: 0.7rem;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  @media ${device.mdDown} {
    flex-direction: column;
    align-items: center;
    .line {
      display: none;
    }
  }
`;

const Copyright = styled.div`
  margin-bottom: 3rem;
  font-weight: 300;

  @media ${device.mdDown} {
    text-align: center;
  }
`;

const LinksWraper = styled.div`
  display: flex;
  justify-content: space-between;

  svg:not(:last-child) {
    margin-right: 1.5rem;
  }
  .social {
    height: 30px;
    width: 30px;
  }
  .store {
  }

  @media ${device.mdDown} {
    flex-direction: column;
    align-items: center;

    .flex-wraper {
      margin-bottom: 2rem;
    }
  }
`;

const navigationStrs: string[] = [
  'Home',
  'Terms And Conditions',
  'Privacy Policy',
  'Collection Statement',
  'Help',
  'Manage Account',
];

const Footer: FC<FooterProps> = (props: FooterProps) => {
  const renderNavigationLinks = () =>
    navigationStrs.map((str) => (
      <Fragment key={str}>
        <span>
          <a href="#">{str}</a>
        </span>
        <span className="line">|</span>
      </Fragment>
    ));

  return (
    <StyledFooter>
      <NavigationWraper>{renderNavigationLinks()}</NavigationWraper>
      <Copyright>
        Copyright @2016 DEMO Streaming. All Rights Reserved.
      </Copyright>
      <LinksWraper>
        <Flex className="flex-wraper">
          <Facebook className="social" />
          <Twitter className="social" />
          <Instagram className="social" />
        </Flex>
        <Flex className="flex-wraper">
          <AppStore className="store" />
          <PlayStore className="store" />
        </Flex>
      </LinksWraper>
    </StyledFooter>
  );
};

export default Footer;
