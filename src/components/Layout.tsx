import React, { Children, FC, ReactNode } from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

export interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};

export default Layout;
