import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../../shared/Layout";
import { useDispatch, useSelector } from "react-redux";
import { __getPosts } from "./postSlice";
import Code from "../../commponents/Code";
// import { acyncGetPostsCopy } from "./postSlice";

function MainCopy() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  console.log(posts);
  // const onclickHandler = (navNumber) => {
  //   dispatch(acyncGetPostsCopy(navNumber));
  // };
  console.log(posts);
  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  // if (isLoading) {
  //   return <div>로딩 중...</div>;
  // }
  // if (error) {
  //   return <div>{error.message}</div>;
  // }

  return (
    <>
      <Layout>
        <Nav>
          <Gnb>
            {/* <div onClick={() => onclickHandler(Number(1))}>코드</div> */}
            <div>에러</div>
            <div>잡담</div>
            <div>질문</div>
          </Gnb>
          <div>
            <input placeholder="키워드 검색"></input>
            <button>검색</button>
          </div>
        </Nav>
      </Layout>
      <List>
        <div>
          <h2>코드👾</h2>
          {posts.map((post) => {
            return (
              <div key={posts.categoryId}>
                <div>{post.categoryId}</div>
                <div>{post.title}</div>
                <div>{post.content}</div>
              </div>
            );
          })}
        </div>
      </List>
    </>
  );
}

export default MainCopy;

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
`;
