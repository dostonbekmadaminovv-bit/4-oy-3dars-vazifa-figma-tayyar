import React from "react";

function Section1(props) {
  return (
    <section className="cards container">
      <div>
        <div className="card">
          <img className="img1" src={props.img} alt="" />
          <h2 className="h2">{props.h2}</h2>
          <p className="p">{props.p}</p>
          <img className="img2" src={props.img2} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Section1;
