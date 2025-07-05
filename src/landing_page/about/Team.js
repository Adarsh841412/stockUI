import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5" style={{ lineHeight: "1.9", fontSize: "1.2em" }}>
        <h1 className="text-center">People</h1>

        <div className="col-6 p-5 mt-4 text-muted text-center">
          <img src="media/images/adarsh.png" style={{ borderRadius: "100%", width: "60%" }} alt="Adarsh Dubey" />
          <h1 className="text-muted" style={{ marginTop: "2%" }}>ADARSH DUBEY</h1>
          <h6 >Founder & CEO</h6>
        </div>

        <div className="col-6 p-5 text-muted">
          <p>Adarsh bootstrapped and founded Advest in 2010 to overcome the hurdles he faced during his decade-long stint as a trader.</p>

          <p>Today, Advest has changed the landscape of the Indian broking industry.</p>

          <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

          <p>Playing basketball is his zen.</p>

          <p>
            Connect on <a style={{ textDecoration: "none" }} href="#">Homepage</a> /{" "}
            <a style={{ textDecoration: "none" }} href="#">TradingQnA</a> /{" "}
            <a style={{ textDecoration: "none" }} href="#">Twitter</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
