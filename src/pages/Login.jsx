import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePw = (e) => {
    setPassword(e.target.value);
  };

  const onClickLogin = () => {
    navigate("/feed");
  };
  const navigate = useNavigate();
  return (
    <Layout>
      <Container>
        <Logo>Saerok</Logo>
        <NameBox
          placeholder="사용자 이름을 입력하세요"
          onChange={handleName}
          value={name}
        />
        <PasswordBox
          placeholder="비밀번호를 입력하세요"
          type="password"
          onChange={handlePw}
          value={password}
        />
        <Submit onClick={onClickLogin}>
          <>로그인</>
        </Submit>
      </Container>
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Logo = styled.div`
  color: #ff8c4b;
  font-size: 1.5rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const InputBox = styled.input`
  height: 3rem;
  width: 22rem;
  border-radius: 1rem;
  padding: 0.2rem 1.3rem;
  border: none;

  font-size: 1rem;

  background-color: #f1f1f1;
`;

const NameBox = styled(InputBox)``;

const PasswordBox = styled(InputBox)``;

const Submit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 22rem;
  border-radius: 1rem;
  padding: 0.2rem 1.3rem;
  border: none;

  font-size: 1rem;

  color: white;
  background-color: #ff8c4b;
`;

export default Login;
