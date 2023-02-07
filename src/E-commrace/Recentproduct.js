import React, { useEffect, useState } from "react";
import axios from "axios";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';


import "./Headbar.css"
import { DiffOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";



const Recentproduct=() =>{
    // const [datanw, setDatanw] = useState([]);
    const mydata = useSelector((state)=>state.Reducer.productApi)

    // const getusere = () => {
    //   axios
    //     .get("http://user34612e84027e0c3.app.vtxhub.com/api/v1/product/")
    //     .then((res) => {
    //       // console.log(res, "res");
    //       const newdata = res?.data;
    //       setDatanw(newdata);
    //     });
    // };
  
    // console.log(datanw.results,"gg");
    // let newarry = datanw.results;
  
    useEffect(() => {
      // getusere();
    }, []);
  
   
  return (
   <>
    <div className="container-fluid">

{/* <div className="container"> */}
    <div className="row p-3">
        <div className="col-12">

        <div className="h1-teg ">
            <h1 className='doted-cat'>RECENT PRODUCTS </h1>

        </div>

        </div>

    </div>
    <div className="row pt-3 ">

        {mydata?.map((val, id) =>{

return (
    <div className="col-md-4 col-lg-4 bg-white w-cover  ">
      <div key={id}>
        {
          <div className="item-box-Featured   ">
            <div className="img-featured-girl">
              <img
                src={val.image}
                width={270}
                height="280px"
                alt=""
              />
            </div>

            <div className="img-featured-2 ">
              <div className="text-feat-product">
                <div className="title-name-product ps-4">
                  <h5>{val.title}</h5>
                </div>
                <div className="text-product  d-flex">
                  <div className="price-teg ps-4 ms-1">
                  <h5>{val.price} </h5>

                  </div>
                  <p className="text-decoration-line-through ps-2">
                    {val.old_price}
                  </p>
                </div>
                <h6 className=" ">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarHalfIcon />
                  (99)
                </h6>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );

        })}
       
            
            
            
            
            
    
    
    

       


    </div>


{/* </div> */}
</div>

   
   </>
  )
}

export default Recentproduct