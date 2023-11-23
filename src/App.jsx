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
import EditStory from "./pages/authenticated/EditStory";
import StoryDetails from "./pages/authenticated/StoryDetails";
import UserProfile from "./pages/authenticated/UserProfile";
import { AuthProvider } from "./auth/AuthContext";
// import WelcomePage from "./pages/guest/WelcomePage";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="" element={<AuthenticatedLayout />}>
          <Route index element={<Home />} />
          <Route path="my-profile" element={<MyProfile />} />
          <Route path="your-stories" element={<YourStories />}>
            <Route index element={<Stories />} />
            <Route path="create" element={<CreateStory />} />
            <Route path=":id/edit" element={<EditStory />} />
          </Route>
          <Route path="explore" element={<Explore />} />
          <Route path="story-details/:id" element={<StoryDetails />} />
          <Route path="user-profile/:id" element={<UserProfile />} />
        </Route>
        {/* <Route path="/" element={<WelcomePage />} /> */}
        <Route path="*" element={<PageNotFound />} />
        <Route path="sign-in" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
