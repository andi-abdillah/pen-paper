import Card from "../../components/Card";
import PrimaryButton from "../../components/PrimaryButton";
import Icon from "../../components/Icon";

const ExploreTopics = ({ filteredItems, visibleItems, handleLoadMore }) => {
  return (
    <div className="flex flex-wrap justify-between">
      {filteredItems.slice(0, visibleItems).map((item, index) => (
        <Card key={index} {...item} />
      ))}
      {visibleItems < filteredItems.length && (
        <PrimaryButton className="m-auto" onClick={handleLoadMore}>
          Load More<Icon>arrow_circle_down</Icon>
        </PrimaryButton>
      )}
    </div>
  );
};

export default ExploreTopics;
