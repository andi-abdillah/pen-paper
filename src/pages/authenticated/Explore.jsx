import { Helmet, HelmetProvider } from "react-helmet-async";
import Card from "../../components/Card";
import TextInput from "../../components/TextInput";
import Divider from "../../components/Divider";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { debounce, shuffle } from "lodash";
import PrimaryButton from "../../components/PrimaryButton";
import Icon from "../../components/Icon";
import articles from "../../utils/articles.json";

const Explore = () => {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search"));
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [visibleItems, setVisibleItems] = useState(4);

  useEffect(() => {
    // Filter articles based on search keyword in title or content
    const filtered = articles.articles
      .filter((article) => article.userID !== 3001)
      .filter((article) =>
        search
          ? article.title.toLowerCase().includes(search.toLowerCase()) ||
            article.content.toLowerCase().includes(search.toLowerCase())
          : true
      );

    setFilteredArticles(shuffle(filtered));
  }, [search]);

  // Use debounce to delay the execution of handleChange
  const debouncedSearch = debounce((value) => setSearch(value), 1000);

  const handleChange = (e) => debouncedSearch(e.target.value);

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Explore</title>
        </Helmet>
      </HelmetProvider>

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
            defaultValue={search}
            className="pl-12"
            placeholder="Search Topics"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-wrap justify-between mt-6">
          {filteredArticles.slice(0, visibleItems).map((article, index) => (
            <Card key={index} {...article} />
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
