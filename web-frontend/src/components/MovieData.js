import React from 'react';
import styled from '@emotion/styled';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const MovieData = ({ r_date, director, cast, stars, category, lang }) => {

    return (

        <Container>
            <div>
                <Box component="fieldset" mb={3} borderColor="transparent" style={{ marginBottom: '0px' }}>
                        <Rating name="read-only" value={stars} readOnly />
                </Box>
            </div>
            <TitleText>Release Date: <ContentText>{r_date}</ContentText> </TitleText>
            <TitleText>Director: <ContentText>{director}</ContentText> </TitleText>
            <TitleText>Starring: <ContentText>{cast}</ContentText> </TitleText>
            <TitleText>Category: <ContentText>{category}</ContentText> </TitleText>
            <TitleText>Language: <ContentText>{lang}</ContentText> </TitleText>
        </Container>
        
    )
}

export default MovieData;

const Container = styled.div`

`;

const TitleText = styled.span`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    font-size: 16px;
    color: black;
    margin-bottom: 3px;
`;

const ContentText = styled.div`
    font-size: 16px;
    color: #343a40;
`;