import styled from 'styled-components';

export const MEDIA = {
  lg: '1200px',
  sm: '768px',
};

export const INFINITE_SLIDE_BOOK_NUMBER = 15;

export const CHECK_BOOK_NUMBER = 3;

export const FlexBox = styled.div`
  display: flex;
`;

export const FlexColumn = styled(FlexBox)`
  flex-direction: column;
`;

export const FlexCenter = styled(FlexBox)`
  justify-content: center;
  align-items: center;
`;

export const NO_MARGIN_LAST = '&:last-child { margin: 0;}';
