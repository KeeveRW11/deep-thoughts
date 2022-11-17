import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

//URI stands for "Uniform Resource Identifier."
const httpLink = createHttpLink({
  uri:'/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// We wrap the jsx into <ApolloProvider> to have access to server using client
function App() {
  return (
    <ApolloProvider client={client}>
    <div className='flex-column justify-flex-start min-100-vh'>
      <Header />
      <div className='container'>
        <Home />
      </div>
      <Footer />
    </div>
    </ApolloProvider>
  );
}

export default App;
