import React from "react";
import styled from "styled-components";
import Layout from "../../shared/Layout";
import { useDispatch } from "react-redux";
import { __getReview } from "./membersSlice";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../element/button";
import { useState } from "react";

function Members() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [account, setAccount] = useState({
    id: "",
    password: "",
    passwordConfirm: "",
  });

  const onAddHandler = (movie) => {
    dispatch(__getReview(movie));
    navigate("/moviepage");
  };

  const {
    register,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  return (
    <Layout>
      <StContainer>
        <StTitle>결심을 작성해주세요!🔥</StTitle>
        <Stform
          onSubmit={(event) => {
            event.preventDefault();
            onAddHandler(account);
          }}
        >
          <Stwrap>
            <Stlabel>아이디</Stlabel>
            <Stinputs
              {...register("author", {
                required: "이름을 입력해주세요.",
                minLength: {
                  value: 3,
                  message: "3글자 이상 입력해주세요.",
                },
                pattern: {
                  value: /^[A-za-z0-9가-힣]{3,10}$/,
                  message: "가능한 문자: 영문 대소문자, 글자 단위 한글, 숫자",
                },
              })}
              minLength="3"
              type="text"
              onChange={(ev) => {
                const { value } = ev.target;
                setAccount({
                  ...account,
                  id: value,
                });
              }}
            />
            <Warn>{errors?.author?.message}</Warn>
          </Stwrap>

          <Stwrap>
            <Stlabel>닉네임</Stlabel>
            <Stinputs
              {...register("title", {
                required: "제목을 입력해주세요.",
                minLength: {
                  value: 3,
                  message: "3글자 이상 입력해주세요.",
                },
                pattern: {
                  value: /^[A-za-z0-9가-힣]{3,10}$/,
                  message: "가능한 문자: 영문 대소문자, 글자 단위 한글, 숫자",
                },
              })}
              minLength="3"
              type="text"
              onChange={(ev) => {
                const { value } = ev.target;
                setAccount({
                  ...account,
                  title: value,
                });
              }}
            />
            <Warn>{errors?.title?.message}</Warn>
          </Stwrap>

          <Stwrap>
            <Stlabel>비밀번호</Stlabel>
            <Stinputs
              {...register("body", {
                required: "내용을 입력해주세요.",
                minLength: {
                  value: 3,
                  message: "3글자 이상 입력해주세요.",
                },
                pattern: {
                  value: /^[A-za-z0-9가-힣]{3,10}$/,
                  message: "가능한 문자: 영문 대소문자, 글자 단위 한글, 숫자",
                },
              })}
              minLength="3"
              type="text"
              onChange={(ev) => {
                const { value } = ev.target;
                setAccount({
                  ...account,
                  pa: value,
                });
              }}
            />
            <Warn>{errors?.body?.message}</Warn>
          </Stwrap>
          <Stwrap>
            <Stlabel>비밀번호 확인</Stlabel>
            <Stinputs
              {...register("body", {
                required: "내용을 입력해주세요.",
                minLength: {
                  value: 3,
                  message: "3글자 이상 입력해주세요.",
                },
                pattern: {
                  value: /^[A-za-z0-9가-힣]{3,10}$/,
                  message: "가능한 문자: 영문 대소문자, 글자 단위 한글, 숫자",
                },
              })}
              minLength="3"
              type="text"
              onChange={(ev) => {
                const { value } = ev.target;
                setAccount({
                  ...account,
                  passwordConfirm: value,
                });
              }}
            />
            <Warn>{errors?.body?.message}</Warn>
          </Stwrap>
          <Button size="lg">가입하기</Button>
        </Stform>
      </StContainer>
    </Layout>
  );
}

export default Members;

const StContainer = styled.div`
  @font-face {
    font-family: "ghanachoco";
    src: url("https:cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/ghanachoco.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Warn = styled.div`
  color: red;
  padding-left: 17px;
  font-size: 0.8rem;
  font-weight: 00;
  /* div + & {
margin: 0.5rem 0 0.8rem;
} */
  font-family: "ghanachoco";
  margin-top: 5px;
  margin-left: -180px;
`;
// const Stbutton = styled.button`
// font-family: "ghanachoco";
// font-size: 17px;
// border: none;
// background-color: #82b0fb;
// height: 60px;
// cursor: pointer;
// width: 150px;
// border-radius: 12px;
// color: white;
// margin-top: 50px;
// &:hover {
// background-color: #e8bda6;
// color: White;
// }
//`;
const Stform = styled.form`
  border-radius: 20px;
  border: 5px solid cadetblue;
  background-color: #def1ef;
  min-width: 400px;
  min-height: 600px;
  padding: 40px 15px 20px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  /* position: absolute;
transform: translate(-50%, -50%); */
`;

const Stinputs = styled.input`
  font-family: "ghanachoco";
  padding-left: 10px;
  border: 1px solid #eee;
  height: 40px;
  width: 300px;
  border-radius: 12;
`;

const StTitle = styled.div`
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Stlabel = styled.div`
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Stwrap = styled.div`
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
