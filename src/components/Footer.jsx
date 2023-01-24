import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import "stylesheets/Footer.scss";

export default function Footer() {
  const { timerId } = useSelector((state) => state.time);

  return (
    <div className={`bottom-area ${timerId ? "hidden" : ""}`}>
      <span className="hint">
        <kbd>Tab</kbd> to restart test
      </span>
      <footer>
        <a
          style={{ textDecoration: "none" }}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/"
        >
          <span>&lt;/&gt;</span> github
        </a>
        <span>
          created by{" "}
          <a
            style={{ textDecoration: "none" }}
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
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer"
            href="https://www.github.com/salmannotkhan"
          >
            @salmannotkhan
          </a>{" "}
          &{" "}
          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer"
            href="https://github.com/monkeytypegame"
          >
            @monkeytypegame
          </a>
        </span>
      </footer>
    </div>
  );
}
