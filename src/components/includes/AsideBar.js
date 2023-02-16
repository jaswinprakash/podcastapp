import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function AsideBar() {
    return (
        <LeftContainer>
            <SidBarContents>
                <NavLinks
                    to={"/"}
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    <SideBarImg
                        src={
                            require("../../assets/images/Property 1=home.svg")
                                .default
                        }
                    />
                </NavLinks>
            </SidBarContents>
            <SidBarContents>
                <NavLinks
                    to={"music/"}
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    <SideBarImg
                        src={
                            require("../../assets/images/Property 1=music.svg")
                                .default
                        }
                    />
                </NavLinks>
            </SidBarContents>
            <SidBarContents>
                <NavLinks
                    to={"account/"}
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    <SideBarImg
                        src={
                            require("../../assets/images/Property 1=account.svg")
                                .default
                        }
                    />
                </NavLinks>
            </SidBarContents>
            <SidBarContents>
                <NavLinks
                    to={"file/"}
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    <SideBarImg
                        src={
                            require("../../assets/images/Property 1=file.svg")
                                .default
                        }
                    />
                </NavLinks>
            </SidBarContents>
            <SidBarContents>
                <NavLinks
                    to={"settings/"}
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    <SideBarImg
                        src={
                            require("../../assets/images/Property 1=settings.svg")
                                .default
                        }
                    />
                </NavLinks>
            </SidBarContents>
        </LeftContainer>
    );
}

export default AsideBar;

const LeftContainer = styled.ul`
    width: 7%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid #d9d9d9;
    @media all and (max-width: 980px) {
        width: 9%;
        height: fit-content;
        border-right: none;
    }
`;

const SidBarContents = styled.li`
    width: 35px;
    margin-bottom: 30px;
    &&:first-child {
        margin-top: 40px;
    }
`;
const SideBarImg = styled.img`
    display: block;
    width: 100%;
`;
const NavLinks = styled(NavLink)``;
