import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductList from "../pages/ProductList";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  flex: wrap;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
const ClothingCategory = styled.div`
  font-size: 13px;
  margin-left: 35px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
`;
const Logo = styled.h1`
  font-size: 33px;
  text-align: center;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  cursor: pointer;
`;

const Entry = styled.button`
  background-color: teal;
  border: none;
  border-radius: 4px;
  padding: 4px 9px;
  color: white;
  cursor: pointer;
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to={`/products/woman`}>
            <ClothingCategory>WOMEN</ClothingCategory>
          </Link>
          <Link to={`products/man`}>
            <ClothingCategory>MEN</ClothingCategory>
          </Link>
          <Link to={`products/shoes`}>
            <ClothingCategory>SHOES</ClothingCategory>
          </Link>
          <Link to={`products/accessories`}>
            <ClothingCategory>ACCESSORIES</ClothingCategory>
          </Link>
        </Left>
        <Center>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Logo>ANN</Logo>
          </Link>
        </Center>
        <Right>
          <Link to="/login">
            <Entry style={{ marginRight: "25px" }}>Login</Entry>
          </Link>
          <Link to="/register">
            <Entry style={{ marginRight: "20px" }}>Register</Entry>
          </Link>
          <Link to="/cart">
            <Badge color="primary" badgeContent={quantity}>
              <ShoppingCartIcon style={{ width: "20px", marginRight: "9px" }} />
            </Badge>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
