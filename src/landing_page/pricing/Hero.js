import React from "react";

function Hero() {
  return (
    <div className="container mb-5">
      <div className="row mt-5  p-5 text-center  mb-5">

        <h1>Charges</h1>

        <h3 className=" fs-4 mt-4 text-muted">List of all charges and taxes</h3>

      </div>

<div className="row text-center">

<div className="col-4">


<img src="media/images/pricing0.svg"></img>
<h1 className="fs-4">Free equity delivery</h1>
<h3 className=" fs-6 mt-4 text-muted">All equity delivery investments (NSE, BSE), <br></br>are absolutely free — ₹ 0 brokerage.</h3>

</div>

<div className="col-4">

<img src="media/images/other-trades.svg"></img>
<h1 className="fs-4">Intraday and F&O trades</h1>
<h3 className=" fs-6 mt-4 text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</h3>

</div>



<div className="col-4">


<img src="media/images/pricing0.svg"></img>
<h1 className="fs-4">Free direct MF</h1>
<h3 className=" fs-6 mt-4 text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</h3>


</div>

</div>


    </div>
  );
}

export default Hero;
