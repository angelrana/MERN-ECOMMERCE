import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
const Container = styled.div``;
const SortContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
const SortBox = styled.div``;
const SortText = styled.div`
  margin: 10px;
`;
const Select = styled.select`
  margin: 5px;
  padding: 10px;
  width: 80px;
`;
const Option = styled.option``;
const Title = styled.h1`
  font-size: 25px;
  margin-left: 40px;
  margin-top: 10px;
`;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState({});

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  console.log(filters);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat}</Title>
      <SortContainer>
        <SortBox>
          <SortText>
            <Select onChange={(e) => setSort(e.target.value)}>
              <Option>Sort</Option>
              <Option value="new arrivals">New Arrivals</Option>
              <Option value="high to low">Price: High to Low</Option>
              <Option value="low to high">Price: Low to High</Option>
            </Select>
            <Select name="size" onChange={handleFilter}>
              <Option>Size</Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
              <Option>XXL</Option>
            </Select>
          </SortText>
        </SortBox>
        <SortBox>
          <SortText>
            <Select name="color" onChange={handleFilter}>
              <Option>Color</Option>
              <Option>yellow</Option>
              <Option>gray</Option>
              <Option>black</Option>
              <Option>blue</Option>
              <Option>green</Option>
              <Option>purple</Option>
            </Select>
          </SortText>
        </SortBox>
      </SortContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
