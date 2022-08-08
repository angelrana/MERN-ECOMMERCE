// import styled from "styled-components";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import Announcement from "../components/Announcement";
// import { Link } from "react-router-dom";

// const Container = styled.div`
//   min-width: 280px;
//   height: 350px;
// `;
// const Wrapper = styled.div`
//   display: flex;
//   flex: 1;
//   margin: 20px;
//   position: relative;
//   overflow: hidden;
//   background-color: white;
//   border-style: outset;
//   border-width: thin;
//   position: relative;
//   flex-direction: column;
//   width: 20%;
// `;
// const ImageContainer = styled.div`
//   min-width: 100px;
//   height: 300px;
//   object-fit: cover;
//   display: flex;
//   justify-content: center;
// `;
// const Image = styled.img`
//   height: 80%;
//   object-fit: cover;
// `;
// const Info = styled.div`
//   margin-left: 10px;
//   overflow: hidden;
// `;
// const Title = styled.h2`
//   font-size: 16px;
//   font-weight: 200;
// `;
// const Price = styled.span``;
// const WishList = () => {
//   return (
//     <Container>
//       <Navbar />
//       <Announcement />
//       <Wrapper>
//         <Link to={`/product/${item._id}`}>
//           <ImageContainer>
//             <Image src="https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXdlc29tZSUyMHBpY3xlbnwwfHwwfHw%3D&w=1000&q=80"></Image>
//           </ImageContainer>
//           <Info>
//             <Title>Title </Title>
//             <Price>$30</Price>
//           </Info>
//         </Link>
//       </Wrapper>
//       <Footer />
//     </Container>
//   );
// };

// export default WishList;
