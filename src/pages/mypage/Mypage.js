import React from "react";
import styled from "styled-components";
import Layout from "../../shared/Layout";
import { Navigate, useNavigate } from "react-router-dom";

function Mypage() {
  const navigate = useNavigate();

  return (
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
      <Stbox>
        테스트<StList></StList>
      </Stbox>
      <Stbox>
        테스트<StList></StList>
      </Stbox>
    </Layout>
  );
}

export default Mypage;

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

const Stbox = styled.div`
  margin-top: 20px;
  width: 400px;
  border: 1px solid gray;
  display: flex;
  justify-content: space-around;
  font-size: 20px;
`;

const StList = styled.div`
  margin-top: 20px;
  width: 400px;
  border: 1px solid gray;
  display: flex;
  justify-content: space-around;
  font-size: 20px;
`;
