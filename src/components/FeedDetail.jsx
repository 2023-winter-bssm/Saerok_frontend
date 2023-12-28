import React from "react";
import styled from "styled-components";
import nullImage from "../assets/ImageNull.png";
import heartIcon from "../assets/heartIcon.svg";
import shareIcon from "../assets/shareIcon.svg";
import commentIcon from "../assets/commentIcon.svg";
import meatballIcon from "../assets/meatballIcon.svg";
import profile from "../assets/profile.png";

const FeedDetail = ({ visible }) => {
  if (!visible) return;

  return (
    <Container>
      <ContentImage src={nullImage} alt="null" />
      <Right>
        <div>
          <Top>
            <Profile>
              <img src={profile} alt="profile" />
              <div>
                <span>1216 정수환</span>
                <Date>12월 27일</Date>
              </div>
            </Profile>
            <img src={meatballIcon} alt="" />
          </Top>
          <Comments>
            <Comment>
              <Profile>
                <img src={profile} alt="profile" />
                <div>
                  <span>1302 김규민</span>
                </div>
              </Profile>
              <CommentContent>로고뭐만들지...</CommentContent>
            </Comment>
            <Comment>
              <Profile>
                <img src={profile} alt="profile" />
                <div>
                  <span>1302 김규민</span>
                </div>
              </Profile>
              <CommentContent>로고뭐만들지...</CommentContent>
            </Comment>
            <Comment>
              <Profile>
                <img src={profile} alt="profile" />
                <div>
                  <span>1302 김규민</span>
                </div>
              </Profile>
              <CommentContent>로고뭐만들지...</CommentContent>
            </Comment>
          </Comments>
        </div>
        <Bottom>
          <Tags>
            <img src={heartIcon} alt="like" />
            <img src={commentIcon} alt="comment" />
            <img src={shareIcon} alt="share" />
          </Tags>
          <CommentInput placeholder="댓글을 적어주세요..." />
        </Bottom>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  width: fit-content;
  height: fit-content;
  z-index: 50;
  transform: translate(-50%, -50%);
`;

const Right = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 600px;
  justify-content: space-between;
`;

const Top = styled.div`
  padding: 18px;
  border-bottom: 1px solid #d3d3d3;
  display: flex;
  justify-content: space-between;
`;

const Comments = styled.div`
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const Comment = styled.div`
  padding: 6px 10px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Bottom = styled.div`
  border-top: 1px solid #d3d3d3;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Profile = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
`;

const CommentInput = styled.input`
  padding: 16px;
  ::placeholder {
    font-size: 14px;
  }
`;

const Tags = styled.div`
  display: flex;
  gap: 20px;
`;

const Date = styled.span`
  color: #b1b1b1;
  font-size: 12px;
  display: flex;
  align-items: center;
`;

const CommentContent = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ContentImage = styled.img`
  max-width: 600px;
`;

export default FeedDetail;
