import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Code = ({ postsData, detailPostData }) => {
  const navigate = useNavigate();
  return (
    <CodeBox
      onClick={() => navigate(`/detail/${postsData.postId}`)}
      postsData={postsData}
    >
      <div>
        <div>{postsData?.title}</div>
        <div>작성자:{postsData?.nickname}</div>
        <div>{detailPostData?.content}</div>
      </div>
    </CodeBox>
  );
};

export default Code;

const CodeBox = styled.div`
  font-size: large;
  font-weight: 700;
  width: 90%;
  height: 100px;
  margin: 20px auto;
  border: 2px solid black;
  border-radius: 10px;
  margin-top: 20px;
  background-color: white;
  padding: 20px;
`;
