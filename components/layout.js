import React from 'react';
import {Container} from 'semantic-ui-react';
import Head from 'next/head';

import Header from './Header';

export default props => {
    // props.children is passed from the index.js's 
    // return (<Layout><div> , where starting from <div> is children.
    return (
        <Container>
        <Head>
            <link rel="stylesheet" 
                href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css"></link>
        </Head>
        <Header></Header>
            {props.children} 
        </Container>
    );

};