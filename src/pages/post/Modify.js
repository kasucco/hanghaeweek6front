import styled from "styled-components";
import Layout from "../../shared/Layout";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getPosts } from "../post/postSlice";
import Code from "../../commponents/Code";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import useInput from "../../shared/useInput";
import { acyncUpdatePosts } from "../post/postSlice";
import { SelectBox } from "../../commponents/SelectBox";
import Button from "../../shared/Button";
import { OPTIONS } from "../../commponents/SelectBox";

function Modify() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [child, setChild] = useState();
  const params = useParams();

  const parentsFunction = (e) => {
    setChild(e);
  };

  const [inputs, setInputs, changeHandle] = useInput({
    title: "",
    content: "",
    name: "",
  });

  useEffect(() => {
    setInputs({ ...inputs, name: child });
  }, [child]);

  console.log(inputs);

  // const isValid = inputs.title.length >= 10 && inputs.content.length >= 10;

  const handleButtonValid = () => {
    // if (!isValid) {
    //   alert("10글자 이상 입력하세요");
    // } else {
    onclickSubmitHandler();
    // }
  };
  const onclickSubmitHandler = () => {
    dispatch(acyncUpdatePosts(params.id, inputs));
    // navigate("/");
  };

  return (
    <Layout>
      <Buttonbox>
        {/* <Button
          onClick={() => {
            navigate("/");
          }}
        >
          이전으로
        </Button> */}
      </Buttonbox>
      <Formbox>
        <Inputbox>
          <SelectBox
            SelectBox
            options={OPTIONS}
            defaultValue="code"
            name="name"
            value={inputs.name}
            parentsFunction={parentsFunction}
          />

          <FlexBox>
            <LabelBox>제목</LabelBox>
            <Titleinput
              onChange={changeHandle}
              type="text"
              name="title"
              value={inputs.title}
              // placeholder="10자 이상 입력해주세요"
              maxLength={20}
            ></Titleinput>
          </FlexBox>
          <FlexBox>
            <LabelBox>내용</LabelBox>
            <Contentinput
              onChange={changeHandle}
              type="text"
              name="content"
              value={inputs.content}
              // placeholder="10자 이상 입력해주세요"
              maxLength={200}
            ></Contentinput>
          </FlexBox>
        </Inputbox>
      </Formbox>
      <Buttonbox>
        <Button
          onClick={() => {
            handleButtonValid();
          }}
          disabled={inputs.content === "" || inputs.title === ""}
        >
          수정완료
        </Button>
      </Buttonbox>
    </Layout>
  );
}
export default Modify;

const Formbox = styled.form`
  padding: 20px;
  background: transparent;
  border-radius: 10px;
  display: flex;
`;

const LabelBox = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
  font-size: larger;
`;

const Inputbox = styled.div`
  padding: 20px;
  background: transparent;
  border-radius: 10px;
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Titleinput = styled.input`
  padding: 20px;
  background: ghostwhite;
  border-radius: 10px;
  border: 1px solid #666;
`;

const Contentinput = styled.textarea`
  padding: 20px;
  background: ghostwhite;
  height: 200px;
  border-radius: 10px;
  border: 1px solid #666;
  resize: none;
`;

const Buttonbox = styled.div`
  background: transparent;
  text-align: right;
`;
