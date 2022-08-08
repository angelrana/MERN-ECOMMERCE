import styled from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Facebook, Pinterest, Twitter } from "@mui/icons-material";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
const Container = styled.div`
  background-color: #003a45;
  height: 50vh;
  display: flex;
  padding: 40px;
  color: white;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;
const First = styled.div``;
const Title = styled.h1`
  font-size: 15px;
`;
const Desc = styled.p`
  margin: 20px 0px;
  line-height: 20px;
  margin-right: 5px;
`;

const Second = styled.div``;
const SocialIcons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;
const Icons = styled.span`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;
const Icon = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: #${(props) => props.color};
  margin-right: 3px;
`;
const IconName = styled.span`
  font-size: 15px;
`;

const Third = styled.div``;
const List = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;
const ListItem = styled.p`
  margin-top: 6px;
`;

const Fourth = styled.div``;
const Contact = styled.div`
  margin-top: 20px;
`;
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const Payment = styled.img``;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <First>
          <Title>Get to know us</Title>
          <Desc>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
            laboriosam quidem officia quisquam omnis odit quae dicta assumenda
            animi.
          </Desc>
        </First>
        <Second>
          <Title>Connect with us</Title>
          <SocialIcons>
            <Icons>
              <Icon color="385999">
                <Facebook style={{ margin: " 3px", width: "22px" }} />
              </Icon>
              <IconName>Facebook</IconName>
            </Icons>
            <Icons>
              <Icon color="E4405F">
                <InstagramIcon style={{ margin: " 3px", width: "22px" }} />
              </Icon>
              <IconName>Instagram</IconName>
            </Icons>
            <Icons>
              <Icon color="55ACEE">
                <Twitter style={{ margin: " 3px", width: "22px" }} />
              </Icon>
              <IconName>Twitter</IconName>
            </Icons>
            <Icons>
              <Icon color="E60023">
                <Pinterest style={{ margin: " 3px", width: "22px" }} />
              </Icon>
              <IconName>Pinterest</IconName>
            </Icons>
          </SocialIcons>
        </Second>
        <Third>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Men Fashion</ListItem>
            <ListItem>Women Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
          </List>
        </Third>
        <Fourth>
          <Title>Contact</Title>
          <Contact>
            <ContactItem>
              <RoomIcon />
              622 Dixie Path, south hffkfkskhdf 763429
            </ContactItem>
            <ContactItem>
              <PhoneIcon />
              +1 234 56 78
            </ContactItem>
            <ContactItem>
              <MailIcon />
              contact@ann.dev
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
          </Contact>
        </Fourth>
      </Wrapper>
    </Container>
  );
};

export default Footer;
