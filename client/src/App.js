import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./Components/GlobalStyles";
import SideBar from "./SideBar/SideBar";
import HomeFeed from "./Components/HomeFeed";
import Notifications from "./Components/Notifications";
import Bookmarks from "./Components/Bookmarks";
import TweetDetails from "./Components/TweetDetails";
import Profile from "./Components/Profile";
import styled from "styled-components";
import Followering from "./Components/SubComponents/Followering";
function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <PositioningDiv>
          <SepDiv>
            <SideBar />
          </SepDiv>
          <Routes>
            <Route path="/" element={<HomeFeed />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="bookmarks" element={<Bookmarks />} />
            <Route path="/tweet/:tweetId" element={<TweetDetails />} />
            <Route path="/:profileId/follow" element={<Followering />} />
            <Route path="/:profileId" element={<Profile />} />
          </Routes>
        </PositioningDiv>
      </BrowserRouter>
    </>
  );
}

export default App;

const PositioningDiv = styled.div`
  display: flex;
`;

const SepDiv = styled.div`
  padding-right: 90px;
`;
