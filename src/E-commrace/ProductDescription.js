import React from "react";
import { useSelector } from "react-redux";

const ProductDescription = () => {
  const mydata = useSelector((state) => state.Reducer.ShopArry);
  return (
    <>
      <div className="container">
        <h1>Product description</h1>

        {mydata?.map((val) => {
          return <p>{val.description}</p>;
        })}
      </div>
    </>
  );
};

export default ProductDescription;
