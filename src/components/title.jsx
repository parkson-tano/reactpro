import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
function Title( {name, title}) {

        return ( 
            <div className="row">
   <div className="col-10 mx-auto text-center text-title">
       <h1 className="text-capitalize font-weight-bold">
           {name} <strong> <div className="text-red">{title}</div> </strong>
       </h1> 
   </div>
            </div>
         );
}
 
export default Title;