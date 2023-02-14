import React from "react";
import styled from "styled-components";

function MainPage() {
    return (
        <MainContainer>
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
            <MiddleContainer>
                <Heading>
                    <MainTitle>Discover</MainTitle>
                    <SearchContainer>
                        <SearchText type="search" placeholder="Search..." />
                        <SearchLogo>
                            <SearchImg
                                src={
                                    require("../../assets/images/Property 1=search.svg")
                                        .default
                                }
                            />
                        </SearchLogo>
                    </SearchContainer>
                </Heading>
                <Spotlight>
                    <LeftContent>
                        <MainText>Listen to the people's voice</MainText>
                        <Playing>
                            <PlayingText>playing</PlayingText>
                            <PlayingImage>
                                <PlayingImg
                                    src={
                                        require("../../assets/images/Property 1=melody w.svg")
                                            .default
                                    }
                                />
                            </PlayingImage>
                        </Playing>
                        <PlayLater>
                            <PlayLaterTxt>play later</PlayLaterTxt>
                            <PlayLaterImage>
                                <PlayLaterImg
                                    src={
                                        require("../../assets/images/Property 1=music w.svg")
                                            .default
                                    }
                                />
                            </PlayLaterImage>
                        </PlayLater>
                    </LeftContent>
                </Spotlight>
                <CategoryContainer>
                    <CategoryTop>
                        <CategoryText></CategoryText>
                        <SeeAllTxt>See All</SeeAllTxt>
                    </CategoryTop>
                    <CategoryBottom>
                        <CategorySelection>
                            <CategoryImage>
                                <CategoryImg />
                            </CategoryImage>
                            <CategoryName></CategoryName>
                            <Count></Count>
                        </CategorySelection>
                        <CategorySelection>
                            <CategoryImage>
                                <CategoryImg />
                            </CategoryImage>
                            <CategoryName></CategoryName>
                            <Count></Count>
                        </CategorySelection>
                        <CategorySelection>
                            <CategoryImage>
                                <CategoryImg />
                            </CategoryImage>
                            <CategoryName></CategoryName>
                            <Count></Count>
                        </CategorySelection>
                        <CategorySelection>
                            <CategoryImage>
                                <CategoryImg />
                            </CategoryImage>
                            <CategoryName></CategoryName>
                            <Count></Count>
                        </CategorySelection>
                        <CategorySelection>
                            <CategoryImage>
                                <CategoryImg />
                            </CategoryImage>
                            <CategoryName></CategoryName>
                            <Count></Count>
                        </CategorySelection>
                    </CategoryBottom>
                </CategoryContainer>
            </MiddleContainer>
            <RightContainer></RightContainer>
        </MainContainer>
    );
}

export default MainPage;

const MainContainer = styled.div``;

const RightContainer = styled.div``;

const LeftContainer = styled.ul``;

const SidBarContents = styled.li``;
const SideBarImg = styled.img``;

const MiddleContainer = styled.div``;

const Heading = styled.div``;

const MainTitle = styled.h1``;
const SearchContainer = styled.form``;
const SearchText = styled.input``;
const SearchLogo = styled.div``;
const SearchImg = styled.img``;

const Spotlight = styled.div``;

const LeftContent = styled.div``;
const MainText = styled.h2``;
const Playing = styled.div``;
const PlayingText = styled.h4``;
const PlayingImage = styled.div``;
const PlayingImg = styled.img``;

const PlayLater = styled.div``;
const PlayLaterTxt = styled.h4``;
const PlayLaterImage = styled.div``;
const PlayLaterImg = styled.img``;

const CategoryContainer = styled.div``;

const CategoryTop = styled.div``;
const CategoryText = styled.h2``;
const SeeAllTxt = styled.h3``;

const CategoryBottom = styled.ul``;
const CategorySelection = styled.li``;
const CategoryImage = styled.div``;
const CategoryImg = styled.img``;
const CategoryName = styled.h4;
const Count = styled.h4``;
