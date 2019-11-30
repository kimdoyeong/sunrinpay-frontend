import React from "react";
import styled from "styled-components";
import Container from "../../Layout/Container";
import backgroundVideo from "./video.mp4";

const Header = styled.header`
  border-bottom: 1px solid #eaeaea;
  position: relative;
  height: 300px;
  overflow: hidden;
  .video {
    object-fit: cover;
    width: 130%;
    height: 130%;
    position: absolute;
    top: -20px;
    left: -20px;
    z-index: -1;
    filter: blur(4px);
  }
  .container {
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-shadow: 0 0 3px rgb(255, 255, 255);

    h1 {
      margin-top: 0;
      margin-bottom: 1rem;
      font-size: 3rem;
    }
  }
`;
function ShopHeader() {
  return (
    <Header>
      <video
        className="video"
        src={backgroundVideo}
        loop
        playsInline
        muted
        autoPlay
      />
      <Container className="container">
        <h1>온라인 매점</h1>
        <p>쉽고 빠르게 쇼핑해보세요.</p>
      </Container>
    </Header>
  );
}

export default ShopHeader;
