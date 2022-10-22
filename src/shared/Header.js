import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Header() {
  const navigate = useNavigate();
  return (
    <Head>
      <InnerHead
        onClick={() => {
          navigate("/");
        }}
      >
        <div>
          <HeadH1>가제: 한글오버플로우</HeadH1>
          <HeadP>코드를 기록하고 마음껏 질문하세요</HeadP>
        </div>
        <Login>
          {/* {
            .isDone ? <button>로그아웃</button> : <button>로그인</button>
          } */}
          <button
            onClick={(event) => {
              event.stopPropagation();
              navigate("/mypage");
            }}
          >
            마이페이지
          </button>
          <button
            onClick={(event) => {
              event.stopPropagation();
              navigate("/members/login");
            }}
          >
            로그인/회원가입
          </button>
          <button
            onClick={(event) => {
              event.stopPropagation();
              navigate("/form");
            }}
          >
            작성하기
          </button>
        </Login>
      </InnerHead>
    </Head>
  );
}

export default Header;

const Head = styled.div`
  padding: 20px;
  box-sizing: border-box;
  height: 100px;
  background: transparent;
  border: 2px solid black;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  background-color: #deb887;
  border-radius: 10px;
`;

const InnerHead = styled.div`
  font-family: "ONE-Mobile-Title";
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const HeadH1 = styled.h1`
  font-size: 25px;
  font-weight: 700;
`;

const HeadP = styled.p`
  font-size: 16px;
  font-weight: 1000;
`;

const Login = styled.div`
  display: flex;
  align-items: center;
`;
