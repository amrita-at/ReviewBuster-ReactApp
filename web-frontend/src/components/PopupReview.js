import React, { useState } from 'react';
import styled from '@emotion/styled';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { useAuth0 } from '../react-auth0-spa';

const PopupPage = ({ mname }) => {
    const { loading, user, loginWithRedirect } = useAuth0();
    const [value] = React.useState(2);
    const uname = "ammu155.at"


    let dummy = {
        username: uname,
        movie: mname,
        timestamp: new Date(),
        rating: value,
        heading: "",
        reviewcontent: ""
    }

    const [inputField, setInputField] = useState(dummy)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputField)
        alert('Review Submitted!');
        fetch('http://localhost:3001/moviereviews/' + mname, {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputField)
        }).then(res => console.log(res));
    }

    const inputsHandler = (e) => {
        dummy[e.target.name] = e.target.value
        setInputField(dummy)
        console.log(dummy)
    }

    if (loading || !user) {
        return (
            <ErrorMessage>
                <h3 style={{ textAlign: 'center', marginTop: '30px' }}>Please login first to write a review!</h3>
                <LoginLink onClick={() => loginWithRedirect({})}>LogIn</LoginLink>
          </ErrorMessage>)
      }


    return (
        <Container>
            <MovieName>{mname}</MovieName>
            <Box component="fieldset" mb={3} borderColor="transparent" style={{ marginBottom: '0px' }}>
                <LabelElement>Rate the Movie</LabelElement>
                <Rating
                    name="rating"
                    value={value} onChange={inputsHandler}
                />
            </Box>
            <LabelElement>Review Heading</LabelElement>
            <HeadingBox placeholder="Short heading" name="heading" onChange={inputsHandler}></HeadingBox>
            <LabelElement >Write a Review</LabelElement>
            <ReviewBox placeholder="Write a breif review on movie" name="reviewcontent" onChange={inputsHandler}></ReviewBox>
            <SubmitButton onClick={handleSubmit}>Submit Review</SubmitButton>

        </Container>

    )

}

export default PopupPage;

const Container = styled.div`
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

const ReviewBox = styled.input`
    height: 100px;
    width: 380px;
    border-radius: 15px;

`;

const HeadingBox = styled.input`
    height: 50px;
    width: 380px;
    border-radius: 15px;
`;

const SubmitButton = styled.button`
    margin-top: 8px;
    height: 40px;
    width: 200px;
    border-radius: 15px;
    background-color: #18bc9c;
    color: white;
    font-size: 17px;

    :hover{
        background-color: #149a80;
      }
`;


const MovieName = styled.h3`
      margin-top: 0 px;
      margin-bottom: 0px;
      color:#2c3e50;
`;

const LabelElement = styled.div`
      font-size: 18px;
      margin-top:10px;
      color:#5d6d7e;
`;

const ErrorMessage = styled.div`
      text-align: center;
      height: 100px;
`;

const LoginLink = styled.a`
    color:blue;
    text-align:center; 
    cursor:pointer; 
    font-size: 20px;
`;