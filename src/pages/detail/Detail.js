import React from "react";
import styled from "styled-components";
import Layout from "../../shared/Layout";
import { useNavigate } from "react-router-dom";
import Comment from "../detail/Comment";

function Detail() {
  const navigate = useNavigate();
  // const { isLoading, error, lists } = useSelector((state) => state.lists);
  return (
    <>
      <Layout>
        <Nav>
          <Gnb>
            <div
              onClick={() => {
                navigate("/code");
              }}
            >
              코드
            </div>
            <div
              onClick={() => {
                navigate("/error");
              }}
            >
              에러
            </div>{" "}
            <div
              onClick={() => {
                navigate("/chat");
              }}
            >
              잡담
            </div>{" "}
            <div
              onClick={() => {
                navigate("/question");
              }}
            >
              질문
            </div>
          </Gnb>
          <div>
            <input placeholder="키워드 검색"></input>
            <button>검색</button>
          </div>
        </Nav>
      </Layout>
      <List>
        <div>상세 페이지입니다</div>
        <Comment />
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
  height: 550px;
  margin: 30px auto;
  border: 3px solid black;
`;
