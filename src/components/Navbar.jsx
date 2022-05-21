import React from "react";
import styled from "styled-components";
import Search from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, Outlet } from "react-router-dom";
import { color } from "@mui/system";

const Container = styled.div`
  height: 60px;

`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
`;
const Center = styled.div`
  flex: 1;
  
`;

const Logo = styled.h1`
  font-weight: bold;
  link-style: none;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration: none;
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input style={{color: "grey", fontSize: 16}}/>
            <Search />
          </SearchContainer>
        </Left>

        <Center>
          <Link to="/" style={{textDecoration: "none", color: "black"}}><Logo>AVSK.</Logo></Link>
        </Center>

        <Right>
        <Link to="/register" style={{textDecoration: "none"}}><MenuItem>REGISTER</MenuItem></Link>
        <Link to="/login" style={{textDecoration: "none"}}><MenuItem>SIGN IN</MenuItem></Link>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
            <Link to="/cart" style={{textDecoration: "none"}}><ShoppingCartOutlinedIcon /></Link>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
  
    </Container>
  );
}

export default Navbar;
