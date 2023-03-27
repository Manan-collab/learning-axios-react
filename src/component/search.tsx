import React, { useState } from 'react';
import '../index.css';

interface DataItem {
  id: number;
  title: string;
}

interface SearchFieldProps {
  data: DataItem[];
}

function SearchField({value,setValue }: any) {

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  };

  return (
    <div className="searchbox">
      <input className="input"
        type="text"
        placeholder="Search"
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchField;
