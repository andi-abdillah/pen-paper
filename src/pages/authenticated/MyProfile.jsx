import { Helmet, HelmetProvider } from "react-helmet-async";
import PrimaryButton from "../../components/PrimaryButton";
import Divider from "../../components/Divider";
import Icon from "../../components/Icon";
import users from "../../utils/users.json";

const MyProfile = () => {
  const user = users.users.find((user) => user.userID === 3001);

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Profile</title>
        </Helmet>
      </HelmetProvider>

      <div>
        <h1 className="text-3xl xs:text-5xl mb-8">Profile</h1>

        <Divider />

        <div className="text-lg px-3 xs:px-8 py-8 font-semibold">
          <h2>{user.username}</h2>
          <h2 className="text-primary">Joined since {user.joined_at}</h2>
        </div>

        <Divider />

        <div className="mt-8">
          <PrimaryButton>
            Add descriptions<Icon>description</Icon>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
