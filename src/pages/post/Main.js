import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../../shared/Layout";
import { useDispatch, useSelector } from "react-redux";
import { __getPosts } from "../post/postSlice";
import Code from "../../commponents/Code";
import { Navigate, useNavigate } from "react-router-dom";

function Main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [content, setContent] = useState("코드");
  const { isLoading, error } = useSelector((state) => state.posts);
  const { findAllPost } = useSelector((state) => state.posts.findAllPost);

  const handleClickButton = (e) => {
    const { name } = e.target;
    setContent(name);
  };

  useEffect(() => {
    setContent("code");
  }, []);
  console.log("content", content);

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

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
            <button onClick={() => navigate("/")} name="코드">
              코드
            </button>
            <button onClick={handleClickButton} name="에러">
              에러
            </button>
            <button onClick={handleClickButton} name="잡담">
              잡담
            </button>
            <button onClick={handleClickButton} name="질문">
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
            {content == "코드" ? (
              <h2>코드👾</h2>
            ) : content == "에러" ? (
              <h2>에러👾</h2>
            ) : content == "잡담" ? (
              <h2>잡담👾</h2>
            ) : (
              <h2>질문👾</h2>
            )}{" "}
          </div>
          {findAllPost &&
            findAllPost.map((post) => {
              console.log(post, content);

              if (content == post.name) {
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
