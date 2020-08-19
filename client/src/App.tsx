import React from "react";
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

import Booklist from "./components/Booklist";

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
})

function App() {

    return <ApolloProvider client={client}>
        <div id="main" className="p-10">
            <h1 className={"text-4xl font-bold"}>Dominik's Reading List</h1>
            <Booklist/>
        </div>
    </ApolloProvider>;
}

export default App;
