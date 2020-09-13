import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  buttonType?: 'primary' | 'secondary' | 'ghost';
  children?: ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
  background: ${(props) => {
    if (props.buttonType === 'primary') return '#017EFE';
    if (props.buttonType === 'secondary') return '#424242';
    if (props.buttonType === 'ghost') return 'none';
  }};
  border: none;
  padding: 0.5rem 1rem;
  color: #fff;
  cursor: pointer;
`;

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { buttonType = 'primary', children } = props;

  return <StyledButton buttonType={buttonType}>{children}</StyledButton>;
};

export default Button;
