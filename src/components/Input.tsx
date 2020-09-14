import React, { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { device } from '../styled/breakpoints';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const StyledInput = styled.input`
  padding: 0.5rem 1rem;
  width: ${({ width }) => width ?? '15rem'};

  /* @media ${device.mdDown} {
    width: 100%;
  } */
`;

const Input: FC<InputProps> = (props: InputProps) => {
  return <StyledInput className="styled-input" {...props} />;
};

export default Input;
