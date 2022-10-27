import React from "react";
import styled from "styled-components";

function Button({ children, onClick, disabled }) {
  // eslint-disable-next-line react/jsx-filename-extension
  return (
    <BtnCover>
      <BtnStyle type="button" onClick={onClick} disabled={disabled}>
        {children}
      </BtnStyle>
    </BtnCover>
  );
}

export default Button;

const BtnCover = styled.div`
  text-align: right;
  flex-shrink: 100;
`;

const BtnStyle = styled.button`
  margin-left: 10px;
  width: 110px;
  height: 30px;
  background: ghostwhite;
  box-sizing: border-box;
  border: 1px solid #000;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: skyblue;
    color: #fff;
    border: none;
  }
`;
