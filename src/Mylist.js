import React from 'react';

const MyList = () => {
const itemList = [
  "$10",
  "Unlimited",
  "NO Commission",
  "Current",
  "No brokerage",
  "$300",
  "months",
  "year",
  "good luck"
];


  return (
    <div>
    <ul>
      {itemList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    <button className="btn btn_second" style={{margin:"5px"}}>Start Trading</button>
    </div>
  );
};

export default MyList;
