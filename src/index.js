import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Room() {
  const [value, setValue] = React.useState(true);

   function cllick(){
     setValue ((previousValue) =>(!previousValue))
    //  previousValue 

   }

  return (
    <div className={(value===true)? "Bright " : "Dark"}>
      <div >
        The Color is {(value === true)? "Dark" : "Bright"}</div>
      <button onClick={cllick}>Change Color</button>
    </div>
  );
}

ReactDOM.render(<Room />, document.querySelector("#root"));



