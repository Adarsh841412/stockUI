import React from 'react';

function Pricing() {
    return ( 
<div className='container mt-5 p-5'>

  <div className='row'>
<div className='col-4'>
    <h4 className='mb-3'>Unbeatable pricing</h4>

    <p className=' text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
 
    <a href=''  style={{textDecoration:"none"}}  className='text-center'  >Explore our products  <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>




</div>

<div className='col-2'></div>

<div className='col-6'>

<div className='row text-center'>

<div className='col p-3 border'>
    <h1 className='mb-3'>&#8377;0</h1>
    <p> Free equity delivery and <br></br> direct mutual funds </p>

</div>
<div className='col border p-3 '>
    <h1 className='mb-3'>&#8377;20</h1>
    <p> Intraday andF&O</p>
</div>

</div>


</div>


</div>
</div>
     );
}

export default Pricing;