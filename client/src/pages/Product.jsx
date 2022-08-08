import { useEffect, useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import { publicRequest } from "../requestMethods";
import { useLocation } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const Info = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 600;
  font-size: 25px;
`;
const Desc = styled.p`
  font-size: 17px;
  font-weight: 400;
  color: gray;
`;
const Price = styled.span`
  font-size: 30px;
  font-weight: 500;
`;
const SizeContainer = styled.div``;
const SizeTitle = styled.p`
  font-weight: 600;
  font-size: 15px;
  margin: 15px 0px;
`;
const SizeOption = styled.div`
  display: flex;
  margin: 0px -4px;
`;

const Size = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid gray;
  margin: 0px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    border: 1px solid teal;
  }
`;
const Select = styled.select`
  width: 30%;
  border-radius: 4px;
  border-style: 1px solid black;
  margin-top: 10px;
  margin-left: 5px;
  padding: 5px;
`;
const Option = styled.option``;
const BagContainer = styled.div`
  display: flex;
  margin: 15px -5px;
`;
const AddContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18em;
  padding: 15px;
  margin: 0px 7px;
  border-radius: 5px;
  border: none;
  background-color: teal;
  color: white;
  &: hover {
    background-color: rgb(1, 120, 120);
  }
`;

const WishListContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18em;
  padding: 15px;
  margin: 0px 7px;
  border-radius: 5px;
  background-color: white;
  border: 1px solid gray;

  background-color: $props
  &: hover {
    border: 1px solid black;
  }
`;
const AddProduct = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin: 0px 5px;
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState([]);
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleChange = () => {
    dispatch(addProduct({ ...product, quantity, size }));
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <Info>
          <Title>{product.title}</Title>
          <Desc>{product.desc}.</Desc>
          <hr style={{ marginTop: "10px" }}></hr>
          <Price>${product.price}</Price>
          <SizeContainer>
            <SizeTitle>SELECT SIZE</SizeTitle>
            <SizeOption onClick={(e) => setSize(e.target.value)}>
              {product.size?.map((s) => {
                return <Size key={s}>{s}</Size>;
              })}
            </SizeOption>
          </SizeContainer>
          <Select onChange={(e) => setQuantity(e.target.value)}>
            <Option>QUANTITY</Option>
            <Option>1</Option>
            <Option>2</Option>
          </Select>

          <BagContainer>
            <AddContainer onClick={handleChange}>
              <ShoppingBagIcon />
              <AddProduct>ADD TO BAG</AddProduct>
            </AddContainer>
            <WishListContainer>
              <FavoriteBorderIcon />
              <AddProduct>WISHLIST</AddProduct>
            </WishListContainer>
          </BagContainer>
        </Info>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
