import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import articles from "../../utils/articles.json";
import Card from "../../components/Card";
import Icon from "../../components/Icon";
import PrimaryButton from "../../components/PrimaryButton";

const Home = () => {
  const topics = [
    "Programming",
    "Self Improvement",
    "Relationship",
    "Politics",
  ];

  let navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/story-details/${id}`);
  };

  const filteredArticles = articles.articles
    .filter((article) => article.userID !== 3001)
    .slice(0, 7);

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div className="mb-24">
        <div
          className="hero min-w-full min-h-[24rem] rounded-[20px]"
          style={{
            backgroundImage:
              "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60 rounded-[20px]"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-4xl">
              <h1 className="mt-20 mb-10 text-3xl xs:text-5xl text-black">
                Learn somehing new today.
              </h1>
              <Link
                to="/explore"
                className="px-10 py-3.5 text-xl text-white font-semibold bg-primary rounded-lg"
              >
                Browse Stories
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between">
        <div>
          <h2 className="mb-6 text-center xs:text-start text-xl text-primary font-semibold">
            Might for you
          </h2>
          {filteredArticles?.map((article, index) => (
            <Card
              key={index}
              {...article}
              onClick={() => handleCardClick(article.id)}
            />
          ))}
        </div>

        <div className="fixed bottom-3 right-3 text-center dropdown dropdown-top dropdown-end z-[1] md:hidden">
          <PrimaryButton
            tabIndex={0}
            className="bg-white focus:bg-primary focus:text-white btn-circle m-2 drop-shadow"
          >
            <Icon className="text-3xl">expand_circle_up</Icon>
          </PrimaryButton>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] mb-2 mx-3 p-4 drop-shadow-card bg-base-100 rounded-box w-60"
          >
            <h2 className="mb-6 text-primary font-semibold">
              Discover by topics
            </h2>
            {topics?.map((topic, index) => (
              <li
                key={index}
                className="mb-2 px-4 py-2 bg-neutral-50 rounded-3xl drop-shadow"
              >
                <Link>{topic}</Link>
              </li>
            ))}
            <Link
              to="/explore"
              className="flex justify-center items-center mt-8 text-primary font-semibold transition duration-300 ease-in-out hover:scale-[1.025]"
            >
              Browse more topics
              <svg
                className="w-3.5 h-3.5 ml-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </ul>
        </div>

        <div className="w-max hidden md:block">
          <h2 className="mb-6 text-xl text-primary font-semibold">
            Discover by topics
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {topics?.map((topic, index) => (
              <div
                key={index}
                className="card w-60 h-14 mb-2 bg-neutral-50 rounded-3xl drop-shadow-card"
              >
                <div className="card-body p-0">
                  <h1 className="card-title m-auto text-gray-400">{topic}</h1>
                </div>
              </div>
            ))}
          </div>
          <Link
            to="/explore"
            className="flex items-center mt-3 text-xl text-primary font-semibold transition duration-300 ease-in-out hover:scale-[1.025]"
          >
            Browse more topics
            <svg
              className="w-3.5 h-3.5 ml-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
