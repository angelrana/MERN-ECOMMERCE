import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
const Container = styled.div`
  display: flex;
  flex: 1;
  margin: 6px;
  min-width: 280px;
  position: relative;
  height: 350px;
  overflow: hidden;
  background-color: white;
  border-style: outset;
  border-width: thin;
  position: relative;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  min-width: 180px;
  height: 300px;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 75%;
  object-fit: cover;
`;

const Icon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;

  transition: all 1.5s ease;
  &:hover {
    transform: scale(1.2);
  }
`;

const Info = styled.div`
  margin-left: 10px;
  overflow: hidden;
`;
const Title = styled.h2`
  font-size: 16px;
  font-weight: 200;
`;
const Price = styled.span``;

const ProductItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/product/${item._id}`}>
        <ImageContainer>
          <Image src={item.img}></Image>
          <Icon>
            <FavoriteBorderIcon />
          </Icon>
        </ImageContainer>
        <Info>
          <Title>{item.title}</Title>
          <Price>{item.price}</Price>
        </Info>
      </Link>
    </Container>
  );
};

export default ProductItem;
