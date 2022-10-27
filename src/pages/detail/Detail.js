import styled from "styled-components";
import Layout from "../../shared/Layout";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { acyncDeletePosts, __getPosts } from "../post/postSlice";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Comment from "../detail/Comment";
import { __getOnePost } from "../detail/detailSlice";

function Detail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.posts);
  const params = useParams();

  //버튼을 누르면 해당 함수를 실행하며 버튼을 눌렸을때 map()함수로 돌린 data.name을 name에 할당하여
  // 이벤트 메소드를 이용하여 name값을 담는다. 그리고 나서 setContent에 name을 담고 content에 담는다.

  useEffect(() => {
    dispatch(__getOnePost(params.id));
  }, [dispatch]);

  const detail = useSelector((state) => state.detail.posts);
  console.log(detail);
  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  const onDeleteHandler = () => {
    dispatch(acyncDeletePosts(params.id));
  };
  return (
    <>
      <Layout></Layout>
      <Wrap>
        <InnerWrap>
          <Content>
            <button onClick={() => navigate(`/modify/${params.id}`)}>
              수정하기
            </button>
            <button onClick={() => onDeleteHandler()}>삭제하기</button>
            <div>제목:{detail.title}</div>
            <div>닉네임;{detail.nickname}</div>
            <div>내용:{detail.content}</div>
          </Content>
          <Comment />
        </InnerWrap>
      </Wrap>
    </>
  );
}

export default Detail;

const Wrap = styled.div`
  width: 1200px;
  height: 550px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const InnerWrap = styled.div`
  width: 100%;
  height: 400px;
  background-color: white;
  border: 2px solid black;
  border-radius: 15px;
`;

const Content = styled.div`
  padding: 20px;
`;
