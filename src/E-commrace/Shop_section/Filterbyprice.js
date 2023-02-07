import React, { useState, useEffect } from "react";
import { Checkbox, Divider, Radio, Table } from "antd";
import axios from "axios";
import useSelection from "antd/es/table/hooks/useSelection";
import { useDispatch, useSelector } from "react-redux";
import { add_check } from "../Redux/Reducer";

const Filterbyprice = () => {
  const [selectionType, setSelectionType] = useState("checkbox");
  const dispatch = useDispatch();

  const columns = [
    {
      title: "ALLprice",
      dataIndex: "ALLprice",
      render: (text) => <a>{text}</a>,
    },

    {
      title: "totalprice",
      dataIndex: "totalprice",
    },
  ];

  const data = [
    {
      key: "1",
      ALLprice: "$0-$100",
      min: 0,
      max: 100,
      totalprice: "price",
    },
    {
      key: "2",
      ALLprice: "$100-$200",
      min: 100,
      max: 200,
      totalprice: "price",
    },
    {
      key: "3",
      ALLprice: "$200-$300",
      min: 200,
      max: 300,
      totalprice: "price",
    },
    {
      key: "4",
      ALLprice: "$300-$400",
      min: 300,
      max: 400,
      totalprice: "price",
    },
    {
      key: "5",
      ALLprice: "$400-$500",
      min: 400,
      max: 500,
      totalprice: "price",
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      const getmin = Math.min(...selectedRows.map((val) => val.min));
      const getmax = Math.max(...selectedRows.map((val) => val.max));
      axios
        .get(
          `${process.env.REACT_APP_BASE_URL}/api/v1/product/?min_price=${getmin}&max_price=${getmax}`
        )
        .then((res) => {
          const newdata = res?.data;
          dispatch(add_check(newdata.results));
          // setDatanw(newdata.results);
        });

      // dispatch(add_check(datanw))
      // console.log(
      //   `selectedRowKeys: ${selectedRowKeys}`,
      //   "selectedRows: ",
      //   selectedRows
      // );

      // getusere();
    },
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="head-price-sec">
              <h2>FILER BY PRICE</h2>
            </div>
            <div>
              <Radio.Group
                // onChange={(e)=>getval(e)}

                onChange={({ target: { value } }) => {
                  setSelectionType(value);
                  // setDatanw(value);
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
      </div>
    </>
  );
};

export default Filterbyprice;
