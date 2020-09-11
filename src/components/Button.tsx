import React, { FC } from 'react';
import styled from 'styled-components';

export interface ButtonProps {}

const StyledButton = styled.button``;

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  return <StyledButton>Button</StyledButton>;
};

export default Button;
