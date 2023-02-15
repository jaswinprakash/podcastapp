import React from "react";
import styled from "styled-components";

function AsideBar() {
    return (
        <LeftContainer>
            <SidBarContents>
                <SideBarImg
                    src={
                        require("../../assets/images/Property 1=home.svg")
                            .default
                    }
                />
            </SidBarContents>
            <SidBarContents>
                <SideBarImg
                    src={
                        require("../../assets/images/Property 1=music.svg")
                            .default
                    }
                />
            </SidBarContents>
            <SidBarContents>
                <SideBarImg
                    src={
                        require("../../assets/images/Property 1=account.svg")
                            .default
                    }
                />
            </SidBarContents>
            <SidBarContents>
                <SideBarImg
                    src={
                        require("../../assets/images/Property 1=file.svg")
                            .default
                    }
                />
            </SidBarContents>
            <SidBarContents>
                <SideBarImg
                    src={
                        require("../../assets/images/Property 1=settings.svg")
                            .default
                    }
                />
            </SidBarContents>
        </LeftContainer>
    );
}

export default AsideBar;

const LeftContainer = styled.ul`
    width: 7%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid #D9D9D9;

`;

const SidBarContents = styled.li`
    width: 35px;
    margin-bottom: 30px;
    &&:first-child{
        margin-top: 40px;
    }
`;
const SideBarImg = styled.img`
    display: block;
    width: 100%;
`;
