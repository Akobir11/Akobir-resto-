import DishesItem from "../dishes-item/DishesItem";
import Styles from "./dishels-list.module.css";

function DishelsList({ data }) {
  console.log(data);
  return (
    <>
      <div className="container">
        <div className={Styles.dishescard}>
          {data.map((dish) => (
            <DishesItem key={dish.id} {...dish} />
          ))}
        </div>
      </div>
    </>
  );
}

export default DishelsList;
