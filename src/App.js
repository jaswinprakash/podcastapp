import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AsideBar from "./components/includes/AsideBar";
import ComingSoon from "./components/screens/ComingSoon";
import Home from "./components/screens/Home";

function App() {
    return (
        <>
            <Router>
                <MainContainer>
                    <AsideBar />
                    <SubContainer>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="music/" element={<ComingSoon />} />
                            <Route path="account/" element={<ComingSoon />} />
                            <Route path="file/" element={<ComingSoon />} />
                            <Route path="settings/" element={<ComingSoon />} />
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
