import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../../shared/Layout";
import { useDispatch, useSelector } from "react-redux";
import { __getPosts } from "../post/postSlice";
import Code from "../../commponents/Code";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const [content, setContent] = useState();

  const handleClickButton = (e) => {
    const { name } = e.target;
    setContent(name);
  };

  useEffect(() => {
    setContent("code");
  }, []);
  console.log("content", content);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  const { isLoading, error, posts } = useSelector((state) => state.posts);
  console.log("posts", posts);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <Layout>
        <Nav>
          <Gnb>
            <button onClick={handleClickButton} name="code">
              코드
            </button>
            <button onClick={handleClickButton} name="error">
              에러
            </button>
            <button onClick={handleClickButton} name="chat">
              잡담
            </button>
            <button onClick={handleClickButton} name="question">
              질문
            </button>
          </Gnb>
          <div>
            <input placeholder="키워드 검색"></input>
            <button>검색</button>
          </div>
        </Nav>
      </Layout>

      <List>
        <div>
          <div>
            {" "}
            {content == "code" ? (
              <h2>코드👾</h2>
            ) : content == "error" ? (
              <h2>에러👾</h2>
            ) : content == "chat" ? (
              <h2>잡담👾</h2>
            ) : (
              <h2>질문👾</h2>
            )}{" "}
          </div>
          {posts.map((post) => {
            if (content === post.name) {
              return <Code key={post.id} postsData={post} />;
            }
          })}
        </div>
      </List>
    </>
  );
}

export default Main;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  > div > button {
    margin-left: 15px;
  }
`;

const Gnb = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-around;
  font-size: 20px;

  div {
    width: 100px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
  }
  div:hover {
    background-color: darkgray;
  }
`;

const List = styled.div`
  width: 1200px;
  margin: 30px auto;
  border: 2px solid black;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #deb887;
  h2 {
    text-align: center;
  }
`;
