import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="" className="fs-5">Track Tickets</a>
      </div>
      <div className="row p-5 m-3"  >
        <div className="col-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input style={{width:"80%",height:"30%", marginBottom:"12px"}} placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."  />
          <br />
         
          <a href="" style={{textUnderlineOffset: "40%" }} className="fs-6">Track account opening</a>
          &nbsp;    &nbsp; &nbsp;    &nbsp;
          <a href="" style={{textUnderlineOffset: "40%" }} className="fs-6">Track segment activation</a>
            &nbsp;    &nbsp; &nbsp;    &nbsp;
          <a href="" style={{textUnderlineOffset: "40%", marginBottom:"4px" }} className="fs-6">Intraday margins</a>
            
            <br></br>
            <br></br>
          <a href="" style={{textUnderlineOffset: "40%", marginTop:"10px "}} className="fs-6 ">Kite user manual</a>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3 mb-3">Featured</h1>

          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <br></br>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;