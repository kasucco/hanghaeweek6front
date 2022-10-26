import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "../../shared/Layout";
import { useNavigate } from "react-router-dom";
import Mycard from "./Mycard";
import { useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useState } from "react";

function Mypage() {
  const [token, setToken] = useState("");
  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deleteAccount = () => {
    if (window.confirm("확인을 누르면 회원 정보가 삭제됩니다.")) {
      axios
        .delete(`https://www.spartaseosu.shop/members/login`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          sessionStorage.removeItem("token");
          alert("그동안 이용해주셔서 감사합니다.");
          navigate("/");
        })
        .catch((err) => alert(err.response.data.message));
    } else {
      return;
    }
  };

  return (
    <>
      <Layout>
        <div>{`${token.nickname}님`}</div>
        <button onClick={() => navigate("/membersmodify")}>
          회원정보 수정하기
        </button>
        <button
          // onClick={() => deleteAccount()}
          onClick={() => {
            deleteAccount();
          }}
        >
          회원 삭제하기
        </button>
        <Mycard />
      </Layout>
    </>
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
