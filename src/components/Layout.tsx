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
    <>
      <Header />
      <Box minHeight="100vh">
        <Content>{children}</Content>
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
