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
  useEffect(() => {
    dispatch(__getPosts());
  }, [content]);

  console.log(content);
  const { isLoading, error } = useSelector((state) => state.posts);
  const { findPost } = useSelector((state) => state.posts);
  const { findAllPost } = useSelector((state) => state.posts.findAllPost);

  const handleClickButton = (e) => {
    setContent(e);
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
            <div onClick={() => handleClickButton(1)} name="1">
              코드
            </div>
            <div onClick={() => handleClickButton(2)} name="2">
              에러
            </div>
            <div onClick={() => handleClickButton(3)} name="3">
              잡담
            </div>
            <div onClick={() => handleClickButton(4)} name="4">
              질문
            </div>
          </Gnb>
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
  line-height: 50px;
  display: flex;
  justify-content: space-around;
  font-size: 20px;

  div {
    width: 100px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
    transition: all 0.3s;
  }
  div:hover {
    border-bottom: 7px solid skyblue;
  }

  div:active {
    opacity: 0.6;
  }
`;

const List = styled.div`
  width: 1200px;
  margin: 30px auto;
  border: 2px solid black;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: wheat;
  h2 {
    text-align: center;
  }
`;
