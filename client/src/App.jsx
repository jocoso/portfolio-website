import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import "./App.css"

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

function App() {
    return(
        <ApolloProvider client={client}>
            <div className='min-h-screen min-w-screen p-0 m-0 w-full bg-background' >
                <Header />
                <div className='w-[80%] mx-auto h-full'>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </ApolloProvider>
    );
}

export default App;