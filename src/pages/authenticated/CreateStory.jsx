import { useState } from "react";
import TextInput from "../../components/TextInput";
import Divider from "../../components/Divider";
import TextArea from "../../components/TextArea";
import PrimaryButton from "../../components/PrimaryButton";
import { Helmet } from "react-helmet";
import Icon from "../../components/Icon";

const CreateStory = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <>
      <Helmet>
        <title>Create A Story</title>
      </Helmet>

      <h2 className="mx-2 my-6 text-2xl text-primary font-semibold">
        Create a story
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
            className="border-0 my-3 font-semibold"
            isFocused
            required
          />

          <Divider />

          <TextArea
            id="content"
            name="content"
            placeholder="Write here"
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

export default CreateStory;
