import styled from "styled-components";

const Question = () => {
    return (
        <QuestionBox>
            <div>
                <span>이름</span>
                <div>제목</div>
                <div>코드내용</div>
            </div>
        </QuestionBox>
    )
}

export default Question;

const QuestionBox = styled.div`
width: 100%;
height: 200px;
border: 1px solid black;
border-radius: 10px;
margin-top: 20px;
`