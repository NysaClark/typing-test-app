import { useSelector } from "react-redux";
//TODO redux store imports

//TODO import styling

const Result = () => {
  //TODO get word references from store
  // const spaces;
  let correctChars = 0;
  // const result ;
  // result.forEach()
  // const wpm;

  return (
    <div className="result">
      <table>
        <tbody>
          <tr>
            <td colSpan={2} align="center">
              {/* <h1></h1> */}
            </td>
          </tr>
          <tr>
            <th>Correct Words:</th>
            {/* <td></td> */}
          </tr>
          <tr className="wrong">
            <th>Incorrect Words:</th>
            {/* <td></td> */}
          </tr>
          <tr>
            <td colSpan={2} align="center">
              {/* <button onClick={() => resetTest()}>Restart</button> */}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Result;
