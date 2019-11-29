import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.p`
  font-size: 5rem;
  font-weight: 900;
`;

const Description = styled.p`
  font-size: 2rem;
`;

const NotFound: React.FC = () => {
  return (
    <Wrapper>
      <Title>404</Title>
      <Title>Not Found</Title>
      <Description>페이지를 찾을 수 없습니다.</Description>
    </Wrapper>
  );
};

export default NotFound;
