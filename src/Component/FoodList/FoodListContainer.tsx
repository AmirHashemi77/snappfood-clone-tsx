import { FC } from "react";
import style from "./FoodListContainer.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";
import FoodListCategory from "./FoodListCategory";

const FoodListContainer: FC = () => {
  const currentRestrant = useSelector(
    (state: RootState) => state.restrants.currentRestrant
  );

  return (
    <div className={style.container}>
      {currentRestrant &&
        currentRestrant.menu.map((item) => (
          <FoodListCategory
            key={item.id}
            id={item.id}
            title={item.category}
            foods={item.foods}
          />
        ))}
    </div>
  );
};
export default FoodListContainer;
