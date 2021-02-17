//weather display code in here so i can export to app.js

import React from 'react';
const Conditions = (props) => {
   return (
       <div>
           {props.responseObj.cod === 200 ?
               <div>
                   <p><strong>{props.responseObj.name},{props.responseObj.sys.name}</strong></p>
                   <p> {Math.round(props.responseObj.main.temp)}&&deg </p>
                   <p>{props.responseObj.weather[0].description}.</p>
               </div>
           : null
           }
       </div>
   )
}
export default Conditions;