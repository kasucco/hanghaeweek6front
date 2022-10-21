import styled from "styled-components";

const Error = () => {
    return (
        <ErrorBox>
            <div>
                <span>이름</span>
                <div>제목</div>
                <div>코드내용</div>
            </div>
        </ErrorBox>
    )
}

export default Error;

const ErrorBox = styled.div`
width: 100%;
height: 200px;
border: 1px solid black;
margin-top: 20px;
border-radius: 10px;
`