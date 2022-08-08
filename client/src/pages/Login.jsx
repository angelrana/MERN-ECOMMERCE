import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/free-photo/blissful-young-lady-sunglasses-fooling-around-during-photoshoot-chair-laughing-winsome-girl-white-shoes_197531-5165.jpg?size=626&ext=jpg&ga=GA1.2.1257176031.1656180328")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  background-color: white;
  width: 25%;
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 400;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  padding: 10px;
  margin: 10px 0px;
`;
const Button = styled.button`
  width: 40%;
  background-color: teal;
  padding: 15px;
  border: none;
  color: white;
  margin-bottom: 10px;
  cursor: pointer;

  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;
const ErrorItem = styled.a`
  margin: 5px 0px;
  text-decoration: underline;
  cursor: pointer;
  font-size: 12px;
`;

const Error = styled.span`
  color: red;
`;
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          ></Input>
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <Button onClick={handleLogin} disabled={isFetching}>
            LOG IN
          </Button>
          {error && <Error>Something went wrong....</Error>}
          <ErrorItem>Forgot the password?</ErrorItem>
          <ErrorItem>Create a new account</ErrorItem>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
