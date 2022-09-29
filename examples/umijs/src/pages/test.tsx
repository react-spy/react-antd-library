import React from "react";
import { Table } from "antd";
import { tableUtils } from "react-antd-library";

const { mergeTableRows, onCellTableField } = tableUtils;

const dataSource = [
  {
    key: "1",
    name: "张三",
    age: 32,
    address: "西湖区湖底公园1号",
  },
  {
    key: "2",
    name: "李四",
    age: 42,
    address: "西湖区湖底公园2号",
  },
  {
    key: "4",
    name: "李四",
    age: 22,
    address: "西湖区湖底公园2号",
  },
  {
    key: "3",
    name: "王五",
    age: 22,
    address: "西湖区湖底公园3号",
  },
];

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
    onCell: (row: Record<string, any>) => onCellTableField(row, "name"),
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
    onCell: (row: Record<string, any>) => onCellTableField(row, "name"),
  },
];
const MergeTableRows = () => {
  return (
    <Table
      dataSource={mergeTableRows(dataSource, ["name", "address"])}
      columns={columns}
      bordered
      pagination={false}
    />
  );
};
export default MergeTableRows;
