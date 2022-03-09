import { GroceryInput } from "./GroceryInput";

import { v4 as uuidv4 } from "uuid";

import { useState } from "react";
import { AddToList } from "./GroceryList";

export const Grocery = () => {
  const [item, addItem] = useState([]);

  const AddItem = (product) => {
    const pro = {
      id: uuidv4(),
      product_name: product
    };
    addItem([...item, pro]);
  };

  const remove = (id) => {
    const updatedList = [...item].filter((e) => e.id != id);

    addItem(updatedList);
  };

  return (
    <div>
      Welcome To Grocery Shop
      <GroceryInput AddItem={AddItem} />
      {item.map((e) => (
        <AddToList item={e.product_name} key={e.id} remove={remove} e={e} />
      ))}
    </div>
  );
};
