import styled from "styled-components";
import Layout from "../../shared/Layout";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getPosts } from "../post/postSlice";
import Code from "../../commponents/Code";
import { useParams } from "react-router-dom";

function Detail() {
  const dispatch = useDispatch();
  const [content, setContent] = useState("코드");
  const { isLoading, error } = useSelector((state) => state.posts);
  const { findAllPost } = useSelector((state) => state.posts.findAllPost);
  const params = useParams();
  console.log(params.id);
  const handleClickButton = (e) => {
    const { name } = e.target;
    setContent(name);
  };
  //버튼을 누르면 해당 함수를 실행하며 버튼을 눌렸을때 map()함수로 돌린 data.name을 name에 할당하여
  // 이벤트 메소드를 이용하여 name값을 담는다. 그리고 나서 setContent에 name을 담고 content에 담는다.

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
            <button onClick={handleClickButton} name="코드">
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
              if (params.id == post.postId) {
                return (
                  <Code
                    key={post.postId}
                    postsData={post}
                    detailPostData={post}
                  />
                );
              } else return null;
            })}
        </div>
      </List>
    </>
  );
}

export default Detail;

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
