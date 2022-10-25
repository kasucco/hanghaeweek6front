import styled from "styled-components";
import Layout from "../../shared/Layout";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getPosts } from "../post/postSlice";
import { useParams } from "react-router-dom";
import Comment from "../detail/Comment";

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
        <Content>상세페이지입니다.</Content>
        <Comment />
      </Layout>
    </>
  );
}

export default Detail;

const Content = styled.div`
  width: 90%;
  height: 600px;
  margin: 0 auto;
  background-color: white;
  border: 1px solid black;
`;
