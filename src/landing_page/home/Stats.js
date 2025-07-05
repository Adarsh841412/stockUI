import React from 'react';

function Stats() {
    return ( 
    
<div className='container p-3'>

<div className='row p-3' >

<div className='col-6 p-3'>

<h1>Trust with confidence</h1>
<br></br>
<br></br>
<h2 className='fs-5'>Customer-first always</h2>
<p  style={{textAlign:"left"}} className='text-muted' >That's why 1.6+ crore customers trust Advest with ~ ₹6 lakh <br></br> crores of equity investments and contribute to 15% <br></br>of daily retail exchange volumes in India</p>
<br></br>
<h2 className='fs-5'>No spam or gimmicks</h2>
<p  style={{textAlign:"left"}} className='text-muted' >No gimmicks, spam, "gamification", or annoying push <br></br>notifications. High quality apps that you use at your <br></br>pace, the way you like. Our philosophies.</p>

<br></br>

<h2 className='fs-5'>The Advest universe</h2>
<p  style={{textAlign:"left"}} className='text-muted' >Not just an app, but a whole ecosystem. Our investments<br></br> in 30+ fintech startups offer you tailored services<br></br> specific to your needs.</p>

<br></br>

<h2 className='fs-5'>Do better with money</h2>
<p style={{textAlign:"left"}} className='text-muted' >With initiatives like Nudge and Kill Switch, we don't just <br></br> facilitate transactions, but actively help you do better <br></br>with your money.</p>

</div>

<div className='col-6 p-3'>

<img src='media/images/ecosystem.png'  alt='ecosystem' style={{width:"95%"}}/>

<div>
    <a href=''  style={{textDecoration:"none"}}  className='text-center'  >Explore our products  <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
 
    <a href='' style={{textDecoration:"none"}} className='mx-4'>Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
</div>

</div>
</div>

<div> <img src="media/images/pressLogos.png" style={{ width: "70%" ,marginLeft:"15%", fontSize:"20px"}}    alt="presslogo" /></div>




</div>





     );
}

export default Stats;