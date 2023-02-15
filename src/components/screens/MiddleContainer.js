import React from "react";
import styled from "styled-components";

function MiddleContainer() {
    return (
        <MiddleSection>
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
                    <BottomElement>
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
                    </BottomElement>
                </LeftContent>
                <RightContent>
                    <SpotlightProfileImage>
                        <SpotProfImg
                            src={require("../../assets/images/Frame 3466917.png")}
                        />
                    </SpotlightProfileImage>
                    <SpotContents>
                        <SpotProfName>Jason Albert</SpotProfName>
                        <SpotFollowers>200,456 followers</SpotFollowers>
                    </SpotContents>
                    <SpotFollowBtn>Follow</SpotFollowBtn>
                </RightContent>
            </Spotlight>
            <CategoryContainer>
                <CategoryTop>
                    <CategoryText>Category</CategoryText>
                    <SeeAllTxt>See All</SeeAllTxt>
                </CategoryTop>
                <CategoryBottom>
                    <CategorySelection>
                        <CategoryImage>
                            <CategoryImg
                                src={
                                    require("../../assets/images/Property 1=profile b.svg")
                                        .default
                                }
                            />
                        </CategoryImage>
                        <CategoryName>Social</CategoryName>
                        <Count>134+</Count>
                    </CategorySelection>
                    <CategorySelection>
                        <CategoryImage>
                            <CategoryImg
                                src={
                                    require("../../assets/images/Property 1=map b.svg")
                                        .default
                                }
                            />
                        </CategoryImage>
                        <CategoryName>Travel</CategoryName>
                        <Count>243+</Count>
                    </CategorySelection>
                    <CategorySelection>
                        <CategoryImage>
                            <CategoryImg
                                src={
                                    require("../../assets/images/Property 1=qoute b.svg")
                                        .default
                                }
                            />
                        </CategoryImage>
                        <CategoryName>Insight</CategoryName>
                        <Count>150+</Count>
                    </CategorySelection>
                    <CategorySelection>
                        <CategoryImage>
                            <CategoryImg
                                src={
                                    require("../../assets/images/Property 1=note b.svg")
                                        .default
                                }
                            />
                        </CategoryImage>
                        <CategoryName>Profession</CategoryName>
                        <Count>120+</Count>
                    </CategorySelection>
                    <CategorySelection>
                        <CategoryImage>
                            <CategoryImg
                                src={
                                    require("../../assets/images/Property 1=reward b.svg")
                                        .default
                                }
                            />
                        </CategoryImage>
                        <CategoryName>Sport</CategoryName>
                        <Count>321+</Count>
                    </CategorySelection>
                </CategoryBottom>
            </CategoryContainer>
            <PopularTop>
                <PopularTxt>Most popular</PopularTxt>
                <SeeAllTxt>See All</SeeAllTxt>
            </PopularTop>
            <PopularBottom>
                <PopProfileArea>
                    <SerialNum>01</SerialNum>
                    <PopularProfile>
                        <PopProfImg
                            src={require("../../assets/images/Frame 3466917.png")}
                        />
                    </PopularProfile>
                    <PopularPlay>How to be a productive person</PopularPlay>
                    <PopArtist>Johnson alert</PopArtist>
                </PopProfileArea>
                <PopCountArea>
                    <CountAreaLeft>
                        <PopSound>
                            <PopSoundImg
                                src={
                                    require("../../assets/images/Property 1=sound.svg")
                                        .default
                                }
                            />
                        </PopSound>
                        <PopFollow>100,045</PopFollow>
                    </CountAreaLeft>
                    <CountAreaRight>
                        <PopTimer>
                            <PopTimerImg
                                src={
                                    require("../../assets/images/Property 1=alarm.svg")
                                        .default
                                }
                            />
                        </PopTimer>
                        <Duration>04:30</Duration>
                    </CountAreaRight>
                </PopCountArea>
            </PopularBottom>
        </MiddleSection>
    );
}

export default MiddleContainer;

const MiddleSection = styled.div`
    width: 70%;
`;
const Heading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MainTitle = styled.h1``;
const SearchContainer = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const SearchText = styled.input``;
const SearchLogo = styled.div`
    width: 20px;
`;
const SearchImg = styled.img`
    display: block;
    width: 100%;
`;

const Spotlight = styled.div`
    display: flex;
    justify-content: space-between;
    background: url();
    background-size: contain;
`;

const LeftContent = styled.div``;
const MainText = styled.h2``;

const BottomElement = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
`;
const Playing = styled.div``;
const PlayingText = styled.h4``;
const PlayingImage = styled.div`
    width: 10px;
`;
const PlayingImg = styled.img`
    display: block;
    width: 100%;
`;

const PlayLater = styled.div``;
const PlayLaterTxt = styled.h4``;
const PlayLaterImage = styled.div`
    width: 10px;
`;
const PlayLaterImg = styled.img`
    display: block;
    width: 100%;
`;

const RightContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const SpotlightProfileImage = styled.div`
    width: 50px;
`;
const SpotProfImg = styled.img`
    width: 100%;
    display: block;
`;
const SpotContents = styled.div``;
const SpotProfName = styled.h4``;
const SpotFollowers = styled.h5``;
const SpotFollowBtn = styled.button``;

const CategoryContainer = styled.div``;

const CategoryTop = styled.div``;
const CategoryText = styled.h2``;
const SeeAllTxt = styled.h3``;

const CategoryBottom = styled.ul``;
const CategorySelection = styled.li``;
const CategoryImage = styled.div`
    width: 50px;
`;
const CategoryImg = styled.img`
    display: block;
    width: 100%;
`;
const CategoryName = styled.h4``;
const Count = styled.h4``;

const PopularTop = styled.div``;
const PopularTxt = styled.h2``;
const PopularBottom = styled.div``;

const PopProfileArea = styled.div``;
const SerialNum = styled.h3``;
const PopularProfile = styled.div`
    width: 50px;
`;
const PopProfImg = styled.img`
    display: block;
    width: 100%;
`;
const PopularPlay = styled.h4``;
const PopArtist = styled.h5``;

const PopCountArea = styled.div``;

const CountAreaLeft = styled.div``;
const PopSound = styled.div``;
const PopSoundImg = styled.img``;
const PopFollow = styled.h3``;

const CountAreaRight = styled.div``;
const PopTimer = styled.div``;
const PopTimerImg = styled.img``;
const Duration = styled.h3``;
