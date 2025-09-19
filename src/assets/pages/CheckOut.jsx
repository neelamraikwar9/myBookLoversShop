import React from 'react';



const CheckOut = () => {
  return (
    <main className="container">
     {/* when address is selected - take them to checkout page - which gives the order summary - when user clicks on checkout - display a message "Order places successfully" */}
    <h3>CheckOut</h3>
    <div className="row"></div>
    <div className='container'>
        <div className='col-md-6'>
            <div className='card'>
             <div className='card-header'>
             <h4>Selected Address</h4>

             </div>
            </div>
            

        </div>
    </div>
    </main>
  )
}

export default CheckOut