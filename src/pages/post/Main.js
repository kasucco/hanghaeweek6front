import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../../shared/Layout";
import { useDispatch, useSelector } from "react-redux";
import { __getPosts } from "../post/postSlice";
import Code from "../../commponents/Code";
import { useNavigate } from "react-router-dom";

function Main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [content, setContent] = useState("1");
  console.log(content);
  useEffect(() => {
    dispatch(__getPosts());
  }, [content]);
  const { isLoading, error } = useSelector((state) => state.posts);
  const { findPost } = useSelector((state) => state.posts);
  const { findAllPost } = useSelector((state) => state.posts.findAllPost);
  console.log(findPost);

  const handleClickButton = (e) => {
    const { name } = e.target;
    setContent(name);
  };

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
            <button onClick={handleClickButton} name="1">
              코드
            </button>
            <button onClick={handleClickButton} name="2">
              에러
            </button>
            <button onClick={handleClickButton} name="3">
              잡담
            </button>
            <button onClick={handleClickButton} name="4">
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
            {content == "1" ? (
              <h2>코드👾</h2>
            ) : content == "2" ? (
              <h2>에러👾</h2>
            ) : content == "3" ? (
              <h2>잡담👾</h2>
            ) : (
              <h2>질문👾</h2>
            )}{" "}
          </div>
          {findAllPost &&
            findAllPost.map((post) => {
              if (post.name == content) {
                return <Code key={post.postId} postsData={post} />;
              } else return null;
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
