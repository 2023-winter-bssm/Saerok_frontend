import React from "react";
import styled from "styled-components";
import profile from "../assets/profile.png";
import nullImage from "../assets/ImageNull.png";
import heartIcon from "../assets/heartIcon.svg";
import shareIcon from "../assets/shareIcon.svg";
import commentIcon from "../assets/commentIcon.svg";

const Post = () => {
  return (
    <Container>
      <Profile>
        <img src={profile} alt="profile" />
        <div>
          <span>1216 정수환</span>
          <Date>12월 27일</Date>
        </div>
      </Profile>
      <img src={nullImage} alt="null" />
      <Bottom>
        <Tags>
          <img src={heartIcon} alt="like" />
          <img src={commentIcon} alt="comment" />
          <img src={shareIcon} alt="share" />
        </Tags>
        <span>
          배고파요배고파요 <Hashtag>#1학년</Hashtag> <Hashtag>#2반</Hashtag>{" "}
          <Hashtag>#화이팅</Hashtag>
        </span>
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 516px;
`;

const Profile = styled.div`
  display: flex;
  gap: 16px;
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

export default Post;
