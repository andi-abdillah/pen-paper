import { Helmet, HelmetProvider } from "react-helmet-async";
import Divider from "../../components/Divider";
import BackButton from "../../components/BackButton";
import { useParams } from "react-router-dom";
import articles from "../../utils/articles.json";
import { useEffect, useState } from "react";

const StoryDetails = () => {
  const { id } = useParams();

  const [article, setArticle] = useState(null);

  useEffect(() => {
    const foundArticle = articles.articles.find(
      (article) => article.id === parseInt(id)
    );

    if (foundArticle) {
      setArticle(foundArticle);
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
        <div className="my-8">
          <BackButton />
        </div>
        <div className="flex flex-col gap-6 max-w-2xl xs:mx-8 text-lg font-semibold">
          <h2 className="text-black">{article.author}</h2>
          <h3 className="text-gray-500">Article Description</h3>
          <p>{article.content}</p>
        </div>
      </div>
    </>
  );
};

export default StoryDetails;
