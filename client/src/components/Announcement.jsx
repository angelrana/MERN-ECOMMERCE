import styled from "styled-components";
const Container = styled.div`
  background-color: teal;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  padding: 5px;
  color: white;
`;
const Announcement = () => {
  return (
    <Container>
      <Title>Super Deal! Free shipping on Orders Over $50</Title>
    </Container>
  );
};

export default Announcement;
