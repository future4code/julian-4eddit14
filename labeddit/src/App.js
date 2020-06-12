import React from 'react';
import Router from './components/Router';
import styled from 'styled-components'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #D8D8D8;
  min-height: 100vh;
`

function App() {
  return (
    <AppContainer>
      <Router />
    </AppContainer>
  );
}

export default App;
