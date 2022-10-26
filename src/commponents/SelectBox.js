import { useEffect, useState } from "react";
import styled from "styled-components";

export const OPTIONS = [
  { value: "1", name: "코드" },
  { value: "2", name: "에러" },
  { value: "3", name: "잡담" },
  { value: "4", name: "질문" },
];

export const SelectBox = ({ options, parentsFunction }) => {
  const [value, setValue] = useState("1");

  const handleChange = (e) => {
    // event handler
    setValue(e.target.value);
  };
  useEffect(() => {
    parentsFunction(value);
  }, [value]);

  return (
    <SelectBoxWrapper>
      <FlexBox>
        <LabelBox>게시판 선택</LabelBox>
        <Select value={value} onChange={handleChange}>
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              defaultValue={options.defaultValue === option.value}
            >
              {option.name}
            </option>
          ))}
        </Select>
      </FlexBox>
      <IconSVG
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 14L16 6H4L10 14Z"
          fill="#1A1A1A"
        />
      </IconSVG>
    </SelectBoxWrapper>
  );
};

// focus 시에 border-color를 red로 변경
export const Select = styled.select`
  margin: 0;
  min-width: 0;
  display: block;
  width: 100%;
  padding: 8px 8px;
  font-size: inherit;
  line-height: inherit;
  border: 1px solid #666;
  border-radius: 10px;
  color: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: ghostwhite;
  &:focus {
    border-color: red;
  }
`;
const SelectBoxWrapper = styled.div`
  display: flex;
`;
const IconSVG = styled.svg`
  margin-left: -28px;
  align-self: center;
  width: 24px;
  height: 24px;
`;
const LabelBox = styled.label`
  margin-bottom: 15px;
  font-weight: bold;
  font-size: larger;
`;
const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
