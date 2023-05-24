import styled from '@emotion/styled';

export const Review = styled.div`
  display: flex;
  justify-content: start;
  font-size: 20px;
  margin-top: 20px;
  margin-left: 20px;
`;

export const Text = styled.div`
  margin-left: 5px;
  margin-right: 5px;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  & li {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 5px;
    box-shadow: 0 1px 4px #0000004d, -23px 0 20px -23px #000c,
      23px 0 20px -23px #000c, inset 0 0 40px #0000001a;
    & b {
      background-color: #0000001a;
      text-decoration: underline;
      line-height: 20px;
      font-size: 20px;
    }
  }
`;