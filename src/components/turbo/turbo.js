import React from "react";
import { TurboSide } from "./style";

function Turbo({ data }) {
  return (
    <TurboSide>
      <div className="Turbo-Main-Section">
        <div
          style={{ flexDirection: data?.direction }}
          className="Turbo-Container"
        >
          <img className="Turbo-images" src={data.img} alt="" />
          <div style={{ gap: "5px" }} className="Turbo-Text-Section">
            <h1 className="Turbo-Title">{data.title}</h1>
            <span style={{ width: data?.descWidth }} className="Turbo-Text">
              {data.desc}
            </span>
            <span style={{ width: data?.descWidth }} className="Turbo-Text">
              {data.desc2}
            </span>

            <span style={{ width: data?.descWidth }} className="Turbo-Text">
              {data.desc3}
            </span>
          </div>
        </div>
      </div>
    </TurboSide>
  );
}

export default Turbo;
