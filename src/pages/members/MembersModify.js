import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "../../shared/Layout";
import { useDispatch } from "react-redux";
import { AcyncUpdateMember, AcyncGetMember } from "./membersSlice";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../../shared/Button";
import { useState } from "react";
import { useSelector } from "react-redux";
import * as MB from "./membersCSS";
import useInput from "../../shared/useInput";

function MembersModify() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(AcyncGetMember());
  }, [dispatch]);
  const globalmembers = useSelector((state) => state.members.members.login);
  console.log(globalmembers);
  const [inputs, changeHandle] = useInput(globalmembers);

  const [account, setAccount] = useState({
    id: "",
    password: "",
    confirm: "",
  });

  const onModifyHandler = () => {
    dispatch(AcyncUpdateMember(account));

    // navigate("/");
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
              name="id"
              // defaultValue={}
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
          <Button onClick={() => onModifyHandler} size="lg">
            회원정보수정하기
          </Button>
        </MB.Stform>
      </MB.StContainer>
    </Layout>
  );
}

export default MembersModify;
