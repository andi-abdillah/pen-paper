import { Helmet, HelmetProvider } from "react-helmet-async";
import Divider from "../../components/Divider";
import BackButton from "../../components/BackButton";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import articles from "../../utils/articles.json";
import users from "../../utils/users.json";

const StoryDetails = () => {
  const { id } = useParams();

  const [user, setUser] = useState({});

  const [article, setArticle] = useState(null);

  useEffect(() => {
    const foundArticle = articles.articles.find(
      (article) => article.id === parseInt(id)
    );

    if (foundArticle) {
      setArticle(foundArticle);
      const findUser = users.users.find(
        (user) => user.userID === foundArticle.userID
      );
      setUser(findUser);
    }
  }, [id]);

  if (!article) {
    return (
      <div className="mx-4 mt-12">
        <BackButton />
        <p className="mt-20 text-center text-2xl font-semibold">
          Article not found
        </p>
      </div>
    );
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Story Details</title>
        </Helmet>
      </HelmetProvider>

      <div>
        <h1 className="text-3xl xs:text-5xl mb-8">{article.title}</h1>
        <Divider />

        <BackButton />

        <div className="flex flex-col gap-6 max-w-2xl xs:mx-8 text-lg font-semibold">
          <Link
            to={`${
              user.userID === 3001
                ? "/my-profile"
                : "/user-profile/" + user.userID
            }`}
            className="text-black text-2xl w-max"
          >
            {user.username}
          </Link>
          <h3 className="text-gray-700">{article.date}</h3>
          <h3 className="text-gray-500">Article Description</h3>
          <p>{article.content}</p>
        </div>
      </div>
    </>
  );
};

export default StoryDetails;
