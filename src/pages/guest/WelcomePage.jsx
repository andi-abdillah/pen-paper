import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <h1 className="text-2xl w-max">
        Welcome to Pen & Paper, Go to{" "}
        <Link to="/home" className="text-primary underline">
          Home Page
        </Link>
      </h1>
    </div>
  );
};

export default WelcomePage;
