import React from "react";
import styled from "styled-components";
import Layout from "../../shared/Layout";
import { Navigate, useNavigate } from "react-router-dom";
import Mycard from "./Mycard";
import { useDispatch } from "react-redux";
import { AcyncDeleteMember } from "../members/membersSlice";

function Mypage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const useConfirm = (message = "", onConfirm, onCancel) => {
  //   if (onConfirm && typeof onConfirm !== "function") {
  //     return;
  //   }

  //   if (onCancel && typeof onCancel !== "function") {
  //     return;
  //   }

  //   const confirmAction = () => {
  //     if (confirm(message)) {
  //       onConfirm();
  //     } else {
  //       onCancel();
  //     }
  //   };
  //   return confirmAction;
  // };
  // const deleteAccount = useConfirm("탈퇴하시겠습니까",confirmDelete)
  // const confirmDelete = () => {}
  const deleteAccount = () => {
    dispatch(AcyncDeleteMember());
  };

  return (
    <>
      <Layout>
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
