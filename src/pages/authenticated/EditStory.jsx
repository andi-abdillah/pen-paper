import { useEffect, useState } from "react";
import TextInput from "../../components/TextInput";
import Divider from "../../components/Divider";
import TextArea from "../../components/TextArea";
import PrimaryButton from "../../components/PrimaryButton";
import Icon from "../../components/Icon";
import { Helmet, HelmetProvider } from "react-helmet-async";
import BackButton from "../../components/BackButton";
import { useNavigate, useParams } from "react-router-dom";
import articles from "../../utils/articles.json";
import { useAuth } from "../../auth/AuthContext";

const EditStory = () => {
  const { id } = useParams();

  const { loggedInUser } = useAuth();

  const navigate = useNavigate();

  const [article, setArticle] = useState(null);

  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const foundArticle = articles.find(
      (article) =>
        article.id === parseInt(id) && article.userID === loggedInUser.userID
    );
    if (!foundArticle) navigate("/dashboard/your-stories");

    setArticle(foundArticle);
  }, [id, loggedInUser.userID, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      navigate("/dashboard/your-stories");
    }, 2000);
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Edit Story</title>
        </Helmet>
      </HelmetProvider>

      <BackButton />

      <h2 className="mx-2 my-6 text-2xl text-primary font-semibold">
        Edit Story
      </h2>

      <div className="px-6 py-2 border-[1.2px] border-gray-400 rounded-2xl">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col text-sm xs:text-lg"
        >
          <TextInput
            id="title"
            name="title"
            placeholder="Add title"
            defaultValue={article?.title}
            className="border-0 my-3 font-semibold"
            required
          />

          <Divider />

          <TextArea
            id="content"
            name="content"
            placeholder="Write here"
            defaultValue={article?.content}
            className="border-0 mt-3"
            cols="30"
            rows="20"
            required
          ></TextArea>

          <PrimaryButton
            type="submit"
            className="self-end my-4"
            disabled={isProcessing}
          >
            {isProcessing ? (
              <>
                Publishing
                <Icon className="animate-spin">progress_activity</Icon>
              </>
            ) : (
              <>
                Publish
                <Icon>task_alt</Icon>
              </>
            )}
          </PrimaryButton>
        </form>
      </div>
    </>
  );
};

export default EditStory;
