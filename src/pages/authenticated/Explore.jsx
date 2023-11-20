import { Helmet } from "react-helmet";
import Card from "../../components/Card";
import TextInput from "../../components/TextInput";
import Divider from "../../components/Divider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PrimaryButton from "../../components/PrimaryButton";
import Icon from "../../components/Icon";
import articles from "../../utils/articles.json";

const Explore = () => {
  let navigate = useNavigate();

  const filteredArticles = articles.articles.filter(
    (article) => article.userID !== 3001
  );

  const [visibleItems, setVisibleItems] = useState(4);

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
  };

  const handleCardClick = (id) => {
    navigate(`/story-details/${id}`);
  };

  return (
    <>
      <Helmet>
        <title>Explore</title>
      </Helmet>

      <div>
        <h1 className="text-3xl xs:text-5xl mb-8">Explore</h1>
        <Divider />
        <div className="relative my-5">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <TextInput
            id="search"
            name="search"
            type="text"
            defaultValue=""
            className="pl-12"
            placeholder="Search Topics"
          />
        </div>
        <div className="flex flex-wrap justify-between my-6">
          {filteredArticles.slice(0, visibleItems).map((article, index) => (
            <Card
              key={index}
              author={article.author}
              title={article.title}
              content={article.content}
              date={article.date}
              onClick={() => handleCardClick(article.id)}
            />
          ))}
        </div>
        {visibleItems < filteredArticles.length && (
          <PrimaryButton className="m-auto" onClick={handleLoadMore}>
            Load More<Icon>arrow_circle_down</Icon>
          </PrimaryButton>
        )}
      </div>
    </>
  );
};

export default Explore;
