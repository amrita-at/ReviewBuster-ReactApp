import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useAuth0 } from '../react-auth0-spa';
import { useHistory } from "react-router-dom";
import LoadingAnimation from '../components/LoadingAnimation';

const AdminPage = () => { 
    const { loading, user , loginWithRedirect } = useAuth0();
    const history = useHistory();
    const navigateTo = () => history.push('/home')
    let admin = "amrita.tiwari"

    let dummy = {
        name: "",
        r_date: "",
        director: "",
        cast: "",
        lang: "",
        category: "",
        poster: ""
    }
    
    const [inputField, setInputField] = useState(dummy)

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Movie added sucessfully!');
        fetch('http://localhost:3001/movies/' + dummy.name, {
            method: 'post',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body:  JSON.stringify(inputField)
          }).then(res => console.log(res));
    }

    const inputsHandler = (e) => {
        dummy[e.target.name] = e.target.value
        setInputField(dummy)
        console.log(dummy)
    }


    if (loading || !user ){
        return (
            <div style={{ textAlign: 'center' }}>
            <h3 style={{ marginTop: '50px' }}>Please login to access this space!</h3>
            <LoginLink onClick={() => loginWithRedirect({})}>LogIn</LoginLink>
            <LoadingAnimation></LoadingAnimation>
        </div>)
    }

    if (admin !== user.nickname) { 
        return (
            <div style={{ textAlign: 'center' }}>
                <h3 style={{ textAlign: 'center', marginTop: '50px' }}>Oops! Only Admins can access this space!</h3>
                <LoginLink onClick={() => loginWithRedirect({})}>LogIn</LoginLink>
            <LoadingAnimation></LoadingAnimation>
            </div>)
    }


    return (
        <Container>
            <PageTitle>Add Movies</PageTitle>
            <Row className="row">
                <Column className="col-xl-1"></Column>
                <Column className="col-xl-2 col-lg-2 col-md-5 col-sm-12">
                    <LabelElement>Movie Name</LabelElement>
                </Column>
                <Column className="col-xl-3 col-lg-4 col-md-7 col-sm-12">
                    <InputElement name="name" onChange={inputsHandler}></InputElement>
                </Column>
                <Column className="col-xl-2 col-lg-2 col-md-5 col-sm-12">
                    <LabelElement>Release Date</LabelElement>
                </Column>
                <Column className="col-xl-3 col-lg-4 col-md-7 col-sm-12">
                    <InputElement name="r_date" onChange={inputsHandler}></InputElement>
                </Column>
                <Column className="col-xl-1"></Column>
            </Row>
            <Row className="row">
                <Column className="col-xl-1"></Column>
                <Column className="col-xl-2 col-lg-2 col-md-5 col-sm-12">
                    <LabelElement>Director</LabelElement>
                </Column>
                <Column className="col-xl-3 col-lg-4 col-md-7 col-sm-12">
                    <InputElement name="director" onChange={inputsHandler}></InputElement>
                </Column>
                <Column className="col-xl-2 col-lg-2 col-md-5 col-sm-12">
                    <LabelElement>Starring</LabelElement>
                </Column>
                <Column className="col-xl-3 col-lg-4 col-md-7 col-sm-12">
                    <InputElement name="cast" onChange={inputsHandler}></InputElement>
                </Column>
                <Column className="col-xl-1"></Column>
            </Row>
            <Row className="row">
                <Column className="col-xl-1"></Column>
                <Column className="col-xl-2 col-lg-2 col-md-5 col-sm-12">
                    <LabelElement>Category</LabelElement>
                </Column>
                <Column className="col-xl-3 col-lg-4 col-md-7 col-sm-12">
                    <DropDown id="Category" name="category" onChange={inputsHandler}>
                        <option value="Action">Action</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Romance">Romance</option>
                        <option value="Horror">Horror</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Drama">Drama</option>
                        <option value="Documentory">Documentory</option>
                    </DropDown>
                </Column>
                <Column className="col-xl-2 col-lg-2 col-md-5 col-sm-12">
                    <LabelElement>Language</LabelElement>
                </Column>
                <Column className="col-xl-3 col-lg-4 col-md-7 col-sm-12">
                    <InputElement name="lang" onChange={inputsHandler}></InputElement>
                </Column>
                <Column className="col-xl-1"></Column>
            </Row>
            <Row className="row">
                <Column className="col-xl-4 col-lg-4 col-md-3"></Column>
                <Column className="col-xl-2 col-lg-2 col-md-3 col-sm-6">
                    <SaveButton onClick={handleSubmit}>Save Movie</SaveButton>
                </Column>
                <Column className="col-xl-2 col-lg-2 col-md-3 col-sm-6">
                    <CancelButton onClick={navigateTo}>Cancel</CancelButton>
                </Column>
                <Column className="col-xl-4 col-lg-4 col-md-3"></Column>
            </Row>
        </Container>

    );
}

export default AdminPage;

const Container = styled.form`

`;

const PageTitle = styled.h2`
    margin-top: 25px;
    margin-bottom: 20px;
    text-align: center;
    color: #2c3e50;
`;

const LabelElement = styled.h3`
    font-size: 18px;
    color: #5d6d7e;

`;

const InputElement = styled.input`
  margin-top: 0px;
  padding: 5px;
  width: 300px;
  border-radius: 15px;
  height: 40px;
  font-size: 18px;
  background: transparent;
  &:focus{
      outline: 0;
  }
`;


const DropDown = styled.select`
    margin-top: 0px;
    padding: 5px;
    width: 300px;
    border-radius: 15px;
    height: 40px;
    font-size: 18px;
    background: transparent;
    &:focus{
        outline: 0;
    }
`;

const Row = styled.div`
`;

const Column = styled.div`
padding: 0px 0px 15px 35px;

`;

const SaveButton = styled.button`
  height: 40px;
  width: 150px;
  margin-top: 20px;
  border-radius: 15px;
  background-color: #7b8a8b;
  color: white;
  font-size: 17px;

  :hover{
      background-color: #343a40;
    }
`;

const CancelButton = styled.button`
  height: 40px;
  width: 150px;
  margin-top: 20px;
  border-radius: 15px;
  background-color: #7b8a8b;
  color: white;
  font-size: 17px;

  :hover{
      background-color: #343a40;
    }
`;

const LoginLink = styled.a`
    color:blue;
    text-align:center; 
    cursor:pointer; 
    font-size: 20px;
`;
