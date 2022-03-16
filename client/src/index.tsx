import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";
import {ApolloProvider} from "@apollo/client";
import client from "./apollo/client";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ApolloProvider client={client}>
                <Router>
                    <App/>
                </Router>
            </ApolloProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);