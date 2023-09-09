import React, { useEffect, useState } from "react";
import { categories, items } from "./util";

const CategoryHeader = ({ header, selectedCategory, setSelectedCategory }) => {
  return (
    <button
      onClick={() => {
        setSelectedCategory((_categ) => [..._categ, header]);
      }}
      key={header}
    >
      {header}
    </button>
  );
};

const Product = ({ product }) => {
  return (
    <div className="prodItem">
      <div>name: {product.name}</div>
      <div>category: {product.category}</div>
    </div>
  );
};

function filterProdsByCategory(prods, filterBy) {
  let result = [];
  for (const prod of prods) {
    if (filterBy.includes(prod.category)) {
      result.push(prod);
    }
  }
  return result;
}

function categoryReducer(state, actions) {
  switch (actions.type) {
    case "categ_change":
      return {
        ...state,
        category: [...actions.category],
        products: filterProdsByCategory(
          state.originalProducts,
          actions.category
        ),
      };
    default:
      throw Error("unknown action");
  }
}
// selectedCategory
// products ->need to filtered

const useDebounce = (val, timer) => {
  const [debouncedVal, setDebouncedVal] = useState(val);

  useEffect(() => {
    let timerId = setTimeout(() => setDebouncedVal(val), timer);
    return () => clearTimeout(timerId);
  }, [val, timer]);

  return debouncedVal;
};

const CategoryFilter = () => {
  //   const [products, setProducts] = React.useState(items);
  const [selectedCategory, setSelectedCategory] = React.useState('')

  const debouncedValue = useDebounce(selectedCategory, 500);

  const filteredPRods =debouncedValue
  ? filterProdsByCategory(items, selectedCategory)
  : items;

  const handleChange = (ev) => {
    setSelectedCategory(ev.target.value);
  };

  return (
    <div>
      Category Filter
      <div>
        <input
          type="text"
          onChange={handleChange}
        />
      </div>
      Results for {selectedCategory}
      <div>
        {filteredPRods.map((product) => {
          return <Product product={product} key={product} />;
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;
