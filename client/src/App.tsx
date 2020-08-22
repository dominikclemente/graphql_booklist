import React from "react";
import {ApolloClient, InMemoryCache} from '@apollo/client';
import {ApolloProvider} from '@apollo/client';

import Booklist from "./components/Booklist";
import AddBook from "./components/AddBook";

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
})

function App() {
    return <ApolloProvider client={client}>
        <div id="main" className="p-0 box-border bg-gray-200 h-screen text-center w-8/12 h-screen">
            <h1 className={"text-4xl font-bold"}>Dominik's Reading List</h1>
            <Booklist/>
            <AddBook/>
        </div>
    </ApolloProvider>;
}

export default App;
