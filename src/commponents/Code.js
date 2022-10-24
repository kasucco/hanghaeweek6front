import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Code = ({ postsData }) => {
  const navigate = useNavigate();
  const onViewHandler = () => {
    navigate(`/detail/${postsData.id}`);
  };
  return (
    <CodeBox onClick={onViewHandler}>
      <div>
        <span>{postsData?.id}</span>
        <div>{postsData?.title}</div>
        <div>{postsData?.body}</div>
      </div>
    </CodeBox>
  );
};

export default Code;

const CodeBox = styled.div`
  width: 90%;
  height: 200px;
  margin: 20px auto;
  border: 2px solid black;
  border-radius: 10px;
  margin-top: 20px;
  background-color: white;
  cursor: pointer;
`;
