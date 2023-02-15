import React from "react";
import styled from "styled-components";

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
                    <SeekBar></SeekBar>
                </MusicControls>
            </RightBottom>
        </RightSection>
    );
}

export default RightContainer;

const RightSection = styled.div`
    width: 20%;
`;

const RightTop = styled.div``;
const FriendList = styled.div`
    display: flex;
    justify-content: space-between;
`;
const FriendListTxt = styled.h2``;
const OptionsMenu = styled.div`
    width: 50px;
`;
const OptionsImg = styled.img`
    width: 100%;
    display: block;
`;
const FriendProfile = styled.ul`
    display: flex;
    justify-content: space-between;
`;
const FriendProfList = styled.li``;
const FriendProfImage = styled.div`
    width: 50px;
`;
const FriendProfImg = styled.img`
    width: 100%;
    display: flex;
`;
const FriendProfName = styled.h5``;

const RightMiddle = styled.div``;

const PodcastHeading = styled.h2``;
const PodcastList = styled.ul``;
const ProfileDetails = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const LeftDiv = styled.div`
    display: flex;
    align-items: center;
`;
const LeftImage = styled.div`
    width: 50px;
`;
const LeftImg = styled.img`
    width: 100%;
    display: block;
`;
const ProfDetails = styled.div``;
const ProfName = styled.h4``;
const FollowCount = styled.h5``;
const FollowBtn = styled.button``;

const RightBottom = styled.div``;

const MusicHeading = styled.h3``;
const MusicControls = styled.div``;
const MainControls = styled.ul`
    display: flex;
    justify-content: space-between;
`;
const ControlImage = styled.li`
    width: 20px;
`;
const ControlImg = styled.img`
    display: block;
    width: 100%;
`;
const SeekBar = styled.div``;
