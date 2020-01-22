import React from "react";
function consolee() {
  console.log("halaaaa");
}

export default ({ close }) => (
  <div className="modal">
    <a className="close" href="/" onClick={close}>
      &times;
    </a>
    <div className="header"> Pop-Up </div>
    <div className="content">Are you sure ?...</div>
    <button onClick={consolee}> Yes</button>
  </div>
);
