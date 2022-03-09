import { useState } from "react";

export const GroceryInput = ({ AddItem }) => {
  const [product, setProduct] = useState("");

  return (
    <div>
      <input
        onChange={(e) => {
          // console.log(e.target.value);

          setProduct(e.target.value);
        }}
        type="text"
        placeholder="Search Item"
      />

      <button
        onClick={() => {
          AddItem(product);
        }}
      >
        Add Item
      </button>
    </div>
  );
};
