import React from "react";
import useBookContext from "../contexts/BookContext";

const CartListCount = () => {
  const { cart } = useBookContext();
  return (
    <>
      <span>{cart?.length}</span>
    </>
  );
};

export default CartListCount;
