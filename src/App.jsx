import { Routes, Route } from "react-router-dom";
import AuthenticatedLayout from "./layouts/AuthenticatedLayout";
import Home from "./pages/authenticated/Home";
import Explore from "./pages/authenticated/Explore";
import MyProfile from "./pages/authenticated/MyProfile";
import YourStories from "./pages/authenticated/YourStories";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/guest/Login";
import Register from "./pages/guest/Register";
import Stories from "./pages/authenticated/Stories";
import CreateStory from "./pages/authenticated/CreateStory";
import StoryDetails from "./pages/authenticated/StoryDetails";
import UserProfile from "./pages/authenticated/UserProfile";
// import WelcomePage from "./pages/guest/WelcomePage";

function App() {
  return (
    <Routes>
      <Route path="" element={<AuthenticatedLayout />}>
        <Route index element={<Home />} />
        <Route path="your-stories" element={<YourStories />}>
          <Route index element={<Stories />} />
          <Route path="create" element={<CreateStory />} />
        </Route>
        <Route path="story-details/:id" element={<StoryDetails />} />
        <Route path="explore" element={<Explore />} />
        <Route path="my-profile" element={<MyProfile />} />
        <Route path="user-profile/:id" element={<UserProfile />} />
      </Route>
      {/* <Route path="/" element={<WelcomePage />} /> */}
      <Route path="*" element={<PageNotFound />} />
      <Route path="sign-in" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}

export default App;
