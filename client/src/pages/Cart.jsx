import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";

const KEY =
  "pk_test_51LIeapSFGwkNywKpv1wSmAt2xGvrmp9LxmgjmuyRH478DeGrvYVwKYEIMEM2BsS4fLHwZa9jIMUaUa421PIBuzEW00wG5JODvT";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`;
const Box = styled.div`
  margin: 0px 50px;
  flex: 2;
`;

const ShippingFree = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid lightgray;
  padding: 5px;
  border-radius: 4px;
  width: 100%;
`;
const ImgContainer = styled.div``;
const Img = styled.img`
  width: 30px;
`;

const FreeShippingText = styled.div``;
const FreeOrder = styled.p`
  font-size: 13px;
`;
const Span = styled.span`
  font-weight: 600;
`;

const CheckoutProduct = styled.div`
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 5px;
  display: flex;
  margin-top: 20px;
`;
const Image = styled.img`
  width: 20%;
`;
const ProductInfo = styled.div`
  margin: 5px;
`;
const Title = styled.h1`
  font-size: 15px;
  font-weight: 500;
`;
const Desc = styled.p`
  font-size: 13px;
`;
const ProductId = styled.p`
  font-size: 13px;
`;
const Select = styled.select`
  margin: 10px 5px;
  background-color: lightgray;
  border: none;
`;
const Option = styled.option``;
const Price = styled.span``;
const VerticalLine = styled.div`
  border-left: 1px solid gray;
  height: 250px;
`;
const Summary = styled.div`
  flex: 1;
  margin: 0px 20px;
`;
const SummaryTitle = styled.p`
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 20px;
`;
const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px;
`;
const SummaryItemText = styled.p`
  font-size: 14px;
`;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: teal;
  color: white;
  border: none;
  margin: 10px 0px;
  &:hover {
    background-color: rgb(1, 120, 120);
  }
`;
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setstripeToken] = useState(null);
  const navigate = useNavigate();
  const onToken = (token) => {
    setstripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 100,
        });
        navigate.push("/success", {
          stripeData: res.data,
          products: cart,
        });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, navigate]);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Box>
          <ShippingFree>
            <ImgContainer>
              <Img src="https://constant.myntassets.com/checkout/assets/img/ship-free.webp"></Img>
            </ImgContainer>
            <FreeShippingText>
              <FreeOrder>
                Yay! <Span>No convenience fee</Span> on this order.
              </FreeOrder>
            </FreeShippingText>
          </ShippingFree>
          {cart.products.map((product) => (
            <CheckoutProduct>
              <Image src={product.img}></Image>
              <ProductInfo>
                <Title>{product.title}</Title>
                <Desc>{product.desc}</Desc>
                <ProductId>ID: {product._id}</ProductId>
                <Select>
                  <Option>Size:{product.size}</Option>
                </Select>
                <Select>
                  <Option>Qty: {product.quantity}</Option>
                </Select>
                <Price>{product.price}</Price>
              </ProductInfo>
            </CheckoutProduct>
          ))}
        </Box>
        <VerticalLine></VerticalLine>
        <Summary>
          <SummaryTitle>PRICE DETAILS</SummaryTitle>
          <SummaryItem>
            <SummaryItemText>Total MRP</SummaryItemText>
            <SummaryItemPrice>{cart.total}</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Estimated Shipping</SummaryItemText>
            <SummaryItemPrice>60</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Shipping Discount</SummaryItemText>
            <SummaryItemPrice>60</SummaryItemPrice>
          </SummaryItem>
          <hr></hr>
          <SummaryItem>
            <SummaryItemText style={{ fontWeight: "600" }}>
              Total Amount
            </SummaryItemText>
            <SummaryItemPrice style={{ fontWeight: "600" }}>
              {cart.total}
            </SummaryItemPrice>
          </SummaryItem>
          <StripeCheckout
            name="ann shop"
            image=""
            billingAddress
            shippingAddress
            description={`Your total is mrp $${cart.total}`}
            amount={cart.total * 100}
            token={onToken}
            stripeKey={KEY}
          >
            <Button>PLACE ORDER</Button>
          </StripeCheckout>
        </Summary>
      </Wrapper>

      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Cart;
