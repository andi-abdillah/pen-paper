import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import Divider from "../../components/Divider";

const YourStories = () => {
  return (
    <div>
      <Helmet>
        <title>Your Stories</title>
      </Helmet>

      <div>
        <h1 className="text-3xl xs:text-5xl mb-8">Your Stories</h1>
        <Divider />
        <div className="text-lg px-3 xs:px-8 py-8 font-medium">
          <h2>Full Name</h2>
          <h2 className="text-primary">Joined since 2023</h2>
        </div>
        <Divider />

        <div className="mt-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default YourStories;
