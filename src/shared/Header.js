import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import jwt_decode from "jwt-decode";
import Button from "./Button";

function Header() {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  useEffect(() => {
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
  }, []);

  return (
    <Head>
      <InnerHead
        onClick={() => {
          navigate("/");
        }}
      >
        <div>
          <HeadH1>나랏말사미 스택 오버 플로우</HeadH1>
          <HeadP>코드를 기록하고 마음껏 질문하세요</HeadP>
        </div>
        <Login>
          {/* {
            .isDone ? <button>로그아웃</button> : <button>로그인</button>
          } */}
          <Button
            onClick={(event) => {
              event.stopPropagation();
              navigate(`/members/login/${token?.id}`);
            }}
          >
            마이페이지
          </Button>
          <Button
            onClick={(event) => {
              event.stopPropagation();
              navigate("/members/login");
            }}
          >
            로그인/회원가입
          </Button>

          <Button
            onClick={(event) => {
              event.stopPropagation();
              localStorage.removeItem("token");
              navigate("/members/login");
            }}
          >
            로그아웃
          </Button>
          <Button
            onClick={(event) => {
              event.stopPropagation();
              navigate("/form");
            }}
          >
            작성하기
          </Button>
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
  background-color: wheat;
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
  /* button {
    margin-right: 10px;
    border-radius: 15px;
    background-color: white;
    border: 3px solid skyblue;
    height: 30px;
    cursor: pointer;
  }

  button:hover {
    background-color: skyblue;
    color: white;
  } */
`;
