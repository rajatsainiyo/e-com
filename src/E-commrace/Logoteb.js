import React from 'react'
import "./Headbar.css"


const Logoteb=()=> {
  return (
   <>
   
   <div className="container-fluid ">
                <div className="row  pt-4 bg-light">
                    {Array.from(Array(6).keys()).map((item) => (

                        <div className="col-md-2 col-lg-2 col-6">
                            <img src="https://cdn.pixabay.com/photo/2015/07/09/00/29/woman-837156_960_720.jpg" width="120px" height="120px" alt="" />
                        </div>
                    ))}
                </div>
            </div>
   </>
  )
}

export default Logoteb