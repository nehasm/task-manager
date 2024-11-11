import React, { useState } from "react";

interface searchTaskProps {
  onSearch: (category: string) => void;
}

const SearchTask = ({ onSearch }: searchTaskProps) => {
  const [category, setCategory] = useState("");

  const changeCategoryInput = (e) => {
    const value = e.target.value;
    setCategory(value);
    onSearch(value);
  };

  return (
    <div>
      <input type="text" value={category} onChange={changeCategoryInput} />
    </div>
  );
};

export default SearchTask;
