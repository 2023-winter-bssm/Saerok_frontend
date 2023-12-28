import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import decreaseIcon from "../assets/decreaseIcon.svg";
import increaseIcon from "../assets/increaseIcon.svg";
import Post from "../components/Post";
import FeedDetail from "../components/FeedDetail";

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;
const currentDay = new Date().getDate();

const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0,
);

const Feed = () => {
  const [scroll, setScroll] = useState(0);
  const [visible, setVisible] = React.useState(false);
  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);
  const [day, setDay] = useState(currentDay);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollHeight = window.scrollY;
      setScroll(
        Math.round((currentScrollHeight / maxHeight) * 100) / 100 + 0.01,
      );
    };

    const scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight,
    );

    const maxHeight = scrollHeight - window.innerHeight;

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const increaseYear = () => {
    setYear((prev) => prev + 1);
  };

  const decreaseYear = () => {
    setYear((prev) => prev - 1);
  };

  const increaseMonth = () => {
    setMonth((prev) => prev + 1);
    if (month >= 12) {
      increaseYear();
      setMonth(1);
    }
  };

  const decreaseMonth = () => {
    setMonth((prev) => prev - 1);
    if (month === 1) {
      decreaseYear();
      setMonth(12);
    }
  };

  const increaseDay = () => {
    setDay((prev) => prev + 1);
    const firstDay = new Date(year, month, 1).getDate();
    const lastDay = new Date(year, month + 1, 0).getDate();
    if (day === lastDay) {
      increaseMonth();
      setDay(firstDay);
    }
  };

  const decreaseDay = () => {
    setDay((prev) => prev - 1);
    const firstDay = new Date(year, month, 1).getDate();
    const lastDay = new Date(year, month + 1, 0).getDate();
    if (day === firstDay) {
      decreaseMonth();
      setDay(lastDay);
    }
  };

  return (
    <Container>
      <PostBackground
        $visible={visible}
        onClick={() => setVisible((prev) => !prev)}
      />
      <FeedDetail visible={visible} />
      <Header />
      <ScrollBarBackground>
        <ScrollBar $scrollHeight={scroll} $vw={vw} />
      </ScrollBarBackground>
      <Posts>
        <Post visible={visible} setVisible={setVisible} />
        <Post visible={visible} setVisible={setVisible} />
        <Post visible={visible} setVisible={setVisible} />
      </Posts>
      <Left>
        <Dates>
          <IncreaseButton onClick={increaseYear}>
            <img src={increaseIcon} alt="increase" />
          </IncreaseButton>
          <span style={{ marginBottom: "28px" }}>{year}</span>
          <DecreaseButton onClick={decreaseYear}>
            <img src={decreaseIcon} alt="decrease" />
          </DecreaseButton>
        </Dates>
      </Left>
      <Right>
        <Dates>
          <IncreaseButton onClick={increaseDay}>
            <img src={increaseIcon} alt="increase" />
          </IncreaseButton>
          <span style={{ marginBottom: "28px" }}>
            {String(month).padStart(2, "0")}
            {String(day).padStart(2, "0")}
          </span>
          <DecreaseButton onClick={decreaseDay}>
            <img src={decreaseIcon} alt="decrease" />
          </DecreaseButton>
        </Dates>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  background: #ffffff;
`;

const ScrollBarBackground = styled.div`
  background: #dedede;
  width: 100%;
  height: 8px;
  position: fixed;
  top: 72px;
  z-index: 5;
`;

const ScrollBar = styled.div`
  height: 8px;
  position: relative;
  background: #ff8c4b;
  width: ${({ $scrollHeight, $vw }) => $scrollHeight * $vw}px;
  border-radius: 4px;
`;

const DecreaseButton = styled.div`
  padding: 12px;
  border-radius: 40px;
  background: #f0f0f0;
  display: flex;
  cursor: pointer;
  width: fit-content;
`;

const IncreaseButton = styled(DecreaseButton)``;

const Dates = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding-top: 100px;
  z-index: 3;
  width: fit-content;
  margin: auto;
`;

const Left = styled.div`
  position: fixed;
  top: calc(30vh);
  font-size: 200px;
  color: #f1f1f1;
  font-weight: 900;
  left: 0;
  padding-inline: 5%;
  user-select: none;
`;

const Right = styled.div`
  position: fixed;
  top: calc(30vh);
  font-size: 200px;
  color: #f1f1f1;
  font-weight: 900;
  padding-inline: 5%;
  user-select: none;
  right: 0;
`;

const PostBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 30;

  display: ${({ $visible }) => (String($visible) === "false" ? "none" : "")};
`;

export default Feed;
