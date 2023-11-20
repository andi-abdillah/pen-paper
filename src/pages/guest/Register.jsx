import { Link } from "react-router-dom";
import TextInput from "../../components/TextInput";
import { Helmet } from "react-helmet";

const Register = () => {
  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>

      <div className="flex justify-center items-center w-screen min-h-screen bg-primary">
        <div className="mx-6 my-24 p-8 md:p-20 bg-neutral-50 rounded-3xl drop-shadow-card">
          <h1 className="max-w-md hidden sm:block text-primary sm:text-5xl md:text-6xl">
            Join the community.
          </h1>
          <div className="w-full sm:max-w-xs mx-auto mt-16">
            <form action="" className="flex flex-col gap-4">
              <TextInput
                id="name"
                name="name"
                type="text"
                defaultValue=""
                placeholder="Full Name"
                className="text-center"
                required
                isFocused
              />
              <TextInput
                id="email"
                name="email"
                type="email"
                defaultValue=""
                placeholder="Email"
                className="text-center"
                required
              />
              <TextInput
                id="password"
                name="password"
                type="password"
                defaultValue=""
                placeholder="Password"
                className="text-center"
                required
              />
              <button
                type="submit"
                className="text-primary text-lg font-semibold"
              >
                Create Account
              </button>
            </form>
          </div>
          <center className="my-6 text-lg">
            Already have an account?
            <Link to="/sign-in" className="text-primary font-semibold">
              {" "}
              Sign In
            </Link>
          </center>
        </div>
      </div>
    </>
  );
};

export default Register;
