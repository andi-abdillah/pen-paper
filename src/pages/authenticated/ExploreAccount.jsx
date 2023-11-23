import { Link } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton";

const ExploreAccount = ({ usersList, loggedInUserID }) => {
  return (
    <div className="flex flex-col gap-3">
      {usersList?.map((user, index) => (
        <Link
          to={`${
            user.userID === loggedInUserID
              ? "/my-profile"
              : "/user-profile/" + user.userID
          }`}
          key={index}
        >
          <PrimaryButton>{user.username}</PrimaryButton>
        </Link>
      ))}
    </div>
  );
};

export default ExploreAccount;
