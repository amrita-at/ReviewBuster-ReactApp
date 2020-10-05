import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from '@emotion/styled';
import { useAuth0 } from '../react-auth0-spa';
import { useHistory } from "react-router-dom";
import LoadingAnimation from '../components/LoadingAnimation';

const UserProfile = () => {
  let dummy = {
    "name": "",
    "email": '',
    "dob": "",
    "role": "",
    "gender": "",
    "street": "",
    "city": "",
    "area": "",
    "postal": "",
    "country": ""
  }

  const { loading, user } = useAuth0();
  const history = useHistory();
  const navigateTo = () => history.push('/editprofile')
  const [data, setData] = useState(dummy);
  const [uname] = useState(user);


  useEffect(() => {
    fetch('http://localhost:3005/users/' + uname.nickname)
      .then(results => results.json())
      .then(data => {
        setData(data)
      });
  }, [uname]);


  if (loading || !user) {
    return (
      <>
        <h3 style={{ textAlign: 'center', marginTop: '50px' }}>Please login to access this space!</h3>
        <LoadingAnimation></LoadingAnimation>
      </>)
  }

  return (
    <>
      <PageTitle>Account Details</PageTitle>
      <Container className="row">
        <Column className="col-xl-1 col-lg-1"></Column>
        <Column className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
          <ProfilePic src={user.picture} alt="Profile Picture" />
          <h3>{user.nickname}</h3>
          <p>Email: {user.email}</p>
          <EditButton onClick={navigateTo}>Edit Profile</EditButton>
        </Column>

        <Column className="col-xl-7 col-lg-7 col-md-12 col-sm-12">
          <div className="row">
            <Column className="col-xl-2 col-lg-2 col-md-5 col-sm-5"><LabelElement>User Name</LabelElement></Column>
            <Column className="col-xl-4 col-lg-4 col-md-7 col-sm-7"><DataElement>{user.nickname}</DataElement></Column>
            <Column className="col-xl-2 col-lg-2 col-md-5 col-sm-5"><LabelElement>Full Name</LabelElement></Column>
            <Column className="col-xl-4 col-lg-4 col-md-7 col-sm-7"><DataElement>{data.name}</DataElement></Column>
          </div>
          <div className="row">
            <Column className="col-xl-2 col-lg-2 col-md-5 col-sm-5"><LabelElement>DOB</LabelElement></Column>
            <Column className="col-xl-4 col-lg-4 col-md-7 col-sm-7"><DataElement>{data.dob}</DataElement></Column>
            <Column className="col-xl-2 col-lg-2 col-md-5 col-sm-5"><LabelElement>Gender</LabelElement></Column>
            <Column className="col-xl-4 col-lg-4 col-md-7 col-sm-7"><DataElement>{data.gender}</DataElement></Column>
           
          </div>
          <div className="row">
            <Column className="col-xl-2 col-lg-2 col-md-5 col-sm-5"><LabelElement>Role</LabelElement></Column>
            <Column className="col-xl-4 col-lg-4 col-md-7 col-sm-7"><DataElement>{data.role}</DataElement></Column>
            <Column className="col-xl-2 col-lg-2 col-md-5 col-sm-5"><LabelElement>Street</LabelElement></Column>
            <Column className="col-xl-4 col-lg-4 col-md-7 col-sm-7"><DataElement>{data.street}</DataElement></Column>
            
          </div>
          <div className="row">
            <Column className="col-xl-2 col-lg-2 col-md-5 col-sm-5"><LabelElement>City</LabelElement></Column>
            <Column className="col-xl-4 col-lg-4 col-md-7 col-sm-7"><DataElement>{data.city}</DataElement></Column>
            <Column className="col-xl-2 col-lg-2 col-md-5 col-sm-5"><LabelElement>Area</LabelElement></Column>
            <Column className="col-xl-4 col-lg-4 col-md-7 col-sm-7"><DataElement>{data.area}</DataElement></Column>
            
          </div>
          <div className="row">
            <Column className="col-xl-2 col-lg-2 col-md-5 col-sm-5"><LabelElement>Postal Code</LabelElement></Column>
            <Column className="col-xl-4 col-lg-4 col-md-7 col-sm-7"><DataElement>{data.postal}</DataElement></Column>
            <Column className="col-xl-2 col-lg-2 col-md-5 col-sm-5"><LabelElement>Country</LabelElement></Column>
            <Column className="col-xl-4 col-lg-4 col-md-7 col-sm-7"><DataElement>{data.country}</DataElement></Column>
          </div>



        </Column>
        <Column className="col-xl-1 col-lg-1"></Column>

      </Container>
    </>
  );

};

export default UserProfile;

const Container = styled.div`
margin-top: 15px;

`;


const ProfilePic = styled.img`
  // height: 250px;
  // width: 35%;
`;

const PageTitle = styled.h2`
  text-align: center;
  color: #2c3e50;
  margin-top:20px;
`;

const EditButton = styled.button`
  height: 40px;
  width: 150px;
  border-radius: 15px;
  background-color: #18bc9c;
  color: white;
  font-size: 17px;

  :hover{
      background-color: #149a80;
    }
`;



const LabelElement = styled.h3`
    font-size: 18px;
    color: #5d6d7e;

`;

const DataElement = styled.span`

    font-size: 18px;
`;

const Column = styled.div`
  padding: 15px 25px 0px 15px;
`;
