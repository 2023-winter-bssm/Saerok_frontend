import { useState } from "react";
import styled from "styled-components";

export const TagsInput = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;
  width: 480px;
  padding: 0 8px;
  border: 1px solid rgb(255, 145, 61);
  border-radius: 1rem;

  > ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 8px 0 0 0;

    > .tag {
      width: auto;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgb(255, 146, 63);
      padding: 0 8px;
      font-size: 14px;
      list-style: none;
      border-radius: 1rem;
      margin: 0 8px 8px 0;
      background: rgb(242, 243, 244);
      border-radius: 15px;

      > .tag-close-icon {
        display: block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        font-size: 14px;
        margin-left: 8px;
        color: rgb(255, 157, 83);
        border-radius: 1rem;
        background: #fff;
        cursor: pointer;
      }
    }
  }

  > input {
    flex: 1;
    border: none;
    height: 46px;
    font-size: 14px;
    padding: 4px 0 0 0;
    :focus {
      outline: transparent;
    }
    &:focus {
      border: none;
      outline: none;
    }
  }

  &:focus-within {
    border: 1px solid rgb(255, 146, 56);
  }
  &:focus {
    border: none;
    outline: none;
  }
`;

export const Tag = () => {
  const initialTags = [];

  const [tags, setTags] = useState(initialTags);
  const removeTags = (indexToRemove) => {
    // 태그를 삭제하는 메소드
    const filter = tags.filter((el, index) => index !== indexToRemove);
    setTags(filter);
  };

  const addTags = (event) => {
    // tags 배열에 새로운 태그를 추가하는 메소드
    const inputVal = event.target.value;
    // 이미 입력되어 있는 태그인지 검사하여 이미 있는 태그라면 추가하지 말기
    // 아무것도 입력하지 않은 채 Enter 키 입력시 메소드 실행하지 말기
    // 태그가 추가되면 input 창 비우기
    if (
      tags.length <= 3 &&
      event.key === "Enter" &&
      inputVal !== "" &&
      !tags.includes(inputVal)
    ) {
      setTags([...tags, inputVal]);
      event.target.value = "";
    }
  };

  return (
    <>
      <TagsInput>
        <ul id="tags">
          {tags.map((tag, index) => (
            <li key={index} className="tag">
              <span className="tag-title">{tag}</span>
              <span
                className="tag-close-icon"
                onClick={() => removeTags(index)}
              ></span>
            </li>
          ))}
        </ul>
        <input
          className="tag-input"
          type="text"
          //키보드의 Enter 키에 의해 addTags 메소드가 실행
          onKeyUp={(e) => {
            addTags(e);
          }}
          placeholder="Press enter"
        />
      </TagsInput>
    </>
  );
};
