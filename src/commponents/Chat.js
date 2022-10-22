import styled from "styled-components";

const Chat = (postsData) => {
    return (
        <ChatBox>
            <div>
                <span>{postsData?.id}</span>
                <div>{postsData?.title}</div>
                <div>{postsData?.body}</div>
            </div>
        </ChatBox>
    )
}

export default Chat;

const ChatBox = styled.div`
width: 90%;
height: 200px;
margin: 20px auto;
border: 2px solid black;
border-radius: 10px;
margin-top: 20px;
background-color: white;
`