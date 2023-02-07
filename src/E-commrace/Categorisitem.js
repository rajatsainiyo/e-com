import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Headbar.css"



const Categorisitem=()=> {


    const [datanw, setDatanw] = useState([]);

    const getusere = () => {
      axios
        .get("http://user34612e84027e0c3.app.vtxhub.com/api/v1/category/")
        .then((res) => {
          console.log(res, "res");
          const newdata = res?.data;
          setDatanw(newdata);
        });
    };
  
   
    let newarry = datanw.results;
  
    useEffect(() => {
      getusere();
    }, []);
  return (
   <>
   
   <div className="container-fluid">
             


                <div className="row p-3">
                    <div className="col-lg-12">

                    <div className="h1-teg ">
                        <h1 className='doted-cat'>CATEGORIES</h1>

                    </div>

                    </div>

                </div>
                <div className="row  p-3 ">

{newarry?.map((val_1)=>{

    return(


        <div className="col-lg-3">

        <div className="item-box d-flex ">
            <div className="img-girl">
                <img className='img-pic' src={val_1.image} width={100} height={100} alt="" />
            </div>

            <div className="img-girl-2">
                <div className="text-cat-girl">
                    <h5 className='font-size-6'>{val_1.word}</h5>
                    <p className='font-size-2 ps-3'>{val_1.product_count}</p>
                </div>
            </div>
        </div>
    </div>



    )
})}



                  


                </div>


                {/* </div> */}

            </div>

   
   </>
  )
}

export default Categorisitem