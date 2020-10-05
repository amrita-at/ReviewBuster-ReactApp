import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieData from '../components/MovieData';
import PopupPage from '../components/PopupReview';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ReviewCard from '../components/ReviewCard';
import { useLocation } from "react-router-dom";


const MovieDetails = () => {

    const [reviewHtml, setreviewHtml] = useState("");
    const [movieHtml, setMovieHtml] = useState("");
    const mname = useLocation().state.mname


    useEffect(() => {
        fetch('http://localhost:3001/moviereviews/' + mname)
            .then(results => results.json())
            .then(data => {
            
                setreviewHtml (data.map((item, index) =>
                    <ReviewCard key={index} name={item.username} rating={item.rating} heading={item.heading} date={item.timestamp} content={item.reviewcontent} ></ReviewCard >
                ));
        });
    }, [mname]);

    
    useEffect(() => {
        fetch('http://localhost:3001/movies/'+ mname)
            .then(results => results.json())
            .then(data => {
                setMovieHtml (data.map((ele, index) =>
                    <MovieData key={index} r_date={ele.r_date} stars={ele.stars} director={ele.director} cast={ele.cast} category={ele.category} lang={ele.lang}></MovieData >
                ));
        });
    }, [mname]);

    
    return (
        <>
            <MovieContainer className="row">
                <div className="col-xl-1 col-lg-1"></div>
                <div className="col-xl-7 col-lg-7 col-md-12">
                    <Trailer src="./m_trailer.mov" controls></Trailer>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-12">
                    <TitleSection>
                        <MovieName>{mname}</MovieName>
                        {movieHtml}

                        <MovieButtons>
                            <Popup modal trigger={<RateButton>Rate the Movie</RateButton>} >
                                <PopupPage
                                    mname={mname}></PopupPage>
                            </Popup>
                        </MovieButtons>
                    </TitleSection>
                </div>
                <div className="col-xl-1 col-lg-1"></div>
            </MovieContainer>

            <MovieContainer className="row">
                <div className="col-xl-1 col-lg-1"></div>
                <div className="col-xl-10 col-lg-10 col-md-12">
                    <TitleName>Reviews and Ratings</TitleName>
                    <ReviewContainer>
                        {reviewHtml}
                    </ReviewContainer>
                </div>
                <div className="col-xl-1 col-lg-1"></div>
            </MovieContainer>
        </>
    )
};

export default MovieDetails;

const MovieContainer = styled.div`
    margin-top: 20px;
`;

const MovieName = styled.h2`
    margin-bottom: 15px;
    color: #2c3e50;
`;

const TitleName = styled.h2`
    margin-bottom: 15px;
    color: #2c3e50;
    text-align: center;
`;

const Trailer = styled.video`
    postion: relative;
    max-width=100%;
    height: 343px;
`;


const RateButton = styled.button`

    height: 40px;
    width: 150px;
    margin-top: 14px;
    margin-right: 10px;
    border-radius: 15px;
    background-color: #7b8a8b;
    color: white;
    font-size: 17px;

    :hover{
        background-color: #343a40;
      }
`;

const TitleSection = styled.div`

`;


const ReviewContainer = styled.div`
    text-align: center;
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const MovieButtons = styled.div`
    display: flex;
`;
