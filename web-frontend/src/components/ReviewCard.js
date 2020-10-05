import React from 'react';
import styled from '@emotion/styled';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const ReviewCard = ({ name, heading, rating, date, content }) => {
    // const [value, setValue] = React.useState('');

    return (
        <Container>
            <TopSection>
                <UserName>{name}</UserName>
                <RatingStars>
                    <Box component="fieldset" mb={3} borderColor="transparent" style={{ marginBottom: '0px' }}>
                        <Rating name="read-only" value={rating} readOnly />
                    </Box>
                </RatingStars>
                <ReviewDate>Posted on {date}</ReviewDate>
            </TopSection>
            <ReviewHeading>{heading}</ReviewHeading>
            <ReviewContent>{content}</ReviewContent>

        </Container>
    )
};

export default ReviewCard;

const Container = styled.div`
    display: flex;
    justify-items: center;
    flex-direction: column;
    width: 600px;
    border-style: ridge;
    margin-bottom: 10px;
    border-radius: 20px;
`;

const UserName = styled.h3`
    padding: 7px 20px;
    font-size: 20px;

`;

const TopSection = styled.div`
    display: flex;
    
`;

const ReviewContent = styled.p`
    font-size: 16px;
    color: #2c3e50;
    width: 96%;
    margin-left: 15px;
    margin-top: 0px;

`;

const ReviewDate = styled.div`
    padding: 7px 50px;
    float: right;
    color: #5d6d7e;
`;

const ReviewHeading = styled.h3`
    font-size: 23px;
`;

const RatingStars = styled.div`
    padding: 7px 25px;
`;