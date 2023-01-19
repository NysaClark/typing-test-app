import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//TODO redux store imports

//TODO import styling

// test options
const options = {
  time: [15, 30, 45, 60, 120],
  theme: ["default"],
  type: ["words", "sentences", "quotes", "numbers"],
};

const Header = () => {
  //TODO get prefs and time from store

  const dispatch = useDispatch();

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "default";
    const type = localStorage.getItem("type") || "words";
    const time = parseInt(localStorage.getItem("time") || "60", 10);

    //TODO import & dispatch wordlist
    //TODO dispatch timer
    //TODO dispatch tyoe
    //TODO dispatch time
    //TODO dispatch theme
  }, [dispatch]);

  //TODO set theme
  useEffect(() => {
    //TODO
  }, []);

  //TODO set time
  useEffect(() => {
    //TODO
  }, []);

  //TODO set type
  useEffect(() => {
    //TODO
  }, []);

  // when you change one of the test options
  const handleOptions = ({ target }) => {
    console.log(target.dataset.option);
    console.log(target.value);

    if (target && target.dataset.option) {
      //target.dataset.option is time, theme, or type
      switch (target.dataset.option) {
        case "theme":
          //TODO dispatch theme
          break;

        case "time":
          //TODO dispatch time
          break;

        case "type":
          //TODO dispatch type
          break;
      }
      target.blur();
    }
  };

  return (
    <div id="header"
    // className={timerOn ? "hidden" : undefined}
    >
      <a href="/" style={{ textDecoration: "none" }} className="logo">
        typing-test
      </a>
      <div className="buttons">
        {Object.entries(options).map(([option, choices]) => (
          <div key={option} className={option}>
            {option}:
            {choices.map((choice) => (
              <button
                className="mini"
                key={choice}
                data-option={option}
                value={choice}
                onClick={(e) => handleOptions(e)}
              >
                {choice}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
