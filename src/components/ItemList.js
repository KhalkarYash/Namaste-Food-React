import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left"
        >
          <div>
            <div className="text-bold py-4">
              <span>{item?.card?.info?.name}</span>
              <span>
                - ₹
                {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                  100}
              </span>
            </div>
            <p className="text-gray-400 text-xs">
              {item?.card?.info?.description}
            </p>
          </div>
          <div>
            <img className="w-14" src={CDN_URL + item?.card?.info?.imageId}></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
