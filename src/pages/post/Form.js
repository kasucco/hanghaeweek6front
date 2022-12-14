import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SelectBox } from "../../commponents/SelectBox";
import Layout from "../../shared/Layout";
import Button from "../../shared/Button";
import { OPTIONS } from "../../commponents/SelectBox";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useInput from "../../shared/useInput";
import { acyncCreatePosts } from "./postSlice";

function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [child, setChild] = useState();

  const parentsFunction = (e) => {
    setChild(e);
  };

  const [inputs, setInputs, changeHandle] = useInput({
    title: "",
    content: "",
    name: "",
  });

  useEffect(() => {
    setInputs({ ...inputs, name: Number(child) });
  }, [child]);

  // const isValid = inputs.title.length >= 10 && inputs.content.length >= 10;

  const handleButtonValid = () => {
    // if (!isValid) {
    //   alert("10글자 이상 입력하세요");
    // } else {
    onclickSubmitHandler();
    // }
  };
  const onclickSubmitHandler = () => {
    dispatch(acyncCreatePosts(inputs));

    // navigate("/");
  };

  return (
    <>
      <Layout>
        <SelectBox
          SelectBox
          options={OPTIONS}
          defaultValue="1"
          name="name"
          value={inputs.name}
          parentsFunction={parentsFunction}
        />
      </Layout>
      <Wrap>
        <Formbox>
          <Inputbox>
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
            작성완료
          </Button>
        </Buttonbox>
      </Wrap>
    </>
  );
}
export default Form;

const Wrap = styled.div`
  width: 1200px;
  margin: 30px auto;
  border: 2px solid black;
  border-radius: 15px;
  background-color: wheat;
`;

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
  background-color: white;
`;

const Contentinput = styled.textarea`
  padding: 20px;
  background: ghostwhite;
  height: 200px;
  border-radius: 10px;
  border: 1px solid #666;
  resize: none;
  background-color: white;
`;

const Buttonbox = styled.div`
  position: relative;
  bottom: 30px;
  right: 40px;
`;
