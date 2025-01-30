import ItemList from "./ItemList";

const RestaurantCategory = (data) => {
  return (
    <div>
      {/* Accordion Header  */}
      <div className="w-[50vw] bg-gray-50 shadow-lg p-4 mx-auto my-4">
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {data?.data?.title} ({data?.data?.itemCards?.length})
          </span>
          <span>⬇</span>
        </div>
        {/* Accordion Body */}
        <ItemList items={data?.data?.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
