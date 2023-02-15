import React from "react";
import styled from "styled-components";
import MusicBg from "../../assets/images/Frame3466913.png";

function RightContainer() {
    return (
        <RightSection>
            <RightTop>
                <FriendList>
                    <FriendListTxt>Friends</FriendListTxt>
                    <OptionsMenu>
                        <OptionsImg
                            src={
                                require("../../assets/images/Property 1=menu b.svg")
                                    .default
                            }
                        />
                    </OptionsMenu>
                </FriendList>
                <FriendProfile>
                    <FriendProfList>
                        <FriendProfImage>
                            <FriendProfImg
                                src={require("../../assets/images/Frame 3466914.png")}
                            />
                        </FriendProfImage>
                        <FriendProfName>Ilham</FriendProfName>
                    </FriendProfList>
                    <FriendProfList>
                        <FriendProfImage>
                            <FriendProfImg
                                src={require("../../assets/images/Frame 3466915.png")}
                            />
                        </FriendProfImage>
                        <FriendProfName>Ujil</FriendProfName>
                    </FriendProfList>
                    <FriendProfList>
                        <FriendProfImage>
                            <FriendProfImg
                                src={require("../../assets/images/Frame 3466916.png")}
                            />
                        </FriendProfImage>
                        <FriendProfName>Anas</FriendProfName>
                    </FriendProfList>
                    <FriendProfList>
                        <FriendProfImage>
                            <FriendProfImg
                                src={require("../../assets/images/Frame 3466917.png")}
                            />
                        </FriendProfImage>
                        <FriendProfName>Ardi</FriendProfName>
                    </FriendProfList>
                    <FriendProfList>
                        <FriendProfImage>
                            <FriendProfImg
                                src={require("../../assets/images/Frame 3466914.png")}
                            />
                        </FriendProfImage>
                        <FriendProfName>Yanto</FriendProfName>
                    </FriendProfList>
                </FriendProfile>
            </RightTop>
            <RightMiddle>
                <PodcastHeading>Top podcaster</PodcastHeading>
                <PodcastList>
                    <ProfileDetails>
                        <LeftDiv>
                            <LeftImage>
                                <LeftImg
                                    src={require("../../assets/images/Frame 3466914.png")}
                                />
                            </LeftImage>
                            <ProfDetails>
                                <ProfName>Jason Albert</ProfName>
                                <FollowCount>200,456 followers</FollowCount>
                            </ProfDetails>
                        </LeftDiv>
                        <FollowBtn>Follow</FollowBtn>
                    </ProfileDetails>
                    <ProfileDetails>
                        <LeftDiv>
                            <LeftImage>
                                <LeftImg
                                    src={require("../../assets/images/Frame 3466915.png")}
                                />
                            </LeftImage>
                            <ProfDetails>
                                <ProfName>Gabriel Adim</ProfName>
                                <FollowCount>200,456 followers</FollowCount>
                            </ProfDetails>
                        </LeftDiv>
                        <FollowBtn>Follow</FollowBtn>
                    </ProfileDetails>
                    <ProfileDetails>
                        <LeftDiv>
                            <LeftImage>
                                <LeftImg
                                    src={require("../../assets/images/Frame 3466916.png")}
                                />
                            </LeftImage>
                            <ProfDetails>
                                <ProfName>Lordun Sardun</ProfName>
                                <FollowCount>200,456 followers</FollowCount>
                            </ProfDetails>
                        </LeftDiv>
                        <FollowBtn>Follow</FollowBtn>
                    </ProfileDetails>
                    <ProfileDetails>
                        <LeftDiv>
                            <LeftImage>
                                <LeftImg
                                    src={require("../../assets/images/Frame 3466917.png")}
                                />
                            </LeftImage>
                            <ProfDetails>
                                <ProfName>Daniel Walied</ProfName>
                                <FollowCount>200,456 followers</FollowCount>
                            </ProfDetails>
                        </LeftDiv>
                        <FollowBtn>Follow</FollowBtn>
                    </ProfileDetails>
                </PodcastList>
            </RightMiddle>
            <RightBottom>
                <MusicHeading>Listen to the people's voice</MusicHeading>
                <MusicControls>
                    <MainControls>
                        <ControlImage>
                            <ControlImg
                                src={
                                    require("../../assets/images/Property 1=shuffle w.svg")
                                        .default
                                }
                            />
                        </ControlImage>
                        <ControlImage>
                            <ControlImg
                                src={
                                    require("../../assets/images/Property 1=back w.svg")
                                        .default
                                }
                            />
                        </ControlImage>
                        <ControlImage>
                            <ControlImg
                                src={
                                    require("../../assets/images/Property 1=pause w.svg")
                                        .default
                                }
                            />
                        </ControlImage>
                        <ControlImage>
                            <ControlImg
                                src={
                                    require("../../assets/images/Property 1=front w.svg")
                                        .default
                                }
                            />
                        </ControlImage>
                        <ControlImage>
                            <ControlImg
                                src={
                                    require("../../assets/images/Property 1=refresh w.svg")
                                        .default
                                }
                            />
                        </ControlImage>
                    </MainControls>
                    <SeekBar>
                        <RunningTime>02:00</RunningTime>

                        <TotalDuration>03:40</TotalDuration>
                    </SeekBar>
                </MusicControls>
            </RightBottom>
        </RightSection>
    );
}

