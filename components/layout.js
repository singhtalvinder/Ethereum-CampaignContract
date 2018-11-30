import React from 'react';
import {Container} from 'semantic-ui-react';

import Header from './Header';

export default props => {
    // props.children is passed from the index.js's 
    // return (<Layout><div> , where starting from <div> is children.
    return (
        <Container>
            <Header></Header>
            {props.children} 
        </Container>
    );

};