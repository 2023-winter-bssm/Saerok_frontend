import React, { useState } from "react";
import styled from "styled-components";
import profile from "../assets/profile.png";

function Login() {
  const [desc, setDesc] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const handleDesc = (e) => {
    setDesc(e.target.value);
  };

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const onClickSubmit = () => {
    openModalHandler();
    alert(desc);
  };

  return (
    <>
      {isOpen ? (
        <Layout>
          <Container>
            <HeaderBox></HeaderBox>
            <DescBox
              maxLength={39}
              rows={4}
              placeholder="내용을 작성해주세요.."
              onChange={handleDesc}
              value={desc}
            />
            <SubmitBox>
              <ProfileBox>
                <Name>from 우어엉</Name>
              </ProfileBox>
              <Submit onClick={onClickSubmit}>
                <>게시</>
              </Submit>
            </SubmitBox>
          </Container>
        </Layout>
      ) : null}
    </>
  );
}

const Layout = styled.div`
  width: 26rem;
  height: fit-content;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1rem 2rem 1rem;
  border: solid 1px;
`;

const Container = styled.div`
  width: 24rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 1rem;
`;

const ProfileBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  gap: 1.2rem;
`;

const Profile = styled.img``;

const Name = styled.div`
  font-size: 1.2rem;
  font-weight: 900;
  margin-bottom: 0.4rem;
`;

const DescBox = styled.textarea`
  box-sizing: border-box;
  text-align: center;
  line-height: 4.5rem;
  border-radius: 0.5rem;
  padding: 1rem 1rem;
  font-size: 2rem;
  resize: none;
  border-color: #ff8c4b;
  margin-bottom: 1rem;
  height: 25rem;
  vertical-align: middle;
`;

const Submit = styled.div`
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  border-radius: 0.5rem;
  padding: 0.2rem 1.3rem;
  border: none;

  font-size: 1rem;

  color: white;
  background-color: #ff8c4b;
`;

const SubmitBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
`;

export default Login;
