import React from 'react';
import { Container, Box } from "@material-ui/core"
import {Basket} from './components/Basket';
import {Product} from './components/Product';

function App() {
  return (
    <div className="App">
      <Container maxWidth='md'>
      <Box mt={5} mb={5}>
        <Product />
      </Box>
      <Box mt={5} mb={5}>
       <Basket />
       </Box>
      </Container>
    </div>
  );
}

export default App;
