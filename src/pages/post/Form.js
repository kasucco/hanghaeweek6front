import React from "react";
import styled from "styled-components";
import { SelectBox } from "../../commponents/SelectBox";
import Layout from "../../shared/Layout";
import Button from "../../shared/Button";

function Form() {
  console.log("폼페이지");

  return (
    <Layout>
      <SelectBox />
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
          <FlexBox>
            <LabelBox>제목</LabelBox>
            <Titleinput
              // onChange={changeHandle}
              type="text"
              name="title"
              // value={inputs.title}
              placeholder="10자 이상 입력해주세요"
              maxLength={20}
            ></Titleinput>
          </FlexBox>
          <FlexBox>
            <LabelBox>내용</LabelBox>
            <Contentinput
              // onChange={changeHandle}
              type="text"
              name="content"
              // value={inputs.content}
              placeholder="10자 이상 입력해주세요"
              maxLength={200}
            ></Contentinput>
          </FlexBox>
        </Inputbox>
      </Formbox>
      <Buttonbox>
        <Button
        // onClick={() => {
        //   handleButtonValid();
        // }}
        // disabled={inputs.content === "" || inputs.title === ""}
        >
          작성완료
        </Button>
      </Buttonbox>
    </Layout>
  );
}
export default Form;

const Formbox = styled.div`
  padding: 20px;
  background: transparent;
  border-radius: 10px;
  display: flex;
`;

const LabelBox = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
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
  background: transparent;
  border-radius: 10px;
  border: 1px solid #666;
  background-color: white;
`;

const Contentinput = styled.textarea`
  padding: 20px;
  background: transparent;
  height: 200px;
  border-radius: 10px;
  border: 1px solid #666;
  resize: none;
  background-color: white;
`;

const Buttonbox = styled.div`
  background: transparent;
  text-align: right;
`;
