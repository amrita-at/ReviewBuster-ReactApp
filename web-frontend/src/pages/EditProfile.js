import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState} from 'react';
import styled from '@emotion/styled';
import { useAuth0 } from '../react-auth0-spa';
import { useHistory } from "react-router-dom";
import LoadingAnimation from '../components/LoadingAnimation';

const EditProfile = () => {
    const { loading, user } = useAuth0();
    let dummy = {
        "username": user.nickname,
        "name": "",
        "email": "",
        "dob": "",
        "role": "",
        "gender": "",
        "street": "",
        "city": "",
        "area": "",
        "postal": "",
        "country": ""
    }
    const [inputField, setInputField] = useState(dummy)
    
    const history = useHistory();
    const navigateTo = () => history.push('/profile')

    if (loading || !user) {
        return (
          <>
            <h3 style={{ textAlign: 'center', marginTop: '50px' }}>Please login to access this space!</h3>
            <LoadingAnimation></LoadingAnimation>
          </>)
      }

    const inputsHandler = (e) => {
        dummy[e.target.name] = e.target.value 
        setInputField(dummy)
        console.log(dummy)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Profile saved successfully!');
        //console.log(inputField)
        fetch('http://localhost:3005/users/' + user.nickname, {
            method: 'post',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body:  JSON.stringify(inputField)
          }).then(res => console.log(res));
    }

    return (
        <Container action="#" onsubmit="return false">
            <PageTitle>@{user.nickname}: Edit Profile</PageTitle>
            <Row className="row">
                <Column className="col-xl-1"></Column>
                <Column className="col-xl-2 col-lg-2 col-md-5 col-sm-12" >
                    <LabelElement>Full Name</LabelElement>
                </Column>
                <Column className="col-xl-3 col-lg-4 col-md-7 col-sm-12">
                    <InputElement name='name' onChange={inputsHandler}></InputElement>
                </Column>
                <Column className="col-xl-2 col-lg-2 col-md-5 col-sm-12">
                    <LabelElement>DOB</LabelElement>
                </Column>
                <Column className="col-xl-3 col-lg-4 col-md-7 col-sm-12">
                    <InputElement name='dob' onChange={inputsHandler}></InputElement>
                </Column>
                <Column className="col-xl-1"></Column>
            </Row>
            <Row className="row">
                <Column className="col-xl-1"></Column>
                <Column className="col-xl-2 col-lg-2 col-md-5 col-sm-12">
                    <LabelElement>Gender</LabelElement>
                </Column>
                <Column className="col-xl-3 col-lg-4 col-md-7 col-sm-12">
                    <DropDown name="gender" id="Gender" onChange={inputsHandler}>
                        <option value="Not specified" >Not Specified</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                    </DropDown>
                </Column>
                <Column className="col-xl-2 col-lg-2 col-md-5 col-sm-12">
                    <LabelElement>Role</LabelElement>
                </Column>
                <Column className="col-xl-3 col-lg-4 col-md-7 col-sm-12">
                    <DataElement>Role auto defined</DataElement>
                </Column>
                <Column className="col-xl-1"></Column>
            </Row>
            <Row className="row">
                <Column className="col-xl-1"></Column>
                <Column className="col-xl-2 col-lg-2 col-md-5 col-sm-12">
                    <LabelElement>Street</LabelElement>
                </Column>
                <Column className="col-xl-3 col-lg-4 col-md-7 col-sm-12">
                <InputElement name='street' onChange={inputsHandler}></InputElement>
                </Column>
                <Column className="col-xl-2 col-lg-2 col-md-5 col-sm-12">
                    <LabelElement>City</LabelElement>
                </Column>
                <Column className="col-xl-3 col-lg-4 col-md-7 col-sm-12">
                    <InputElement name='city' onChange={inputsHandler}></InputElement>
                </Column>
                <Column className="col-xl-1"></Column>
            </Row>
            <Row className="row">
                <Column className="col-xl-1"></Column>
                <Column className="col-xl-2 col-lg-2 col-md-5 col-sm-12">
                    <LabelElement>Postal Code</LabelElement>
                </Column>
                <Column className="col-xl-3 col-lg-4 col-md-7 col-sm-12">
                    <InputElement name='postal' onChange={inputsHandler}></InputElement>
                </Column>
                <Column className="col-xl-2 col-lg-2 col-md-5 col-sm-12">
                    <LabelElement>Country</LabelElement>
                </Column>
                <Column className="col-xl-3 col-lg-4 col-md-7 col-sm-12">
                    <InputElement name='country' onChange={inputsHandler}></InputElement>
                </Column>
                <Column className="col-xl-1"></Column>
            </Row>
            <Row className="row">
                <Column className="col-xl-4 col-lg-4 col-md-3"></Column>
                <Column className="col-xl-2 col-lg-2 col-md-3 col-sm-6">
                    <SaveButton onClick={handleSubmit}>Save Profile</SaveButton>
                </Column>
                <Column className="col-xl-2 col-lg-2 col-md-3 col-sm-6">
                    <CancelButton onClick={navigateTo} >Cancel</CancelButton>
                </Column>
                <Column className="col-xl-4 col-lg-4 col-md-3"></Column>
            </Row>
        </Container>

    );
}

export default EditProfile;

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
    padding: 15px 25px 0px 15px;
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

const DataElement = styled.span`

    font-size: 18px;
`;