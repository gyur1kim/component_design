import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 12px;

  &:hover {
    background-color: #e8eaed;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Right = styled.div``;

export const Count = styled.span`
  font-size: 14px;
  color: #989898;
`;