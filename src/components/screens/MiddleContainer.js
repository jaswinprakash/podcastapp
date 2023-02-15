import React from "react";
import styled from "styled-components";

// images
import BgImg from "../../assets/images/Frame3466911.png";

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
                            <PlayingImage>
                                <PlayingImg
                                    src={
                                        require("../../assets/images/Property 1=melody w.svg")
                                            .default
                                    }
                                />
                            </PlayingImage>
                            <PlayingText>playing</PlayingText>
                        </Playing>
                        <PlayLater>
                            <PlayLaterImage>
                                <PlayLaterImg
                                    src={
                                        require("../../assets/images/Property 1=music w.svg")
                                            .default
                                    }
                                />
                            </PlayLaterImage>
                            <PlayLaterTxt>play later</PlayLaterTxt>
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
                        <CategoryDetails>
                            <CategoryName>Social</CategoryName>
                            <Count>134+</Count>
                        </CategoryDetails>
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
                        <CategoryDetails>
                            <CategoryName>Travel</CategoryName>
                            <Count>243+</Count>
                        </CategoryDetails>
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
                        <CategoryDetails>
                            <CategoryName>Insight</CategoryName>
                            <Count>150+</Count>
                        </CategoryDetails>
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
                        <CategoryDetails>
                            <CategoryName>Profession</CategoryName>
                            <Count>120+</Count>
                        </CategoryDetails>
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
                        <CategoryDetails>
                            <CategoryName>Sport</CategoryName>
                            <Count>321+</Count>
                        </CategoryDetails>
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
                    <ArtistDetails>
                        <PopularPlay>How to be a productive person</PopularPlay>
                        <PopArtist>Johnson alert</PopArtist>
                    </ArtistDetails>
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
    padding: 30px 20px ;
`;
const Heading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

const MainTitle = styled.h1`
    font-size: 60px;
    font-weight: 700;
`;
const SearchContainer = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #a6a5a5;
    border-radius: 50px;
    padding: 5px 10px;
    width: 300px;
`;
const SearchText = styled.input``;
const SearchLogo = styled.div`
    width: 17px;
`;
const SearchImg = styled.img`
    display: block;
    width: 100%;
`;

const Spotlight = styled.div`
    display: flex;
    justify-content: space-between;
    background: url(${BgImg}) no-repeat;
    background-size: cover;
    padding: 20px;
`;

const LeftContent = styled.div``;
const MainText = styled.h2`
    font-size: 40px;
    font-weight: 700;
    color: #fff;
    width: 80%;
    margin-bottom: 100px;
`;

const BottomElement = styled.div`
    display: flex;
    justify-content: space-between;
    width: 40%;
`;
const Playing = styled.div`
    background: rgba(217, 217, 217, 0.5);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;
    border-radius: 50px;
    width: 90px;
`;
const PlayingText = styled.h4`
    font-size: 14px;
    font-weight: 500;
    color: #fff;
`;
const PlayingImage = styled.div`
    width: 15px;
`;
const PlayingImg = styled.img`
    display: block;
    width: 100%;
`;

const PlayLater = styled.div`
    background: rgba(217, 217, 217, 0.5);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    border-radius: 50px;
    width: 100px;
`;
const PlayLaterTxt = styled.h4`
    font-size: 14px;
    font-weight: 500;
    color: #fff;
`;
const PlayLaterImage = styled.div`
    width: 15px;
`;
const PlayLaterImg = styled.img`
    display: block;
    width: 100%;
`;

const RightContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 50px;
    background: rgba(217, 217, 217, 0.5);
    width: 230px;
    height: 60px;
    padding: 0 20px;
`;
const SpotlightProfileImage = styled.div`
    width: 30px;
    margin-right: 10px;
`;
const SpotProfImg = styled.img`
    width: 100%;
    display: block;
    border-radius: 50%;
`;
const SpotContents = styled.div``;
const SpotProfName = styled.h4`
    font-size: 13px;
    color: #fff;
    font-weight: 500;
`;
const SpotFollowers = styled.h5`
    font-size: 12px;
    color: #d9d9d9;
`;
const SpotFollowBtn = styled.button`
    background: #eaeaea;
    border-radius: 50px;
    padding: 4px 10px;
    color: #9e9696;
    font-weight: 500;
`;

const CategoryContainer = styled.div``;

const CategoryTop = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #9e9696;
    align-items: flex-end;
`;
const CategoryText = styled.h2`
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 20px;
`;
const SeeAllTxt = styled.h3`
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 10px;
`;

const CategoryBottom = styled.ul`
    display: flex;
    justify-content: space-between;
    margin: 20px 0 30px;
`;
const CategorySelection = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const CategoryImage = styled.div`
    width: 45px;
    border: 1px solid #d9d9d9;
    border-radius: 50%;
    padding: 5px;
    margin-right: 10px;
`;
const CategoryImg = styled.img`
    display: block;
    width: 100%;
`;
const CategoryDetails = styled.div``;
const CategoryName = styled.h4`
    font-size: 14px;
    font-weight: 500;
`;
const Count = styled.h4`
    font-size: 12px;
    color: #a6a5a5;
`;

const PopularTop = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #9e9696;
    align-items: flex-end;
    margin-bottom: 20px;
`;
const PopularTxt = styled.h2`
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 20px;
`;
const PopularBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ArtistDetails = styled.div``;
const PopProfileArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 27%;
`;
const SerialNum = styled.h3`
    font-size: 13px;
`;
const PopularProfile = styled.div`
    width: 40px;
`;
const PopProfImg = styled.img`
    display: block;
    width: 100%;
    border-radius: 50%;
`;
const PopularPlay = styled.h4`
    font-size: 14px;
    font-weight: 700;
`;
const PopArtist = styled.h5`
    font-size: 12px;
    color: #a6a5a5;
`;

const PopCountArea = styled.div`
    display: flex;
    width: 30%;
    justify-content: space-between;
`;

const CountAreaLeft = styled.div`
    display: flex;
    align-items: center;
`;
const PopSound = styled.div`
    width: 30px;
    margin-right: 10px;
`;
const PopSoundImg = styled.img`
    display: block;
    width: 100%;
`;
const PopFollow = styled.h3`
    font-size: 15px;
    color: #9e9696;
`;

const CountAreaRight = styled.div`
    display: flex;
    align-items: center;
`;
const PopTimer = styled.div`
    width: 30px;
    margin-right: 10px;
`;
const PopTimerImg = styled.img`
    display: block;
    width: 100%;
`;
const Duration = styled.h3`
    font-size: 15px;
    color: #9e9696;
`;
