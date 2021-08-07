import React, { useState } from "react";
import SearchResult from "./SearchResult";
import TextField from "@material-ui/core/TextField";

const SearchItem = () => {
  const [img, setImg] = useState("");

  const inputEvent = (e) => {
    const data = e.target.value;
    console.log(data);
    setImg(data);
  };

  return (
    <div
      style={{
        textAlign: "center",
        minWidth: "100px",
      }}
    >
      <TextField
        id="standard-basic"
        label="search something.."
        value={img}
        onChange={inputEvent}
        style={{ width: "25%", marginTop: "20px" }}
      />

      <br />
      <br />
      <br />
      <SearchResult name={img} />
    </div>
  );
};

export default SearchItem;
