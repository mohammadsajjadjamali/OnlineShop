import React from "react";
import { FaListUl } from "react-icons/fa";
import { ImInsertTemplate } from "react-icons/im";
import styles from "./Sidbar.module.css";
import { categories } from "../constants/list";
import { createQueryObject } from "../Helper/helper";

const Sidebar = ({ query, setQuery }) => {
  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();

    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };

  return (
    <div className={styles.sidbar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categoryHandler}>
        {categories.map((item) => (
          <li
            key={item.id}
            className={
              item.type.toLowerCase() === query.category
                ? styles.selected
                : null
            }
          >
            {item.type}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
