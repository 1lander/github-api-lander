import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const BackButton = ({ route }) => {
  return (
    <Link to={route}>
      <Button
        type="primary"
        shape="circle"
        icon={<ArrowLeftOutlined />}
        size="large"
        ghost
      />
    </Link>
  );
};

export default BackButton;
