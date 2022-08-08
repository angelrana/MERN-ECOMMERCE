import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  flex: 1;
  margin: 4px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 30px;
  color: white;
`;
const Button = styled.button`
  border: none;
  background-color: black;
  color: white;
  padding: 8px;
  border-radius: 4px;
  margin: 5px;
  cursor: pointer;
  transition: all 1.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`} key={item.key}>
        <Image src={item.img}></Image>

        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
