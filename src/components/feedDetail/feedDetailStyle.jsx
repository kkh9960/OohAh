import styled from 'styled-components';

export const FeedSection = styled.section`
  display: flex;
  flex-flow: column nowrap;

  width: 80vw;
  /* max-width: ; */
`;

export const FeedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
`;

export const FeedBody = styled.article`
  display: flex;
  flex-flow: column nowrap;
  background-color: white;
  border-radius: 20px;
  padding: 30px;
`;

export const FeedLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const FeedUserName = styled.span`
  font-size: 20px;
  margin: 0 0 0px 0;
`;

export const FeedContent = styled.p`
  font-size: 25px;
  margin: 0 0 40px 0;
`;
