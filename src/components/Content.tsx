import React, { FC, ReactNode } from 'react';

export interface ContentProps {
  children: ReactNode;
}

const Content: FC<ContentProps> = (props: ContentProps) => {
  const { children } = props;

  return <div>{children}</div>;
};

export default Content;
