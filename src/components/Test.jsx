import React, {useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
// TODO import store state
// TODO import store actions
//TODO import styling

const Test = () => {
    // TODO get word and time from store's state
    const dispatch = useDispatch();
    // const extraLetters = ;
    const activeWord = useRef(null);
    const caretRef = useRef(null);

    useEffect(() => {
        //TODO dispatch(setRef(activeWord))
        //TODO dispatch(setCareRef(caretRef))
    }, [dispatch]);

    return (
        <div className='test'>
            <div className="timer">
                {/* {timer} */}
            </div>
            <div className="box">
                {/* map wordList */}
            </div>
        </div>
    );
}

export default Test;
