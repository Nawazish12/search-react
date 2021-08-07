import React from "react";

const SearchResult = (props) => {
  // images link from unsplahsource.com
  const img1 = `https://source.unsplash.com/800x500/?${props.name}`;
  return (
    <div>
      <img src={img1} alt="search" />
    </div>
  );
};

export default SearchResult;
