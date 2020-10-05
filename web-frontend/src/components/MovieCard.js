import React from 'react';
import { Link} from "react-router-dom";
import styled from '@emotion/styled';
import PopupPage from './PopupReview';
import Popup from 'reactjs-popup';
import './MovieCard.css'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const MovieCard = ({ name, poster, stars }) => { 


    if (!poster) { 
        poster='./images/poster.jpg'
    }

    return (
        <Card>
            <Poster src={poster} alt="Movie poster"></Poster>
            <MovieName>{name}</MovieName>
            <div>
                    <Box component="fieldset" mb={3} borderColor="transparent" style={{ marginBottom: '0px' }}>
                        <Rating name="read-only" value={stars} readOnly />
                    </Box>
                </div>
            <CardButtons>
                <MovieButton>
                    <Link style={{color:'white'}}
                    to={{
                        pathname: '/moviedetails',
                        state: {
                            mname:name
                        }
                    }}> Movie Details</Link></MovieButton>
                <Popup modal trigger={<MovieButton>Rate the Movie</MovieButton>} position="center">
                    <PopupPage mname={name}></PopupPage>
                </Popup>
            </CardButtons>             
        </Card>
    )
}

export default MovieCard;


const Card = styled.div`
margin-bottom:20px;
height: 400px;
width: 300px;
background: #e0e5e7;
align-items: center;
border-radius: 15px;
margin-left: 40px;
display: grid;
justify-items: center;

`;

const Poster = styled.img`
    margin-top: 10px;
    height: 260px;
    width: 205px;

`;

const MovieButton = styled.button`
    height: 40px;
    width: 150px;
    border-radius: 15px;
    background-color: #2c3e50;
    color: white;

    :hover{
        background-color: #1e2b37;
      }
`;

const MovieName = styled.h3`
    margin-top: 0 px;
    margin-bottom: 0px;
    text-align: center;
    font-size: 25px;
`;

const CardButtons = styled.div`
      
`;
