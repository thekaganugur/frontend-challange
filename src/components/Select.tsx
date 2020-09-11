import React, { FC } from 'react';

export interface SelectProps {}

const Select: FC<SelectProps> = (props: SelectProps) => {
  return (
    <select name="cars" id="cars">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
    </select>
  );
};

export default Select;
