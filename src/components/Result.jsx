import { resetTest } from "../helpers/resetTest";
import { useSelector } from "react-redux";

const Result = () => {
    const { wordList, typedHistory, currWord } = useSelector((state) => state.word);
    const timeLimit = useSelector((state) => state.preferences.timeLimit);
    const spaces = wordList.indexOf(currWord);
    let correctChars = 0;
    const result = typedHistory.map(
      (typedWord, idx) => typedWord === wordList[idx]
    );
    result.forEach((r, idx) => {
      if (r) correctChars += wordList[idx].length;
    });
    const wpm = ((correctChars + spaces) * 60) / timeLimit / 5;
  
    return (
      <div className="result">
        <table>
          <tbody>
            <tr>
              <td colSpan={2} align="center">
                <h1>{Math.round(wpm)+ " wpm"}</h1>
              </td>
            </tr>
            <tr>
              <th>Correct Words:</th>
              <td>{result.filter((x) => x).length}</td>
            </tr>
            <tr className="wrong">
              <th>Incorrect Words:</th>
              <td>{result.filter((x) => !x).length}</td>
            </tr>
            <tr>
              <td colSpan={2} align="center">
                <button onClick={() => resetTest()}>Restart</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Result;
  