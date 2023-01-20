import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Test from "./components/Test.jsx";
import Result from "./components/Result.jsx";
import { State } from "./store/reducer";
import { setTimerId } from "./store/actions";
import { recordTest } from "./util/recordTest";
// TODO styling imports

function App() {
  const {
    time: { timerId, timer },
    word: { currWord, typedWord, activeWordRef },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    // start/restart the test on keydown
    document.onkeydown = (e) => {
      if (e.key.length === 1 || e.key === "Backspace" || e.key === "Tab") {
        recordTest(e.key, e.ctrlKey);
        e.preventDefault();
      }
    };
    // cleanup
    return () => {
      document.onkeydown = null;
    };
  }, [dispatch]);

  useEffect(() => {
    let idx = typedWord.length - 1;
    const currWordEl = activeWordRef.current;
    if (currWordEl) {
      currWordEl.children[idx + 1].classList.add(
        currWord[idx] !== typedWord[idx] ? "wrong" : "right"
      );
    }
  }, [currWord, typedWord, activeWordRef]);

  useEffect(() => {
    let idx = typedWord.length;
    const currWordEl = activeWordRef.current;
    if (currWordEl && idx < currWord.length) {
      currWordEl.children[idx + 1].classList.remove("wrong", "right");
    }
  }, [currWord.length, typedWord, activeWordRef]);

  useEffect(() => {
    if(!timer && timerId){
      clearInterval(timerId);
      dispatch(setTimerId(null));
    }
  }, [dispatch, timer, timerId]);

  return (
    <>
      <Header />
      {timer ? <Test /> : <Result />}
      <Footer />
    </>
  );
}

export default App;
