import { useState } from "react";
import Styles from "./categories.module.css";

function Categories({ getFilterText }) {
  const [focus, setFocus] = useState("Barcha Maxsulotlar");
  const [categories, setCategories] = useState([
    { id: 1, text: "Barcha Maxsulotlar" },
    { id: 2, text: "Xamir Ovqat" },
    { id: 3, text: "Suyuq Ovqat" },
    { id: 4, text: "Salat" },
    { id: 5, text: "Ichimlik" },
  ]);

  const hanldeClick = (text) => {
    setFocus(text);
    getFilterText(text);
  };
  return (
    <div className={Styles.categories}>
      <div className="container">
        <ul>
          {categories.map((item) => (
            <li
              onClick={() => hanldeClick(item.text)}
              className={
                focus.toLocaleLowerCase() == item.text.toLocaleLowerCase()
                  ? Styles.active
                  : ""
              }
              key={item.id}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Categories;
