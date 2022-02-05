import React from 'react';
import { decrease_num, increase_num } from '../redux/number/numberAction';
// import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

const Number = (props) => {
    const Number = useSelector(state => state.number.number)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Number - {Number}</h1>
            <button onClick={() => dispatch(increase_num())}>Increase</button>
            <button onClick={() => dispatch(decrease_num())}>Decrease</button>
            {/* <h1>Number - {props.Number}</h1>
            <button onClick={props.increase}>Increase</button> */}
        </div>
    );
};


export default Number;
