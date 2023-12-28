import React, { useState } from "react";
import styled from "styled-components";
import profile from "../assets/profile.png";

function Profile() {
  const [isPostVisible, setIsPostVisible] = useState(true);

  return (
    <Layout>
      <Container>
        <ProfileBox>
          <Img src={profile} />
          <TextBox>
            <Name>1302 김규민</Name>
            <Status>호호호로로로로로</Status>
          </TextBox>
        </ProfileBox>
        <FilterBox>
          <Filter
            border={isPostVisible ? 900 : 300}
            onClick={() => {
              setIsPostVisible(true);
            }}
          >
            올린 게시물
          </Filter>
          <Filter
            border={isPostVisible ? 300 : 900}
            onClick={() => {
              setIsPostVisible(false);
            }}
          >
            롤링 페이퍼
          </Filter>
        </FilterBox>
        <Line></Line>
        <PostBox>
          {isPostVisible ? (
            <>
              <Post></Post>
              <Post></Post>
              <Post></Post>
              <Post></Post>
              <Post></Post>
              <Post></Post>
              <Post></Post>
            </>
          ) : (
            <>
              <Paper></Paper>
              <Paper></Paper>
              <Paper></Paper>
              <Paper></Paper>
            </>
          )}
        </PostBox>
      </Container>
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 46.2rem;
  gap: 12px;
`;

const Img = styled.img`
  width: 10rem;
  height: 10rem;
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 5rem 0 2rem 0;
  gap: 7%;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Name = styled.div`
  font-size: 24px;
`;
const Status = styled.div`
  font-size: 16px;
`;
const FilterBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  justify-content: center;
`;
const Filter = styled.div`
  font-size: 20px;
  font-weight: ${(props) => (props.border ? props.border : 300)};
  cursor: pointer;
`;

const Line = styled.div`
  background-color: #c4c4c4;
  width: 100%;
  height: 2px;
`;

const PostBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Post = styled.div`
  flex: 1 1 1;
  width: 15rem;
  height: 15rem;
  margin: 0.2rem;
  background-color: black;
`;

const Paper = styled(Post)`
  background-color: gray;
`;

export default Profile;
