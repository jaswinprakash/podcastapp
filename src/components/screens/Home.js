import React from "react";
import styled from "styled-components";
import RightContainer from "../includes/RightContainer";
import MiddleContainer from "./MiddleContainer";

function Home() {
    return (
        <MainContainer>
            <FlexContainer>
                <LeftSideContainer>
                    <MiddleContainer />
                </LeftSideContainer>
                <RightSideContainer>
                    <RightContainer />
                </RightSideContainer>
            </FlexContainer>
        </MainContainer>
    );
}

export default Home;

const MainContainer = styled.div``;
const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 980px) {
        flex-wrap: wrap;
        border-left: 1px solid #d9d9d9;
        border-right: 1px solid #d9d9d9;
        width: 95%;
    }
`;
const LeftSideContainer = styled.div`
    width: 79%;
    @media all and (max-width: 1440px) {
        width: 77%;
    }
    @media all and (max-width: 1380px) {
        width: 75%;
    }
    @media all and (max-width: 1280px) {
        width: 73%;
    }
    @media all and (max-width: 1080px) {
        width: 71%;
    }
    @media all and (max-width: 980px) {
        width: 100%;
    }
`;
const RightSideContainer = styled.div`
    width: 21%;
    @media all and (max-width: 1440px) {
        width: 23%;
    }
    @media all and (max-width: 1380px) {
        width: 25%;
    }
    @media all and (max-width: 1280px) {
        width: 27%;
    }
    @media all and (max-width: 1080px) {
        width: 29%;
    }
    @media all and (max-width: 980px) {
        width: 100%;
    }
`;
