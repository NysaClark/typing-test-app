import { combineReducers } from "redux";
import {
  SET_CHAR,
  SET_WORD,
  TIMER_DECREMENT,
  TIMERID_SET,
  TIMER_SET,
  APPEND_TYPED_HISTORY,
  PREV_WORD,
  SET_WORDLIST,
  SET_THEME,
  SET_TIME,
  SET_REF,
  SET_CARET_REF,
  SET_TYPE,
  // SET_MISSED_CHARS,
  // MISSED_CHARS_INCREMENT,
} from "./actions";

export const initialState = {
  preferences: {
    theme: "",
    timeLimit: 0,
    type: "",
  },
  word: {
    currWord: "",
    typedWord: "",
    typedHistory: [],
    wordList: [],
    activeWordRef: null,
    caretRef: null,
    // missedChars: 0
  },
  time: {
    timer: 1,
    timerId: null,
  },
};

const timerReducer = (state = initialState.time, { type, payload }) => {
  switch (type) {
    case TIMER_DECREMENT:
      return { ...state, timer: state.timer - 1 };
    case TIMER_SET:
      return { ...state, timer: payload };
    case TIMERID_SET:
      return { ...state, timerId: payload };
    default:
      return state;
  }
};

const wordReducer = (state = initialState.word, { type, payload }) => {
  switch (type) {
    case SET_CHAR:
      return { ...state, typedWord: payload };
    case SET_WORD:
      return { ...state, typedHistory: [...state.typedHistory, payload] };
    case APPEND_TYPED_HISTORY:
      const nextIdx = state.typedHistory.length + 1;
      return {
        ...state,
        typedWord: "",
        currWord: state.wordList[nextIdx],
        typedHistory: [...state.typedHistory, state.typedWord],
      };
    case PREV_WORD:
      const prevIdx = state.typedHistory.length - 1;
      return {
        ...state,
        currWord: state.wordList[prevIdx],
        typedWord: !payload ? state.typedHistory[prevIdx] : "",
        typedHistory: state.typedHistory.splice(0, prevIdx),
      };
    case SET_REF:
      return {
        ...state,
        activeWordRef: payload,
      };
    case SET_CARET_REF:
      return {
        ...state,
        caretRef: payload,
      };
    case SET_WORDLIST:
      const areNotWords = payload.some((word) => word.includes(" "));
      var shuffledWordList = payload.sort(() => Math.random() - 0.5);
      if (areNotWords)
        shuffledWordList = payload.flatMap((token) => token.split(" "));
      return {
        ...state,
        typedWord: "",
        typedHistory: [],
        currWord: shuffledWordList[0],
        wordList: [...shuffledWordList],
      };
    // case SET_MISSED_CHARS:
    //   return { ...state, missedChars: payload };
    // case MISSED_CHARS_INCREMENT:
    //   return { ...state, missedChars: state.missedChars + 1 };
    default:
      return state;
  }
};

const preferenceReducer = (
  state = initialState.preferences,
  { type, payload }
) => {
  switch (type) {
    case SET_THEME:
      return { ...state, theme: payload };
    case SET_TIME:
      return {
        ...state,
        timeLimit: payload,
      };
    case SET_TYPE:
      return {
        ...state,
        type: payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  time: timerReducer,
  word: wordReducer,
  preferences: preferenceReducer,
});
