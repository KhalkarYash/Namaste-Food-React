import { useDispatch } from "react-redux";
import { addCartItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addCartItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
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
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="mx-10 rounded-lg p-2 shadow-lg bg-black text-white"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img
              className="w-full"
              src={CDN_URL + item?.card?.info?.imageId}
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
