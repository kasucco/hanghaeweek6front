import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../../shared/Layout";
import { useDispatch, useSelector } from "react-redux";
import { __getPosts } from "../post/postSlice";
import Code from "../../commponents/Code";
import Chat from "../../commponents/Chat";
import Error from "../../commponents/Error";
import Question from "../../commponents/Question";

function Main() {
  const [content, setContent] = useState()
  const handleClickButton = (e) => {
    const { name } = e.target;
    setContent(name);
  };
  //버튼을 누르면 해당 함수를 실행하며 버튼을 눌렸을때 map()함수로 돌린 data.name을 name에 할당하여
  // 이벤트 메소드를 이용하여 name값을 담는다. 그리고 나서 setContent에 name을 담고 content에 담는다.

  const selectComponent = {
    code: <Code />,
    error: <Error />,
    chat: <Chat />,
    question: <Question />,
  }
  useEffect(() => {
    setContent("code")
  }, []);
  console.log()
  //버튼을 누른 후 렌더링 시킬 때 selectComponent 변수의 값에 담긴 객체의 key값을 이용하여 
  //렌더링시킨다.


  const dispatch = useDispatch();
  const { isLoading, error, posts } = useSelector((state) => state.posts);
  console.log(posts);

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }



  return (
    <>
      <Layout>
        <Nav>
          <Gnb>
            {
              posts.map((data) => {
                return (
                  <button onClick={handleClickButton} name={data.name} key={data.id}>
                    {data.title}
                  </button>
                );
              })
            }
          </Gnb>
          <div>
            <input placeholder="키워드 검색"></input>
            <button>검색</button>
          </div>
        </Nav>
      </Layout>
      {content && <List>{selectComponent[content]}</List>}

      <List>
        <div>
          <h2>코드👾</h2>
          {posts.map(
            (post) => <Code key={post.id} postsData={post} />
          )}
        </div>
      </List>
    </>
  );
}

export default Main;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  > div > button {
    margin-left: 15px;
  }
`;

const Gnb = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-around;
  font-size: 20px;

  div {
    width: 100px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
  }
  div:hover {
    background-color: darkgray;
  }
`;

const List = styled.div`
  width: 1200px;
  margin: 30px auto;
  border: 2px solid black;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #deb887;
  h2{text-align: center}
`;
