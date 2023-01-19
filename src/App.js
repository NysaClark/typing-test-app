import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Test from "./components/Test.jsx";
import Result from "./components/Result.jsx";
// component imports
// TODO redux store imports
// TODO styling imports

function App() {
  const [testOn, setTestOn] = useState(true);
  // TODO get time and word from store state
  const dispatch = useDispatch();

  useEffect(() => {
    // start/restart the test on keydown
    document.onkeydown = (e) => {
      if (e.key.length === 1 || e.key === "Backspace" || e.key === "Tab") {
        e.preventDefault();
        // TODO recordTest()
      }
    };
    // cleanup
    return () => {
      document.onkeydown = null;
    };
  }, [dispatch]);

  useEffect(() => {
    // TODO typing words?
  }, []);

  useEffect(() => {
    // TODO typing words?
  }, []);

  useEffect(() => {
    // TODO test ends?
  }, []);

  return (
    <>
      <Header />
      {testOn ? <Test /> : <Result />}
      {/* {timer ? <Test /> : <Result />} */}
      <Footer />
    </>
  );
}

export default App;
