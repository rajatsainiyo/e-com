import React, { useState, useEffect, useContext, createContext } from "react";
import { Checkbox, Divider, Radio, Table } from "antd";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { add_check } from "../Redux/Reducer";


const Filterbycolor = () => {
  const [selectionType, setSelectionType] = useState("checkbox");
//   const [colordata, setColordata] = useState([]);
//   const[datanw,setdatanw]=useState(colordata)
  const dispatch = useDispatch();

  
  
const mydata = useSelector((state)=>state.Reducer.dataapi)
// console.log(colordata,'ha');

  const columns = [
    {
      title: "ALL COLOR",
      dataIndex: "ALL_COLOR",
      //   render: (text) => <a>{text}</a>,
    },

    {
      title: "totalprice",
      dataIndex: "totalprice",
    },
  ];

  const data = [
    {
      key: "1",
      ALL_COLOR: "BLACK",
      color: "BLACK",
      totalprice: "price",
    },
    {
      key: "2",
      ALL_COLOR: "WHITE",
      color: "WHITE",
      totalprice: "price",
    },
    {
      key: "3",
      ALL_COLOR: "RED",
      color: "RED",
      totalprice: "price",
    },
    {
      key: "4",
      ALL_COLOR: "BLUE",
      color: "BLUE",

      totalprice: "price",
    },
    {
      key: "5",
      ALL_COLOR: "GREEN",
      color: "GREEN",
      totalprice: "price",
    },
  ];

  // console.log(colordata,'colordata');

  useEffect(() => {
    

  }, [mydata])
  
 
  

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      const mydata = selectedRows?.map((val) => val.color);
      axios
        .get(
          `${process.env.REACT_APP_BASE_URL}/api/v1/product/?color=${mydata}`
        )
        .then((res) => {
          const newdata = res?.data;
          dispatch(add_check(newdata.results))
        //   setColordata(newdata.results);
        });
    // dispatch(add_check(colordata));

      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );

      
    },
  };


  return (
    <>
      <dic className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="head-price-sec">
              <h2>FILER BY COLOR</h2>
            </div>
            <div>
              <Radio.Group
                onChange={({ target: { value } }) => {
                  setSelectionType(value);
                }}
                value={selectionType}
              ></Radio.Group>

              <Divider />

              <Table
                rowSelection={{
                  type: selectionType,
                  ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
              />
            </div>
          </div>
        </div>
      </dic>


    </>
  );
};

export default Filterbycolor;
