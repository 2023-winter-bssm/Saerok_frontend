import React from "react";
import styled from "styled-components";
import profile from "../assets/profile.png";
import heartIcon from "../assets/heartIcon.svg";
import shareIcon from "../assets/shareIcon.svg";
import commentIcon from "../assets/commentIcon.svg";
import { useNavigate } from "react-router-dom";

const Post = ({ image, setImage, setVisible }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Profile
        onClick={() => {
          navigate("/profile");
        }}
      >
        <img src={profile} alt="profile" />
        <div>
          <span>1216 정수환</span>
          <Date>12월 27일</Date>
        </div>
      </Profile>
      <img
        onClick={() => {
          setVisible(1);
          setImage(image);
        }}
        style={{ cursor: "pointer" }}
        src={image}
        alt="null"
      />
      <Bottom>
        <Tags>
          <Clickable>
            <img src={heartIcon} alt="like" />
          </Clickable>
          <Clickable>
            <img src={commentIcon} alt="comment" />
          </Clickable>
          <Clickable>
            <img src={shareIcon} alt="share" />
          </Clickable>
        </Tags>
        <Comment>
          <span>
            배고파요배고파요 <Hashtag>#1학년</Hashtag> <Hashtag>#2반</Hashtag>{" "}
            <Hashtag>#화이팅</Hashtag>
          </span>
        </Comment>
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 516px;
  padding-bottom: 30px;
`;

const Profile = styled.div`
  display: flex;
  gap: 16px;
  font-weight: 900;
  align-items: center;
`;

const Date = styled.span`
  color: #b1b1b1;
  font-size: 12px;
  display: flex;
  align-items: center;
`;

const Bottom = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  font-size: 18px;
`;

const Hashtag = styled.mark`
  background: lightblue;
`;

const Tags = styled.div`
  display: flex;
  gap: 20px;
`;

const Clickable = styled.div`
  cursor: pointer;
`;

const Comment = styled.div`
  cursor: pointer;
`;

export default Post;
