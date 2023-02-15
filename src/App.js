import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MiddleContainer from "./components/screens/MiddleContainer";
import AsideBar from "./components/includes/AsideBar";
import RightContainer from "./components/includes/RightContainer";
import ComingSoon from "./components/screens/ComingSoon";

function App() {
    return (
        <>
            <Router>
                <Container>
                    <AsideBar />
                    <Routes>
                        <Route path="/" element={<MiddleContainer />} />
                        <Route path="music/" element={<ComingSoon />} />
                        <Route path="account/" element={<ComingSoon />} />
                        <Route path="file/" element={<ComingSoon />} />
                        <Route path="settings/" element={<ComingSoon />} />
                    </Routes>
                    <RightContainer />
                </Container>
            </Router>
        </>
    );
}

export default App;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100vh;
`;
