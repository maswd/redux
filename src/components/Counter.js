import React, { useState } from 'react';
import { decrease_count, increase_count } from '../redux/counter/CounterAction';
// import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

const Counter = (props) => {
    const counter = useSelector(state => state.counter.counter)
    const dispatch = useDispatch()
    const [value, setValue] = useState(1);
    return (
        <div>
            <h1>Counter - {counter}</h1>
            <input type="text" value={value}
                onChange={(e) => setValue(e.target.value)} />
            <button onClick={() => dispatch(increase_count(+value))}>Increase</button>
            <button onClick={() => dispatch(decrease_count(+value))}>Decrease</button>
            {/* <h1>Counter - {props.counter}</h1>
            <button onClick={props.increase}>Increase</button> */}
        </div>
    );
};
// const mapStateToProps = state => {
//     return {
//         counter: state.counter 
//     }
// }
// const mapDispatchToProps = dispatch => {
//     return {
//         increase: () => dispatch(increase())
//     }
// }

export default Counter;
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);