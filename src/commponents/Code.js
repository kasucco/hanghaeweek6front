import styled from "styled-components";

const Code = ({ postsData }) => {
    console.log(postsData)
    return (
        <CodeBox>
            <div>
                <span>{postsData?.id}</span>
                <div>{postsData?.title}</div>
                <div>{postsData?.body}</div>
                {/* Main.Js에서 code.js를 &&연산자를 사용했고 찾아줄때 옵셔널 체이닝을 이용하였다.
                ?연산자를 사용하지 않았을때 실행이 되지 않았다 */}
            </div>
        </CodeBox>
    )
}

export default Code;

const CodeBox = styled.div`
width: 90%;
height: 200px;
margin: 20px auto;
border: 2px solid black;
border-radius: 10px;
margin-top: 20px;
background-color: white;
`