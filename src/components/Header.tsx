import React, { FC } from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledHeader = styled.div``;

const UpperBlueSection = styled.div`
  background-color: #0670fe;
  padding: 0.5rem 4rem 0.5rem 3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AppTitle = styled.h1`
  color: #fff;
  margin: 0;
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
  return (
    <StyledHeader>
      <UpperBlueSection>
        <AppTitle>DEMO ST</AppTitle>

        <ButtonsWraper>
          <Button>Log in</Button>
          <Button>Start free trail</Button>
        </ButtonsWraper>
      </UpperBlueSection>

      <BelowGraySection>
        <PageTitle>Popular</PageTitle>
      </BelowGraySection>
    </StyledHeader>
  );
};

export default Header;
