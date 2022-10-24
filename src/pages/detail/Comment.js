import React from "react";
import styled from "styled-components";
import { useState } from "react";

function Comment() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Wrap open={open}>
        <div
          className="innerDiv"
          onClick={() => {
            setOpen((open) => !open);
          }}
        >
          {open ? "댓글 닫기" : " 댓글 보기"}
        </div>
        <div>
          <Btnbox>
            <form
            // onSubmit={(e) => {
            //   e.preventDefault();
            //   commentOnsumitHandler(comment);
            // }}
            >
              <input type="text" placeholder="이름" />
              <input type="text" placeholder="내용" />
              <button>댓글 추가</button>
            </form>
          </Btnbox>
          {/* {comments.map((comment) => (
            <div key={comment.id}>
              {+id === +comment.movieId ? <Comments comment={comment} /> : null}
            </div>
          ))} */}
        </div>
      </Wrap>
    </>
  );
}

export default Comment;

const Wrap = styled.div`
  width: 100%;
  background-color: white;
  height: ${({ open }) => (open ? "300px" : "30px")};
  position: absolute;
  bottom: 0;
  left: 0;
  transition: height 400ms ease-in-out;

  .innerDiv {
    position: fixed;
    width: 100%;
    background-color: #deb887;
    border: 2px solid black;
    height: 30px;
    line-height: 30px;
    color: black;
    text-align: center;
  }
  overflow: scroll;
`;

const Btnbox = styled.div`
  form {
    display: flex;
    margin-top: 60px;
    justify-content: space-evenly;
  }
  input {
    border: 2px solid black;
    border-radius: 5px;
    height: 20px;
  }
  input:nth-child(2) {
    width: 400px;
  }
  input:focus {
    outline: none;
  }
  button {
    width: 200px;
    height: 26px;

    border-radius: 5px;
  }
  button:hover {
    background-color: darkgray;
    cursor: pointer;
  }
`;
