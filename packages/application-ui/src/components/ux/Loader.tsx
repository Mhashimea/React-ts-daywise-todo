import React from "react";
import LoaderGif from "../../assets/images/svg/loader.gif";

export default function Loader() {
  return (
    <div className="loader-gif">
      <img src={LoaderGif} alt="" />
      <h1>Loading...</h1>
    </div>
  );
}
