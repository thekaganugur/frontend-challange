import React, { FC } from 'react';
import styled from 'styled-components';

export interface InputProps {}

const StyledInput = styled.input``;

const Input: FC<InputProps> = (props: InputProps) => {
  return <StyledInput>Input</StyledInput>;
};

export default Input;
