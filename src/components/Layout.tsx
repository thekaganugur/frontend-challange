import React, { FC, ReactNode } from 'react';
import { Box } from '../styled/styledUtils';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

export interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = (props: LayoutProps) => {
  const { children } = props;

  return (
    <Box height="100%">
      <Header />
      <Content>{children}</Content>
      {/* <Footer /> */}
    </Box>
  );
};

export default Layout;