export default RightContainer;

const RightSection = styled.div`
    width: 20%;
    border-left: 1px solid #a6a5a5;
    padding: 35px 20px 0;
`;

const RightTop = styled.div``;
const FriendList = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #a6a5a5;
`;
const FriendListTxt = styled.h2`
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 20px;
`;
const OptionsMenu = styled.div`
    width: 35px;
    margin-bottom: 20px;
`;
const OptionsImg = styled.img`
    width: 100%;
    display: block;
`;
const FriendProfile = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const FriendProfList = styled.li`
    margin: 10px 0 20px;
`;
const FriendProfImage = styled.div`
    width: 40px;
`;
const FriendProfImg = styled.img`
    width: 100%;
    display: flex;
    border-radius: 50%;
`;
const FriendProfName = styled.h5`
    font-size: 12px;
    color: #a6a5a5;
    text-align: center;
`;

const RightMiddle = styled.div``;

const PodcastHeading = styled.h2`
    margin-bottom: 20px;
    font-size: 32px;
    font-weight: 500;
`;
const PodcastList = styled.ul`
    border-top: 1px solid #a6a5a5;
`;
const ProfileDetails = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`;
const LeftDiv = styled.div`
    display: flex;
    align-items: center;
`;
const LeftImage = styled.div`
    width: 38px;
    margin-right: 10px;
`;
const LeftImg = styled.img`
    width: 100%;
    display: block;
    border-radius: 50%;
`;
const ProfDetails = styled.div``;
const ProfName = styled.h4`
    font-size: 14px;
    font-weight: 500;
`;
const FollowCount = styled.h5`
    font-size: 11px;
    color: #9e9696;
`;
const FollowBtn = styled.button`
    border-radius: 50px;
    border: 1px solid #9e9696;
    padding: 5px 10px;
`;

const RightBottom = styled.div`
    background: url(${MusicBg}) no-repeat;
    background-size: cover;
    margin-top: 20px;
`;

const MusicHeading = styled.h3`
    font-size: 25px;
    font-weight: 700;
    color: #fff;
    width: 80%;
    padding: 20px;
`;
const MusicControls = styled.div`
    background: rgba(217, 217, 217, 0.5);
    width: 100%;
    height: 100px;
    margin-top:10px;
`;
const MainControls = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin: 0 auto 20px;
`;
const ControlImage = styled.li`
    width: 20px;
`;
const ControlImg = styled.img`
    display: block;
    width: 100%;
`;

const SeekBar = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
`;

const RunningTime = styled.h3`
    font-size: 12px;
    color: #fff;
`;
const TotalDuration = styled.h3`
    font-size: 12px;
    color: #fff;
`;
