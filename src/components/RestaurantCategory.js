import ItemList from "./ItemList";
import {motion, AnimatePresence} from "framer-motion";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* Accordion Header  */}
      <div className="w-[50vw] bg-gray-50 shadow-lg p-4 mx-auto my-4">
          <div
            className="flex justify-between cursor-pointer"
            onClick={handleClick}
          >
            <span className="font-bold text-lg">
              {data?.title} ({data?.itemCards?.length})
            </span>
            <span>{showItems===false?"⬇":"⬆"}</span>
          </div>

        {/* Accordion Body */}
        <AnimatePresence>
          {showItems && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                {<ItemList items={data?.itemCards} />}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RestaurantCategory;
