import React from 'react';
import styled from '@emotion/styled';
import {PacmanLoader } from 'react-spinners';

const LoadingAnimation = () => { 

    return (
        <Container>
            <PacmanLoader color="#18bc9c" size="40px"/>
        </Container>
    );

}

export default LoadingAnimation;

const Container = styled.div`
    display: flex;
    flex: 1;
    margin-top:180px;
    justify-content: center;
    align-items: center;
`;