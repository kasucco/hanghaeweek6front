import styled from "styled-components";

const List = () => {


    return (
        <Posts>
            <div>게시글</div>
            <div>게시글</div>
            <div>게시글</div>
            <div>게시글</div>
        </Posts>
    );
};

const Posts = styled.div`
  width: 1200px;
  margin-top: 30px;
  margin: 0 auto;
  div{
    height: 100px;
    border:1px solid black;
    border-radius: 15px;
    margin: 30px;
    box-sizing: border-box;
  padding: 30px;
}
  `




export default List;