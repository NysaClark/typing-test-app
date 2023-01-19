import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
//TODO redux store imports

//TODO import styling

const Footer = () => {
//TODO get time from store

  return (
    // TODO add to time to div's className
    <div className={`bottom`}>
      <span className="hint">
        <kbd>Tab</kbd> to restart test
      </span>
      <div id="footer">
        <a style={{ textDecoration: "none"}} target="_blank" rel="noreferrer" href="https://github.com/">
          <span>&lt;/&gt;</span> github
        </a>
        <span>
        created by{" "}
          <a
          style={{ textDecoration: "none"}} 
            target="_blank"
            rel="noreferrer"
            href="https://github.com/NysaClark"
          >
            Nysa Clark
          </a>
        </span>
        <span>
          inspired by{" "}
          <a
          style={{ textDecoration: "none"}} 
            target="_blank"
            rel="noreferrer"
            href="https://www.github.com/salmannotkhan"
          >
            @salmannotkhan
          </a>
          {" "}&{" "}
          <a
          style={{ textDecoration: "none"}} 
            target="_blank"
            rel="noreferrer"
            href="https://github.com/monkeytypegame"
          >
            @monkeytypegame
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
