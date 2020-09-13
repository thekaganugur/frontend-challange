import React, { DetailsHTMLAttributes, FC, SelectHTMLAttributes } from 'react';
import styled from 'styled-components';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  width?: string;
  options: { value: string; label: string }[];
}

const StyledSelect = styled.select<Omit<SelectProps, 'options'>>`
  padding: 0.5rem 1rem;
  width: ${({ width }) => width ?? '15rem'};
`;

const Select: FC<SelectProps> = (props: SelectProps) => {
  const { options, ...rest } = props;
  return (
    <StyledSelect {...rest}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
