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
    <div className={(value===true)? "Dark" : "Bright"}>
      <div >
        The Color is {(value === true)? "Bright" : "Dark"}</div>
      <button onClick={cllick}>Change Color</button>
    </div>
  );
}

ReactDOM.render(<Room />, document.querySelector("#root"));



