import styled from 'styled-components';
import { device } from './breakpoints';

export const SearchFilterWraper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  .search-wraper {
    display: flex;
  }

  @media ${device.smDown} {
    flex-direction: column;
    align-items: center;

    .search-wraper {
      width: 100%;
      margin-bottom: 1rem;
    }

    .styled-input,
    .styled-select {
      width: 100%;
    }
  }
`;
