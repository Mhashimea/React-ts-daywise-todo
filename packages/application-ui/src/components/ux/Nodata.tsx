import React from "react";
import NoDataImage from "../../assets/images/svg/no-data.svg";

export default function NoData() {
  return (
    <div className="no-data">
      <img src={NoDataImage} />
      <h1>No Data Found</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
        temporibus, non eos quod recusandae cumque tenetur nobis doloribus
        cupiditate voluptatum soluta omnis et suscipit illum debitis assumenda
        at, aspernatur laborum?
      </p>
    </div>
  );
}
