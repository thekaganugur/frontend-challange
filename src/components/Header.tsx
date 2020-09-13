import React, { FC, useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Box, StyledLink } from '../styled/styledUtils';
import Button from './Button';

const StyledHeader = styled.div``;

const UpperBlueSection = styled.div`
  background-color: #017efe;
  padding: 0.6rem 4rem 0.6rem 3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AppTitle = styled.h1`
  color: #fff;
  margin: 0;
  cursor: pointer;
`;

const ButtonsWraper = styled.div`
  display: flex;
`;

const BelowGraySection = styled.div`
  background-color: #414141;
  padding: 0.5rem 4rem 0.5rem 3rem;
`;

const PageTitle = styled.h2`
  color: #fff;
  margin: 0;
`;

export interface HeaderProps {}

const Header: FC<HeaderProps> = (props: HeaderProps) => {
  const [title, setTitle] = useState<string>('');

  return (
    <StyledHeader>
      <Helmet onChangeClientState={({ title }) => setTitle(title)} />
      <UpperBlueSection>
        <StyledLink to="/">
          <AppTitle>DEMO ST</AppTitle>
        </StyledLink>

        <ButtonsWraper>
          <Box mr={2}>
            <Button buttonType="ghost">Log in</Button>
          </Box>
          <Button buttonType="secondary">Start free trail</Button>
        </ButtonsWraper>
      </UpperBlueSection>

      <BelowGraySection>
        <PageTitle>{title}</PageTitle>
      </BelowGraySection>
    </StyledHeader>
  );
};

export default Header;
