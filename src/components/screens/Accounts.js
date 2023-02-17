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
    border-right: 1px solid #d9d9d9;
    border-left: 1px solid #d9d9d9;
    height: 100vh;
    width: 95%;
    display: flex;
    align-items: center;
`;

const Heading = styled.h1`
    font-size: 80px;
    text-align: center;
    font-weight: 700;
    margin: 100px auto;

    @media all and (max-width: 1280px) {
        font-size: 75px;
    }
    @media all and (max-width: 1080px) {
        font-size: 70px;
    }
    @media all and (max-width: 980px) {
        font-size: 65px;
    }
    @media all and (max-width: 768px) {
        font-size: 60px;
    }
    @media all and (max-width: 640px) {
        font-size: 55px;
    }
    @media all and (max-width: 480px) {
        font-size: 50px;
    }
    @media all and (max-width: 360px) {
        font-size: 45px;
    }
`;
