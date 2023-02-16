import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AsideBar from "./components/includes/AsideBar";
import Settings from "./components/screens/Settings";
import Home from "./components/screens/Home";
import Music from "./components/screens/Music";
import Accounts from "./components/screens/Accounts";
import Files from "./components/screens/Files";

function App() {
    return (
        <>
            <Router>
                <MainContainer>
                    <AsideBar />
                    <SubContainer>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="music/" element={<Music />} />
                            <Route path="account/" element={<Accounts />} />
                            <Route path="file/" element={<Files />} />
                            <Route path="settings/" element={<Settings />} />
                        </Routes>
                    </SubContainer>
                </MainContainer>
            </Router>
        </>
    );
}

export default App;

const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100vh;
`;
const SubContainer = styled.div`
    width: 100%;
`;
