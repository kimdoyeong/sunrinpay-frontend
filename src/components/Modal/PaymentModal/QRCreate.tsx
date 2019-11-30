import React, { Component } from "react";
import styled from "styled-components";
import QRCode from "qrcode";

const Wrapper = styled.div`
  text-align: center;
  & img.qr {
    width: 100%;
    max-width: 500px;
    display: block;
    margin: 0 auto;
  }
  & > .or {
    margin-top: 15px;
  }
  & > .sub {
    color: #7a7a7a;
  }
`;

interface QRCreateInterface {
  token: string;
}

export default class QRCreate extends Component<QRCreateInterface> {
  state = {
    QRImage: ""
  };

  async componentWillMount() {
    if (this.props.token) {
      const QRImage = await QRCode.toDataURL(this.props.token);
      this.setState({ QRImage });
      console.log(QRImage);
    }
  }

  render() {
    return (
      <Wrapper>
        <h1>아래 QR 코드를 스캔하세요.</h1>
        <div>
          <img className="qr" src={this.state.QRImage} alt="Payment QR Code" />
        </div>
        <p className="sub">QR 코드는 7일간 유효합니다.</p>
      </Wrapper>
    );
  }
}
