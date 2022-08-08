import styled from "styled-components";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/free-photo/fashionable-model-black-hat-evening-dress-leather-jacket-posing-white_273443-4951.jpg?size=626&ext=jpg&ga=GA1.2.1257176031.1656180328")
      center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  background-color: white;
  width: 40%;
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 200;
  font-size: 27px;
`;
const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 35%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Policy = styled.p`
  font-size: 15px;
  margin: 20px 0px;
`;
const Button = styled.button`
  border: none;
  background-color: teal;
  padding: 10px;
  width: 40%;
  color: white;
`;

const Span = styled.span`
  font-weight: bold;
`;
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name"></Input>
          <Input placeholder="lastname"></Input>
          <Input placeholder="username"></Input>
          <Input placeholder="email"></Input>
          <Input placeholder="password"></Input>
          <Input placeholder="confirm password"></Input>
        </Form>
        <Policy>
          By creating an account, I consent to the processing g my personal data
          in accordance with the <Span>PRIVACY POLICY</Span>
        </Policy>
        <Button>CREATE</Button>
      </Wrapper>
    </Container>
  );
};

export default Register;
