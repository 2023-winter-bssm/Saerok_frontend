import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import addIcon from "../assets/addIcon.svg";
import profile from "../assets/profile.png";

const Header = () => {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Menu>
        <UploadButton>
          <img src={addIcon} alt="upload" />
          추억 업로드
        </UploadButton>
        <ProfileContainer>
          <img src={profile} alt="profile" />
          1216 정수환
        </ProfileContainer>
      </Menu>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: calc(100% - 80px);
  padding: 16px 40px;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

const UploadButton = styled.div`
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  background: #f6ae7a;
  color: #fff;
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #000;
  cursor: pointer;
`;

export default Header;
