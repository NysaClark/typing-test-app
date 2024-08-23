import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import Test from "./components/Test";
import Result from "./components/Result";
import Footer from "./components/Footer";
import { setTimerId } from "./store/actions";
import { recordTest } from "./helpers/recordTest";

export default function App() {
    const { timerId, timer } = useSelector((state) => state.time);
    const { currWord, typedWord, activeWordRef } = useSelector((state) => state.word);
    const dispatch = useDispatch();

    useEffect(() => {
        document.onkeydown = (e) => {
            if (
                e.key.length === 1 ||
                e.key === "Backspace" ||
                e.key === "Tab"
            ) {
                recordTest(e.key, e.ctrlKey);
                e.preventDefault();
            }
        };
        return () => {
            document.onkeydown = null;
        };
    }, [dispatch]);

    useEffect(() => {
        let idx = typedWord.length - 1;
        const currWordEl =
            activeWordRef === null || activeWordRef === void 0
                ? void 0
                : activeWordRef.current;
        if (currWordEl) {
            currWordEl.children[idx + 1].classList.add(
                currWord[idx] !== typedWord[idx] ? "wrong" : "right"
            );
        }
    }, [currWord, typedWord, activeWordRef]);

    useEffect(() => {
        let idx = typedWord.length;
        const currWordEl =
            activeWordRef === null || activeWordRef === void 0
                ? void 0
                : activeWordRef.current;
        if (currWordEl && idx < currWord.length)
            currWordEl.children[idx + 1].classList.remove("wrong", "right");
    }, [currWord.length, typedWord, activeWordRef]);

    useEffect(() => {
        if (!timer && timerId) {
            clearInterval(timerId);
            dispatch(setTimerId(null));
        }
        //! can get the number of missed characters 
        //! right before the test ends and is hidden
        //! BUT this doesn't track the chracters that are
        //! mistyped then corrected
        // if (timer == 1) {
        //     console.log(document.querySelectorAll("span.wrong"))
        // }
    }, [dispatch, timer, timerId]);

    return (
        <>
            <Header />
            {timer ? <Test /> : <Result />}
            <Footer />
        </>
    );
}
