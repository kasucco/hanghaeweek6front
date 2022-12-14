import React, { useEffect } from "react";
import Header from "../../shared/Header";
import { useDispatch } from "react-redux";
import { AcyncGetMember, AcyncLoginMember } from "./membersSlice";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../../shared/Button";
import { useState } from "react";
import * as MB from "./membersCSS";
import styled from "styled-components";

function MembersLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [account, setAccount] = useState({
    id: "",
    password: "",
  });

  const onLoginHandler = () => {
    dispatch(AcyncLoginMember(account));
    dispatch(AcyncGetMember());
    navigate(`/`);
  };
  console.log(account.id);
  const {
    register,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  return (
    <>
      <Header></Header>
      <MB.StContainer>
        <MB.StTitle>로그인</MB.StTitle>
        <MB.Stform
          onSubmit={(event) => {
            // event.preventDefault();
            // onAddHandler(account);
          }}
        >
          <MB.Stwrap>
            <MB.Stlabel>아이디</MB.Stlabel>
            <MB.Stinputs
              {...register("id", {
                required: "아이디를 입력해주세요.",
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
            <MB.Warn>{errors?.author?.message}</MB.Warn>
          </MB.Stwrap>

          <MB.Stwrap>
            <MB.Stlabel>비밀번호</MB.Stlabel>
            <MB.Stinputs
              {...register("password", {
                required: "내용을 입력해주세요.",
                minLength: {
                  value: 3,
                  message: "3글자 이상 입력해주세요.",
                },
                pattern: {
                  value: /^[A-za-z0-9]{3,10}$/,
                  message: "가능한 문자: 영문 대소문자, 숫자",
                },
              })}
              minLength="3"
              type="text"
              onChange={(ev) => {
                const { value } = ev.target;
                setAccount({
                  ...account,
                  password: value,
                });
              }}
            />
            <MB.Warn>{errors?.body?.message}</MB.Warn>
          </MB.Stwrap>
          <ButtonBox>
            <Button onClick={() => navigate("/members/signup")} size="lg">
              가입하기
            </Button>
            <Button onClick={onLoginHandler} size="lg">
              로그인하기
            </Button>
          </ButtonBox>
        </MB.Stform>
      </MB.StContainer>
    </>
  );
}

export default MembersLogin;

const ButtonBox = styled.div`
  margin-top: 20px;
  Button {
    margin-bottom: 20px;
  }
`;
