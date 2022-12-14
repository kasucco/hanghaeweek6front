import styled from "styled-components";

const StContainer = styled.div`
  @font-face {
    font-family: "SeoulHangangM";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/SeoulHangangM.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Warn = styled.div`
  color: red;
  padding-left: 17px;
  font-size: 0.8rem;
  font-weight: 00;
  /* div + & {
margin: 0.5rem 0 0.8rem;
} */
  font-family: "SeoulHangangM";
  margin-top: 5px;
  margin-left: -180px;
`;

const Stform = styled.form`
  border-radius: 20px;
  border: 5px solid rgb(150, 105, 47);
  background-color: rgb(255, 241, 223);
  min-width: 400px;
  min-height: 600px;
  padding: 40px 15px 20px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  /* position: absolute;
transform: translate(-50%, -50%); */
`;

const Stinputs = styled.input`
  font-family: "SeoulHangangM";
  padding-left: 10px;
  border: 1px solid rgb(150, 105, 47);
  height: 40px;
  width: 300px;
  border-radius: 12;
`;

const StTitle = styled.div`
  font-size: x-large;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Stlabel = styled.div`
  font-size: large;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Stwrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export { StContainer, Warn, Stform, Stinputs, StTitle, Stlabel, Stwrap };
