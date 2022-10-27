import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "../../shared/Layout";
import { useDispatch } from "react-redux";
import { AcyncUpdateMember, AcyncLoginMember } from "./membersSlice";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../../shared/Button";
import { useState } from "react";
import { useSelector } from "react-redux";
import * as MB from "./membersCSS";
import useInput from "../../shared/useInput";
import jwt_decode from "jwt-decode";

function MembersModify() {
  const storedToken = localStorage.getItem("token");
  const decodedData = jwt_decode(storedToken);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const nicknameValue = defa

  const [account, setAccount] = useState({
    nickname: "",
    password: "",
    confirm: "",
  });

  const loginData = {
    id: decodedData.id,
    password: account.password,
  };
  console.log(decodedData.id, decodedData.nickname, account.password);
  const onModifyHandler = () => {
    dispatch(AcyncUpdateMember(account));
    navigate(`/members/login/${decodedData.id}`);
    // dispatch(AcyncLoginMember(loginData));
  };

  const {
    register,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  return (
    <Layout>
      <MB.StContainer>
        <MB.StTitle>회원정보 수정하기</MB.StTitle>
        <MB.Stform
          onSubmit={(event) => {
            // event.preventDefault();
            // onModifyHandler(account);
          }}
        >
          <MB.Stwrap>
            <MB.Stlabel>닉네임</MB.Stlabel>
            <MB.Stinputs
              {...register("nickname", {
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
              // value={}
              defaultValue={decodedData.nickname}
              onChange={(ev) => {
                const { value } = ev.target;
                setAccount({
                  ...account,
                  nickname: value,
                });
              }}
            />
            <MB.Warn>{errors?.title?.message}</MB.Warn>
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
          <MB.Stwrap>
            <MB.Stlabel>비밀번호 확인</MB.Stlabel>
            <MB.Stinputs
              {...register("confirm", {
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
                  confirm: value,
                });
              }}
            />
            <MB.Warn>{errors?.body?.message}</MB.Warn>
          </MB.Stwrap>
          <Button onClick={() => onModifyHandler()} size="lg">
            회원정보수정하기
          </Button>
        </MB.Stform>
      </MB.StContainer>
    </Layout>
  );
}

export default MembersModify;
