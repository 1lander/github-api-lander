import React from "react";
import { Input } from "antd";

const SearchInput = ({ onSearch }) => {
  return (
    <Input
      className="w-72"
      size="large"
      placeholder="Search..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchInput;
