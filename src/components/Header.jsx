import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import addIcon from "../assets/addIcon.svg";
import profile from "../assets/profile.png";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Link to="/feed">
        <img style={{ height: "36px" }} src={logo} alt="logo" />
      </Link>
      <Menu>
        <Link to="/upload">
          <UploadButton>
            <img src={addIcon} alt="upload" />
            추억 업로드
          </UploadButton>
        </Link>
        <ProfileContainer
          onClick={() => {
            navigate("/profile");
          }}
        >
          <img src={profile} alt="profile" />
          1302 김규민
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
  position: fixed;
  background-color: #ffffff;
  z-index: 5;
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
