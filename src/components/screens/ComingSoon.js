import React from "react";
import styled from "styled-components";

function ComingSoon() {
    return (
        <>
            <Coming>
                <Heading>Coming Soon</Heading>
            </Coming>
        </>
    );
}

export default ComingSoon;

const Coming = styled.h1`
    text-align: center;
    width: 50%;
    /* height: 50vh; */
    font-weight: 700;
    font-size: 50px;
    /* border-left: 1px solid #d9d9d9; */
`;

const Heading = styled.h1`
    /* width: 80%; */
    margin: auto;
`;
