import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Layout from "../../shared/Layout";
import List from "../../commponents/List"
import { useSelector } from "react-redux";


function Main() {
  const navigate = useNavigate()
  // const { isLoading, error, lists } = useSelector((state) => state.lists);
  return <>
    <Layout>
      <Nav>
        <Gnb>
          <div
            onClick={() => {
              navigate("/code");
            }}>코드</div>
          <div
            onClick={() => {
              navigate("/error");
            }}>에러</div>        <div
              onClick={() => {
                navigate("/chat");
              }}>잡담</div>        <div
                onClick={() => {
                  navigate("/question");
                }}>질문</div>
        </Gnb>
        <div>
          <input placeholder="키워드 검색"></input>
          <button>검색</button>
        </div>
      </Nav>
    </Layout>
    <List />
  </>
}



export default Main;

const Nav = styled.div`
display: flex;
justify-content: space-between;
> div > button{margin-left:15px}
`

const Gnb = styled.div`
width: 400px;
display: flex;
justify-content: space-around;
font-size: 20px;

div{
  width: 100px;
  text-align: center;
  cursor: pointer;
}
div:hover{
  background-color: darkgray;
}
`


