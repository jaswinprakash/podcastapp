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
            <RightMiddle></RightMiddle>
            <RightBottom></RightBottom>
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

const RightBottom = styled.div``;
