import React from 'react';
import styled from '@emotion/styled';
import { useAuth0 } from '../react-auth0-spa';

const NavBar = () => {
  const { user } = useAuth0();
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <NavigationBar>
          <Logo src="./images/logo.png"></Logo>
          <HelloMessage>Hello Guest!</HelloMessage>
          <NavLink href="/admin">AdminPage</NavLink>
          <NavLink onClick={() => loginWithRedirect({})}>Log in</NavLink>
          <NavLink href="/">Home</NavLink>
        </NavigationBar>
      )}


      {isAuthenticated && (
        <NavigationBar>
          <NavLink onClick={() => logout()}>Log out</NavLink>
          <NavLink href="/admin">AdminPage</NavLink>
          <NavLink href="/profile">Profile</NavLink>
          <NavLink href="/">Home</NavLink>
         
          <HelloMessage>Hello {user.nickname}!</HelloMessage>
          <Logo src="./images/logo.png"></Logo>
          
        </NavigationBar>
      )}

    </div>
  );
};

export default NavBar;

const NavigationBar = styled.div`
  margin: 0 auto;
  background-color: #2c3e50;
  overflow: hidden;
  height: 68px;

`;

const NavLink =styled.a`
  float: right;
  color: #f2f2f2;
  text-align: center;
  padding: 23px 16px;
  font-size: 17px;

  :hover{
    background-color: #a0a2af;
    color: black;
  }

  :active{
    background-color: #a0a2af;
    color: white;
  }
`;

const HelloMessage = styled.span`
    float: right;
    color: #f1c40f;
    padding: 23px 16px;
    font-size: 20px;
    margin-left: 30px;

`;

const Logo = styled.img`
  float: left;
  height: 65px;
  margin-left: 30px;
`;