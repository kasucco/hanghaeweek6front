import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { __addComment } from "../detail/commentSlice";
import Comments from "./Comments";
import { __getComments } from "../detail/commentSlice";
import { useSelector } from "react-redux";

const Comment = () => {
  const { id } = useParams();
  const [open, setOpen] = useState();
  const dispatch = useDispatch();

  const initialState = {
    id: 0,
    movieId: id,
    commentAuthor: "",
    commentBody: "",
  };
  const [comment, setComment] = useState(initialState);
  const { isLoading, error, comments } = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(__getComments());
  }, [dispatch]);

  if (isLoading) {
    return <div> 로딩 중 ... </div>;
  }

  if (error) {
    return <div> {error.message} </div>;
  }

  const commentOnsumitHandler = () => {
    dispatch(__addComment(comment));
    setComment(initialState);
  };
  return (
    <>
      <Wrap open={open}>
        <div
          className="innerDiv"
          onClick={() => {
            setOpen((open) => !open);
          }}
        >
          {open ? "댓글 내리기 click!" : "댓글 보기 click!"}
        </div>
        <div>
          <Btnbox>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                commentOnsumitHandler(comment);
              }}
            >
              <input
                value={comment.commentAuthor}
                type="text"
                placeholder="이름"
                onChange={(e) => {
                  const { value } = e.target;
                  setComment({
                    ...comment,
                    commentAuthor: value,
                  });
                }}
              />
              <input
                value={comment.commentBody}
                type="text"
                placeholder="내용"
                onChange={(e) => {
                  const { value } = e.target;
                  setComment({
                    ...comment,
                    commentBody: value,
                  });
                }}
              />
              <button>추가하기</button>
            </form>
          </Btnbox>
          {comments.map((comment) => (
            <div key={comment.id}>
              {+id === +comment.movieId ? <Comments comment={comment} /> : null}
            </div>
          ))}
        </div>
      </Wrap>
    </>
  );
};

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
    margin-top: 70px;
    justify-content: space-evenly;
  }
  input {
    border: 2px solid #deb887;
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

    border: none;
    border-radius: 5px;
  }
  button:hover {
    cursor: pointer;
  }
`;
