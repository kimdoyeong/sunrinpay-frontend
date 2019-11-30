import React, { useState } from "react";
import Container from "../../components/Layout/Container";
import SEO from "../../components/SEO";
import Input, { InputWrap, Textarea } from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import { SignUp } from "../../lib/api/store";

interface DataType {
  id: string;
  password: string;
  password_check: string;
  name: string;
  description: string;
}
function StoreSignUp() {
  const [data, setData] = useState<DataType>({
    id: "",
    password: "",
    password_check: "",
    name: "",
    description: ""
  });

  function onFormChange(field: keyof DataType) {
    return (e: any) => {
      setData({
        ...data,
        [field]: e.target.value as string
      });
    };
  }
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { id, password, password_check, name, description } = data;
    if (!id || !password || !password_check || !name || !description) {
      alert("모든 항목을 입력해 주세요.");
      return;
    }
    if (data.password_check !== data.password) {
      alert("비밀번호를 다시 확인해주세요.");
      return;
    }
    SignUp({
      id,
      password,
      name,
      description
    })
      .then(() => {
        alert("가입이 완료되었습니다.");
      })
      .catch(e => {
        alert(e.message);
      });
  }

  return (
    <Container>
      <SEO title="스토어 가입" />
      <h1>스토어 가입</h1>
      <form onSubmit={onSubmit}>
        <InputWrap>
          <span>아이디</span>
          <Input type="text" onChange={onFormChange("id")} value={data.id} />
        </InputWrap>
        <InputWrap>
          <span>비밀번호</span>
          <Input
            type="password"
            onChange={onFormChange("password")}
            autoComplete="new-password"
            value={data.password}
          />
        </InputWrap>
        <InputWrap style={{ marginBottom: 0 }}>
          <span>비밀번호 확인</span>
          <Input
            type="password"
            onChange={onFormChange("password_check")}
            autoComplete="new-password"
            value={data.password_check}
          />
        </InputWrap>
        <div style={{ color: "red", height: 23 }}>
          {data.password &&
            data.password_check &&
            data.password !== data.password_check &&
            "비밀번호가 같지 않습니다."}
        </div>
        <InputWrap>
          <span>스토어 이름</span>
          <Input
            type="text"
            onChange={onFormChange("name")}
            value={data.name}
          />
        </InputWrap>
        <InputWrap>
          <span>스토어 설명</span>
          <Textarea
            defaultValue={data.description}
            onChange={onFormChange("description")}
          />
        </InputWrap>
        <Button>스토어 가입</Button>
      </form>
    </Container>
  );
}
export default StoreSignUp;
