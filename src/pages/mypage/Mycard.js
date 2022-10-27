import react from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Layout from "../../shared/Layout";
import { LayoutTop } from "../../shared/Layout";
import Code from "../../commponents/Code";
import jwt_decode from "jwt-decode";
import { __getPosts } from "../post/postSlice";
import { createContext } from "react";
import { useSelector } from "react-redux";

const Mycard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [token, setToken] = useState("");
  useEffect(() => {
    dispatch(__getPosts);
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      let decodedData = jwt_decode(storedToken);
      setToken(decodedData);
      let expirationDate = decodedData.exp;
      var current_time = Date.now() / 1000;
      if (expirationDate < current_time) {
        localStorage.removeItem("token");
      }
    }
  }, [dispatch]);
  const { findAllPost } = useSelector((state) => state.posts.findAllPost);
  return (
    <LayoutTop>
      <BoxTitle>내가 쓴 글</BoxTitle>
      <TextAll>
        <GridUl>
          {findAllPost &&
            findAllPost.map((post) => {
              if (token.userId == post.userId) {
                return <Code key={post.postId} postsData={post} />;
              } else return null;
            })}
        </GridUl>
      </TextAll>
      <BoxTitle>내가 저장한 글</BoxTitle>
      <TextAll>
        <GridUl>
          <MyBox>
            <TextSize>테스트</TextSize>
            <TextSizeP>테스트내용입니다 길면 짤려야해요 </TextSizeP>
          </MyBox>
          <MyBox>
            <TextSize>테스트</TextSize>
          </MyBox>
        </GridUl>
      </TextAll>
    </LayoutTop>
  );
};

export default Mycard;

const MyBox = styled.div`
  border: 2px solid gray;
  border-radius: 15px;
  padding: 10px;
  /* background-color: aquamarine; */
`;

const TextSize = styled.h1`
  font-size: 20px;
  width: 180px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* background-color: beige; */
`;
const TextSizeP = styled.p`
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* background-color: brown; */
`;

const TextAll = styled.div`
  display: flex;
  /* background-color: blue; */
`;

const GridUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-left: 0;
  grid-gap: 20px;
  width: 100%;
  /* background-color: gold; */
`;

const BoxTitle = styled.h1`
  padding: 20px;
`;
