import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRef, setCaretRef } from "../store/actions";

const Test = () => {
  const { typedWord, currWord, wordList, typedHistory } = useSelector((state) => state.word);
  const timer = useSelector((state) => state.time.timer);

  const dispatch = useDispatch();
  const extraLetters = typedWord.slice(currWord.length).split("");
  const activeWord = useRef(null);
  const caretRef = useRef(null);

  useEffect(() => {
    dispatch(setRef(activeWord));
    dispatch(setCaretRef(caretRef));
  }, [dispatch]);

  return (
    <div className="test">
      <div className="timer">{timer}</div>
      <div className="box">
        {wordList.map((word, index) => {
          const isActive = currWord === word && typedHistory.length === index;
          return (
            <div
              key={word + index}
              className="word"
              ref={isActive ? activeWord : null}
            >
              {isActive ? (
                <span
                  ref={caretRef}
                  id="caret"
                  className="blink"
                  style={{
                    left: typedWord.length * 14.5833,
                  }}
                >
                  |
                </span>
              ) : null}
              {word.split("").map((char, charId) => {
                return <span key={char + charId}>{char}</span>;
              })}
              {isActive
                ? extraLetters.map((char, charId) => {
                    return (
                      <span key={char + charId} className="wrong extra">
                        {char}
                      </span>
                    );
                  })
                : typedHistory[index]
                ? typedHistory[index]
                    .slice(wordList[index].length)
                    .split("")
                    .map((char, charId) => {
                      return (
                        <span key={char + charId} className="wrong extra">
                          {char}
                        </span>
                      );
                    })
                : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Test;
