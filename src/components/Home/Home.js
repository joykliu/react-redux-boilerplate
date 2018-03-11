import React from 'react';
import styled from 'styled-components';
import media from 'lib/media';

const Title = styled.h1 `
  color: red;
  ${media.desktop`
    color: blue;
  `}
`

const Home = () => (
  <div>
    <Title>Home</Title>
  </div>
);

export default Home;