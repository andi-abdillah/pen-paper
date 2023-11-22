import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const largeStyle = "flex items-center justify-center font-normal w-28 h-10";

  const mediumActive = "px-4 py-2 bg-primary text-white font-medium rounded-lg";
  const mediumInActive = "px-4 py-2 hover:text-primary hover:font-medium";

  const largeActive = `${largeStyle} bg-primary text-white font-medium rounded-lg`;
  const largeInActive = `${largeStyle} hover:text-primary hover:font-medium`;

  const path = {
    home: location.pathname === "/" ? true : false,
    explore: location.pathname.startsWith("/explore") ? true : false,
    yourStories: location.pathname.startsWith("/your-stories") ? true : false,
    myProfile: location.pathname.startsWith("/my-profile") ? true : false,
  };

  return (
    <nav
      className={`navbar sticky top-3 w-[95%] mx-auto z-50 bg-base-100 lg:py-5 lg:px-20 rounded-full transition duration-500 ease-in-out ${
        isScrolled ? "drop-shadow-card" : ""
      }`}
    >
      <div className="navbar-start w-full">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="flex flex-col gap-3 p-6 dropdown-content mt-5 z-[1] drop-shadow-card bg-base-100 rounded-box w-56"
          >
            <li className={path.home ? mediumActive : mediumInActive}>
              <Link to="/">Home</Link>
            </li>
            <li className={path.myProfile ? mediumActive : mediumInActive}>
              <Link to="/my-profile">Profile</Link>
            </li>
            <li className={path.yourStories ? mediumActive : mediumInActive}>
              <Link to="/your-stories">Your Stories</Link>
            </li>
            <li
              className={`${
                path.explore ? mediumActive : mediumInActive
              } justify-start`}
            >
              <Link to="/explore">Explore</Link>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="font-bold text-2xl md:text-3xl text-primary font-newsreader"
        >
          Pen & Paper
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="flex gap-4">
          <li className={path.explore ? largeActive : largeInActive}>
            <Link to="/explore">Explore</Link>
          </li>
          <li className={path.yourStories ? largeActive : largeInActive}>
            <Link to="/your-stories">Your Stories</Link>
          </li>
          <li className={path.myProfile ? largeActive : largeInActive}>
            <Link to="/my-profile">Profile</Link>
          </li>
          <li className={path.home ? largeActive : largeInActive}>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;