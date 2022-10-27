import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { __deleteComment, __updateComment } from "../detail/detailSlice";

const Comments = ({ comment }) => {
  const dispatch = useDispatch();
  const [isEdit, setEdit] = useState(false);
  const [input, setInput] = useState({
    postId: comment.postId,
    comment: "",
  });
  console.log(input);

  const fnDeleteCommentHandler = () => {
    const result = window.confirm("정말로 삭제하시겠습니까?");
    if (result) {
      dispatch(__deleteComment(comment.commentId));
    } else {
      return;
    }
  };

  const onClickChangeHandler = () => {
    dispatch(__updateComment(comment.commentId, input));
    setEdit(false);
  };

  return (
    <CommentBox key={comment.id}>
      {!isEdit ? (
        <>
          <CommentBody>{comment.comment}</CommentBody>
          <button onClick={() => setEdit(true)}>수정</button>
        </>
      ) : (
        <>
          <StText
            value={input.comment}
            onChange={(e) => {
              const modify = e.target.value;
              setInput({ ...input, comment: modify });
            }}
          ></StText>
          <button onClick={() => onClickChangeHandler()}>저장</button>
        </>
      )}
      <button onClick={() => fnDeleteCommentHandler()}>삭제</button>
    </CommentBox>
  );
};

export default Comments;

const CommentBox = styled.div`
  margin: 20px 0px 0px 50px;
  display: flex;
  border: 5px solid black;
  border-radius: 10px;
  padding: 5px;
  height: 90px;
  background-color: white;
`;
const CommentAuthor = styled.div`
  width: 100px;
  font-size: 20px;
  margin-right: 30px;
  display: flex;
  justify-content: center;
`;
const CommentBody = styled.div`
  font-size: 20px;
  width: 700px;
  height: 10px;
`;

const StText = styled.textarea`
  height: 30px;
  width: 700px;
  background-color: transparent;
  border: 1px solid transparent;
`;
