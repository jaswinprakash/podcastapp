import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MiddleContainer from "./components/screens/MiddleContainer";
import AsideBar from "./components/includes/AsideBar";
import RightContainer from "./components/includes/RightContainer";

function App() {
    return (
        <>
            <Router>
                <Container>
                    <AsideBar />
                    <Routes>
                        <Route path="/" element={<MiddleContainer />} />
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
`;
