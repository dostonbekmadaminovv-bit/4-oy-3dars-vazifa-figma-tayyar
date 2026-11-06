import React from "react";

function Section2(props) {
  return (
    <section>
      <div className="cards2 container">
        <div className="card2">
          <div className="qator1">
            <p>{props.p}</p>
            <img src={props.img1} alt="" />
          </div>
          <div className="qator2">
            <h2>{props.h2}</h2>
            <img src={props.img2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
