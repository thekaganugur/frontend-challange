import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

export interface ContentProps {
  children: ReactNode;
}

const StyledContent = styled.div`
  height: 100%;
  margin: 0 auto;

  max-width: 990px;
  padding: 1.5rem 1rem;
`;

const Content: FC<ContentProps> = (props: ContentProps) => {
  const { children } = props;

  return <StyledContent>{children}</StyledContent>;
};

export default Content;
