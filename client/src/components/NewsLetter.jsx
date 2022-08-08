import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";

const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fcf1ed;
`;
const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 20px;
`;
const Desc = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
`;
const EmailContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
const Input = styled.input`
  flex: 8;
  border: none;
`;

const Button = styled.button`
  flex: 1;
  background-color: teal;
  border: none;
  color: white;
  cursor: pointer;
`;
const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products</Desc>
      <EmailContainer>
        <Input placeholder="Your email"></Input>
        <Button>
          <SendIcon />
        </Button>
      </EmailContainer>
    </Container>
  );
};

export default NewsLetter;
