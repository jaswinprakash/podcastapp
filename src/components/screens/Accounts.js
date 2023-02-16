import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

function Accounts() {
    return (
        <>
            <Helmet>
                <title>Podcast | Accounts</title>
            </Helmet>
            <Coming>
                <Heading>Coming Soon</Heading>
            </Coming>
        </>
    );
}

export default Accounts;

const Coming = styled.div`
    text-align: center;
    font-weight: 700;
    font-size: 50px;
    border-right: 1px solid #d9d9d9;
    border-left: 1px solid #d9d9d9;
    height: 100vh;
    width: 95%;
`;

const Heading = styled.h1`
    margin: auto;
`;
