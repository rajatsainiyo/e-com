import React from "react";
import { useSelector } from "react-redux";


const Information = () => {
  const mydata = useSelector((state) => state.Reducer.ShopArry);
  return (
    <>
      <div className="container">
       <h1>Addtional Information</h1>
{mydata?.map((val)=>{return(

<p>
{val.information}
</p>
)})}
      </div>
    </>
  );
};

export default Information;
