import React, { useEffect, useState} from 'react';
import styled from '@emotion/styled';
import MovieCard from '../components/MovieCard';

const HomePage = () => {
  const [movieHtml, setmovieHtml] = useState("");


  useEffect(() => {
      fetch('http://localhost:3001/movies/')
          .then(results => results.json())
          .then(data => {
          
              setmovieHtml (data.map((item, index) =>
                <MovieCard key={index} name={item.name} poster={item.poster} stars={item.stars}></MovieCard>
              ));
      });
  }, []);

  return (
    <Container>
      <PageTitle>Browse Movies</PageTitle>
      <MovieCards>
        {movieHtml}
      </MovieCards>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  align-items: center;
  margin-left:150px;
  margin-right:150px;
`;

const MovieCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const PageTitle = styled.h2`
  text-align: center;
  padding: 15px 0px 15px 0px;
  color: #2c3e50;
`;