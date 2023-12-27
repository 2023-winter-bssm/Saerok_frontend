import React, { useState, useRef } from "react";
import styled from "styled-components";
import imagenull from "../assets/ImageNull.png";
import profile from "../assets/profile.png";

function Login() {
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [imgFile, setImgFile] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const imgRef = useRef();

  const openModalHandler = () => {
    // isOpen의 상태를 변경하는 메소드를 구현
    // !false -> !true -> !false
    setIsOpen(!isOpen);
  };

  const handleName = (e) => {
    setTitle(e.target.value);
  };

  const handlePw = (e) => {
    setTag(e.target.value);
  };

  const onClickSubmit = () => {
    alert(title);
    alert(tag);
  };

  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  return (
    <>
      {isOpen ? (
        <Layout>
          <Container>
            <HeaderBox>
              <ProfileBox>
                <Profile src={profile} />
                <Name>우어엉</Name>
              </ProfileBox>
              <ExitBtn onClick={openModalHandler}>
                <span>X</span>
              </ExitBtn>
            </HeaderBox>
            <TitleBox
              placeholder="제목을 입력하세요"
              onChange={handleName}
              value={title}
            />
            <TagBox
              placeholder="태그를 입력하세요"
              onChange={handlePw}
              value={tag}
            />
            <Preview src={imgFile ? imgFile : imagenull} />
            <ImgBox
              ref={imgRef}
              onChange={saveImgFile}
              type="file"
              accept="image/*"
            />
            <SubmitBox>
              <Calender type="date" />
              <Submit onClick={onClickSubmit}>
                <>만들기</>
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
  height: 95%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
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
  font-size: 1.1rem;
  margin-bottom: 0.4rem;
`;

const ExitBtn = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  color: white;
  display: flex;
  border-radius: 0.3rem;
  justify-content: center;
  align-items: center;
  background-color: red;
`;

const InputBox = styled.input`
  height: 3rem;
  width: 100%;
  border-radius: 1rem;
  padding: 0.2rem 1.3rem;
  border: none;
  box-sizing: border-box;

  font-size: 1rem;

  background-color: #f1f1f1;
`;

const TitleBox = styled(InputBox)``;

const TagBox = styled(InputBox)``;

const Preview = styled.img`
  height: 24rem;
  width: 24rem;
  object-fit: cover;
`;

const Submit = styled.div`
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  border-radius: 1rem;
  padding: 0.2rem 1.3rem;
  border: none;

  font-size: 1rem;

  color: white;
  background-color: #ff8c4b;
`;

const SubmitBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const ImgBox = styled.input`
  flex: 1;
`;

const Calender = styled.input`
  flex: 1;
  border-radius: 1rem;
  border: 0.1rem solid;
  padding: 0.2rem 1rem;
  border-color: #ff8c4b;
`;

export default Login;
